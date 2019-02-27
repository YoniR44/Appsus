import emailService from '../services/email-service.js';
import emailList from '../cmps/email-list-cmp.js';
import emailFilter from '../cmps/email-filter-cmp.js';

export default {
    template: `
        <section class="email-app-body" v-if="emails">
            <h1>Email-app</h1>
            <email-filter @filtered="setFilter"></email-filter>
            <email-list :emails="emailsToShow"></email-list>  
        </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: {
                term: '',
            },
        }
    },
    methods: {
        setFilter(filterBy) {
            console.log('emailApp Got Filter: ', filterBy);
            this.filterBy = filterBy;
        },
    },
    computed: {
        emailsToShow() {
            if (!this.emails) return;
            return this.emails.filter(email => email.subject.toLowerCase().includes(this.filterBy.term.toLowerCase()) || email.body.toLowerCase().includes(this.filterBy.term.toLowerCase()))
        }
    },
    created() {
        emailService.queryEmails()
        .then(emails => this.emails = emails) 
    },
    components: {
        emailService,
        emailList,
        emailFilter,
    }
}