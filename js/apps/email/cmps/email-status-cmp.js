import emailService from '../services/email-service.js';
import { eventBus } from '../../../event-bus.js';

export default {
    props: ['emails'],
    template: `
        <div class="percent-bar" >         
            <div class="progress-bar" 
                :style="{ width: readPercent + '%', backgroundColor: 'lightblue', height: '100%', position: 'absolute', left: '0' }">
            </div>
            <span class="percent-status" style="z-index: 1">{{readPercent}}%</span>
        </div>
    `,
    data() {
        return {
            readPercent: 0,
            max: 100,
        }
    },
    methods: {
        
    },
    component: {
        emailService,
        eventBus
    },
    created() {
        eventBus.$on('statusChanged', () => {     
            var countRead = 0;
            var countTotal = 0;
            for (let i = 0; i < this.emails.length; i++) {
                if (this.emails[i].isRead) countRead++;
                countTotal++;
            }
            this.readPercent = Math.floor((countRead / countTotal) * 100);
        })
    }
}