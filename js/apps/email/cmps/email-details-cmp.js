import emailService from '../services/email-service.js';

export default {
    template: `
        <section class="email-details-container" v-if="email">
            <div class="email-header">
                <span><b>{{email.subject}}</b></span>
                <button class="delete-btn" @click="deleteEmail">Delete</button>
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
        '$route.params.emailId': function (emailId, oldParam) {
            emailService.getEmailById(emailId)
                .then(email => this.email = email);
        }
    },
    methods: {
        deleteEmail(emailId) {
            var emailId = this.$route.params.emailId;
            emailService.deleteEmail(emailId)
                .then(() => {
                    console.log('Email Succesfully Deleted');
                })
        }
    }
}