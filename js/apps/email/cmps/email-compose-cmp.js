import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    template: `
            <form class="email-form">
                <input class="email-form-subject" type="text" v-model="subject" placeholder="Enter subject" required>
                <button class="email-form-submit" type="submit" @click="saveEmail">Send</button>
                <hr>
                <textarea class="email-form-body" type="text" v-model="body" placeholder="Email body" required></textarea>
            </form>
    `,
    data() {
        return {
            subject: '',
            body: '',
        }
    },
    methods: {
        saveEmail() {
            if (this.subject === '' || this.body === '') return;            
            emailService.addEmail(this.subject, this.body)
            .then(() => {
                console.log('email added');
                eventBus.$emit('statusChanged');
            })      
        }
    },
    components: {
        emailService
    }
}