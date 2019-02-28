import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    props: ['email'],
    template: `
        <li class="single-email" :class="{'read-email': email.isRead}" @click="updateReadStatus">
            <h3>{{email.subject}}</h3>
            <p>{{email.body}}</p>
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