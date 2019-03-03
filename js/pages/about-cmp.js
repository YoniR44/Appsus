var interval;

export default {
    template: `
        <section class="about-body">
            <div class="about-top">  
                <h1>About Us</h1>
                <p>This app was built using the VueJS framework.</p>
            </div>
            <hr>
            <div class="worker-cards">
                <div class="worker-card">
                    <transition name="fade">   
                        <div class="alert alert-info" v-show="show"><img :src="myImg" alt="" class="myImg"></div>
                    </transition>
                    <div class="worker-name">Yehonatan Ratzon</div>
                    <div class="social-container">    
                        <div class="social-link">
                            <a href="https://github.com/YoniR44">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="https://www.facebook.com/jonathan.ratzon.7">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <button class="port-btn">See My Portfolio</button>       
                </div>
                <div class="worker-card">
                <transition name="fade">   
                        <div class="alert alert-info" v-show="show"><img :src="hisImg" alt="" class="myImg"></div>
                    </transition>
                    <div class="worker-name">Daniel Yosilevich</div>
                    <div class="social-container">    
                        <div class="social-link">
                            <a href="#">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <button class="port-btn">See My Portfolio</button> 
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
    mounted() {
        this.animateImg();
    }
}