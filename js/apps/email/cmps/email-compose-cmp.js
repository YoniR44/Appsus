import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    name: 'child2',
    template: `
            <form class="email-form">
                <div> v-model = {{subject}} </div>
                <input class="email-form-subject" type="text" v-model="subject" placeholder="Enter subject" required>
                <button class="email-form-submit" type="submit" @click="saveEmail">Send</button>
                <hr>
                <textarea class="email-form-body" type="text" v-model="body" placeholder="Email body" required></textarea>
            </form>
    `,
    data() {
        return {
            subject: this.$route.params.id,
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
        },
    },
    created() {
        // eventBus.$on('openReply', emailSubject => {
        //     this.subject = emailSubject});
        //     console.log(this.subject); // prints right value   
    },
    components: {
        emailService
    },

    // watch: {
    //     something(){
    //        if(this.something) console.log('hmm');
    //     }
    // }
    // computed: {
    //     something(){
    //         return this.subject;
    //     }
    // }
}