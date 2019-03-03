
import myRoutes from './routes.js';

const myRouter = new VueRouter({routes: myRoutes});
console.log('myRoutes', myRoutes);

window.vueApp = new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <section class="container-all">
            <nav class="main-navbar">
                <div class="navbar-logo">Appsus</div>
                <button class="toggle-nav-btn" @click="showMainNav = !showMainNav"><i class="fas fa-th" style="font-size: 40px"></i></button>
            </nav>
            <div class="drop-down-nav" v-show="showMainNav">
                <router-link class="navbar-item" @click.native="showMainNav = !showMainNav" to="/" exact>
                    <i class="fas fa-home" style="font-size: 40px"></i>
                    <div>Home</div>
                </router-link>
                <router-link class="navbar-item" @click.native="showMainNav = !showMainNav" to="/about">
                    <i class="fas fa-address-card" style="font-size: 40px"></i>
                    <div>About</div> 
                </router-link>
                <router-link class="navbar-item" @click.native="showMainNav = !showMainNav" to="/email-app">
                    <i class="fas fa-envelope icon-large" style="font-size: 40px"></i>
                    <div>Email</div>
                </router-link>
                <router-link class="navbar-item" @click.native="showMainNav = !showMainNav" to="/missKeep-app">
                    <i class="fas fa-lightbulb" style="font-size: 40px"></i>
                    <div>Keep</div> 
                </router-link>
            </div>
            <div class="display-container">
                <router-view></router-view>
                
            </div>
            <footer class="main-footer">
                <hr>
                <div style="padding: 15px">coffeerights &copy; 2019</div>
            </footer>
        </section>
    `,
    data() {
        return {
            showMainNav: false,
        }
    },
    methods: {
        
    }
})