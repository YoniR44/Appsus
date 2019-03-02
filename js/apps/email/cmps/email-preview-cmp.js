import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    props: ['email'],
    template: `
        <li class="single-email" :class="{'read-email': email.isRead}" @click="updateReadStatus">
            <div class="email-sender-icon">{{email.fromWho}}</div>
            <div class="email-preview-center">
                <div class="email-preview-sender">{{email.fromWho}}</div>
                <div class="email-preview-subject"><b>{{email.subject}}</b></div>
                <div class="email-preview-body">{{email.body}}</div>
            </div>
            <div class="email-sender-time">{{email.sentAt}}</div>
        </li>
    `,
    methods: {
        updateReadStatus() {
            if (this.email.location !== 'inbox') return;
            console.log(this.email.location);
            
            var emailId = this.email.id;
            emailService.updateEmailStatus(emailId, true)
            .then(email => {
                // this.email = email;
                eventBus.$emit('statusChanged');
            });
        }
    },
}