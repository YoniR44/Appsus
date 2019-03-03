import emailService from '../services/email-service.js';
import emailList from '../cmps/email-list-cmp.js';
import emailFilter from '../cmps/email-filter-cmp.js';
import emailStatus from '../cmps/email-status-cmp.js';
import { eventBus } from '../../../event-bus.js';

export default {
    template: `
        <section class="email-app-body" v-if="emails">
            <div class="emails-container">
                <!-- <button class="email-navbar-toggler" @click="showNav=!showNav">
                    <i class="fas fa-bars"></i>
                </button> -->
                <div class="email-navbar" :class="{emailNavbarShow: showNav}">
                    <router-link :to="'/email-app/email-compose'">
                        <button class="compose-btn" @click="notEmpty = true, containersToggler = true, showNav=!showNav"">
                            <div><i class="fas fa-plus"></i></div>
                            <div>Compose</div> 
                        </button>
                    </router-link>
                    <div class="email-navbar-item" style="justify-content: space-between" 
                    @click="changeEmailSection('inbox'), containersToggler = false, showNav=!showNav, filterType = 'all'">
                        <div>Inbox</div>
                        <div><b>{{unreadCount}}</b></div>
                    </div>
                    <div class="email-navbar-item" @click="changeEmailSection('sent'), containersToggler = false, showNav=!showNav, filterType = 'all'">
                        Sent
                    </div>
                    <div class="email-navbar-item" @click="changeEmailSection('deleted'), containersToggler = false, showNav=!showNav, filterType = 'all'">
                        Deleted
                    </div>
                    <email-status :emails="emailsToShow" :section = "emailType"></email-status>
                </div>
                <div class="email-list-wrapper" :class="{hideEmailList: containersToggler}">
                    <div class="email-list-nav">    
                        <button class="email-navbar-toggler" @click="showNav=!showNav">
                            <i class="fas fa-bars"></i>
                        </button>
                        <select class="filter-select" v-model="filterType" :emails="showEmailsBySelect">
                            <option value="all">All</option>
                            <option value="read">Read</option>
                            <option value="unread">Unread</option>
                        </select>
                        <email-filter @filtered="setFilter"></email-filter>
                        <select class="filter-select" v-model="sortType" @change="sortEmailsBySelect">
                            <option value="sortByNewest">Sort By Newest</option>
                            <option value="sortByOldest">Sort By Oldest</option>
                            <option value="sortBySubject">Sort By Subject</option>
                        </select>
                    </div>
                    <div class="email-list" @click="notEmpty = true, containersToggler = !containersToggler" >    
                        <email-list :emails="emailsToShow"></email-list>
                    </div>
                </div>
                <div class="info-container" :class="{hideInfoContainer: !containersToggler}" v-show="notEmpty">
                    <div class="mail-section-nav">
                        <button class="go-back-btn" @click="containersToggler = !containersToggler, notEmpty = false"><i class="far fa-arrow-alt-circle-left"></i></button>
                    </div>
                    <router-view></router-view>
                </div>  
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: {
                term: '',
            },
            filterType: 'all',
            sortType: 'sortByNewest',
            filteredEmails: null,
            emailType: 'inbox',
            notEmpty: false,
            showNav: false,
            containersToggler: false,
            unreadCount: 0,
        }
    },
    methods: {
        setFilter(filterBy) {
            console.log('emailApp Got Filter: ', filterBy);
            this.filterBy = filterBy;
        },
        sortEmailsBySelect() {
            var val = this.sortType;

            if (val === 'sortByNewest') {
                this.emails.sort((email1, email2) => (email1.timeStamp < email2.timeStamp) ? 1 : -1);
            } else if (val === 'sortByOldest') {
                this.emails.sort((email1, email2) => (email1.timeStamp > email2.timeStamp) ? 1 : -1);
            } else if (val === 'sortBySubject') {
                this.emails.sort((email1, email2) => (email1.subject.toUpperCase() > email2.subject.toUpperCase()) ? 1 : -1);
            }
        },
        showEmailsBySelect() {
            var val = this.filterType;

            if (val === 'read') return this.emails.filter(email => email.isRead === true);
            else if (val === 'unread') return this.emails.filter(email => email.isRead === false);
            else return this.emails.filter(email => email);
        },
        changeEmailSection(section) {
            this.emailType = section;
            emailService.queryEmails(this.emailType)
                .then(emails => this.emails = emails)
        },
        countUnreadEmails() {
            if (this.emailType !== 'inbox') return;
            var count = 0;
            for (let i = 0; i < this.emails.length; i++) {
                if (emails[i].isRead === false) {
                    count++;
                }
            }
            this.unreadCount = count;
        },
        goBack() {

        }
    },
    computed: {
        // this is for the search
        emailsToShow() {
            if (!this.emails) return;
            this.filteredEmails = this.showEmailsBySelect();

            return this.filteredEmails.filter(email => email.subject.toLowerCase().includes(this.filterBy.term.toLowerCase()) ||
                email.body.toLowerCase().includes(this.filterBy.term.toLowerCase()));
        },

    },
    created() {
        this.emailType = 'inbox'
        emailService.queryEmails(this.emailType)
            .then(emails => {
                this.emails = emails;

            eventBus.$on('statusChanged', () => {
                if (this.emailType !== 'inbox') return;
                var count = 0;
                for (let i = 0; i < this.emails.length; i++) {
                    if (emails[i].isRead === false) {
                        count++;
                    }
                }
                this.unreadCount = count;
            });
        })
    },
    components: {
        emailService,
        emailList,
        emailFilter,
        emailStatus
    },

}