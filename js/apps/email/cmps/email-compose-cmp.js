import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    name: 'child2',
    template: `
            <form class="email-form">
                <div class="flex space-between align-center">
                    <label>To: </label>
                    <input class="email-form-sender" type="text" v-model="sender" placeholder="abc123@howdy.com" required>
                    <button class="email-form-submit" type="submit" @click="saveEmail"><i class="far fa-paper-plane"></i> Send</button>
                </div>
                <hr>
                <input class="email-form-subject" type="text" v-model="subject" placeholder="Enter subject" required>
                <hr>
                <textarea class="email-form-body" type="text" v-model="body" placeholder="Email body" required></textarea>
            </form>
    `,
    data() {
        return {
            sender: this.$route.params.sender,
            subject: this.$route.params.subject,
            body: '',
        }
    },
    methods: {
        saveEmail() {
            if (this.subject === '' || this.body === '') return;            
            emailService.addEmail(this.subject, this.body, this.sender)
            .then(() => {
                console.log('email added');
                eventBus.$emit('statusChanged');
            })      
        },
    },
    components: {
        emailService
    },
}