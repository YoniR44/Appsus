import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    props: ['email'],
    template: `
        <li class="single-email" :class="{'read-email': email.isRead}" @click="updateReadStatus">
            <span class="email-preview-subject"><b>{{email.subject}}</b></span>
            <div class="email-preview-body">{{email.body}}</div>
        </li>
    `,
    methods: {
        updateReadStatus() {
            var emailId = this.email.id;
            emailService.updateEmailStatus(emailId, true)
            .then(email => {
                this.email = email;
                eventBus.$emit('statusChanged');
            });
        }
    },
}