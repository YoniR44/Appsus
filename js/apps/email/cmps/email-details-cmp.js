import emailService from '../services/email-service.js';

export default {
    template: `
        <section class="email-details-container" v-if="email">
            {{email.subject}}
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
    }
}