import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    template: `
        <section class="email-details-container" v-if="email">
            <div class="email-header">
                <span><b>{{email.subject}}</b></span>
                <div>
                    <router-link :to="'/email-app/email-compose'">                        
                        <button class="reply-btn" @click="replyEmail">Reply</button>
                    </router-link>
                    <button class="unread-btn" @click="unreadEmail">Unread</button>
                    <button class="delete-btn" @click="deleteEmail">Delete</button>
                </div>
            </div> 
            <hr>
            <div class="email-body">
                {{email.body}}
            </div>   
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    created() {
        console.log('Param from route:', this.$route.params);
        const emailId = this.$route.params.emailId;
        emailService.getEmailById(emailId)
            .then(email => this.email = email);
    },
    watch: {
        '$route.params.emailId': function (emailId) {
            emailService.getEmailById(emailId)
                .then(email => this.email = email);
        }
    },
    methods: {
        deleteEmail() {
            var emailId = this.$route.params.emailId;
            var newId;
            emailService.deleteEmail(emailId, newId)
                .then((newEmailId) => {
                    console.log('Email Succesfully Deleted');
                    newId = newEmailId;
                    newId === -1 ? this.$router.push(`/email-app`) : this.$router.push(`/email-app/email/${newId}`);
                    eventBus.$emit('statusChanged');
                })
        },
        unreadEmail() {
            emailService.updateEmailStatus(this.email.id, false)
            .then(email => {
                this.email = email;
                eventBus.$emit('statusChanged');
            });
        },
        replyEmail() {
            eventBus.$emit('openReply', this.email.subject);
            
        }
    }
}