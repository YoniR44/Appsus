var interval;

export default {
    template: `
        <section>
            <h1>About Us</h1>
            <div>  
                <p>This app was built using the VueJS framework.</p>
            </div>
            <div>
                <h3>About me</h3>
                <div class="my-area">
                    <transition name="fade">   
                        <div class="alert alert-info" v-show="show"><img :src="myImg" alt="" class="myImg"></div>
                    </transition>
                    <p>Yes, I'm the guy in the picture</p>
                </div>
            </div>    
            <div>
                <h3>About him</h3>
                <div class="my-area">
                    <transition name="fade">   
                        <div class="alert alert-info" v-show="show"><img :src="hisImg" alt="" class="myImg"></div>
                    </transition>
                    <p>Yes, he is the guy</p>
                </div>
            </div>   
        </section>
    `,
    data() {
        return {
            show: false,
        }
    },
    methods: {
        animateImg() {
            this.show = true;
        }
    },
    computed: {
        myImg() {
            return `img/Yoni.jpg`;
        },
        hisImg() {
            return `img/me.jpg`;
        },
    },
    created() {
        interval = setInterval(() => { console.log('Its Time!') }, 1000);
        // this.show = true;
    },
    destroyed() {
        console.log('Going down...');
        clearInterval(interval)
    },
    mounted() {
        this.animateImg();
    }
}