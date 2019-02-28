import emailPreview from './email-preview-cmp.js';

export default {
    props: ['emails'],
    template: `
        <section class="email-list-container">
            <router-link class="email-list" :key="currEmail.id" v-for="(currEmail, idx) in emails" 
                :to="'/email-app/email/' + currEmail.id" >
                <email-preview  :email="currEmail" :idx="idx+1">
                </email-preview>
            </router-link>
        </section>
    `,
    components: {
        emailPreview
    },
    
}