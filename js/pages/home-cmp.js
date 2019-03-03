export default {
    template: `
        <section class="home-main">
            <h1 class="home-header">Welcome To The Appsus App!</h1>
            <div class="home-app-links">
                <router-link class="app-link" @click.native="showMainNav = !showMainNav" to="/about">
                    <i class="fas fa-address-card icon-size"></i>
                    <div>About</div> 
                </router-link>
                <router-link class="app-link" @click.native="showMainNav = !showMainNav" to="/email-app">
                    <i class="fas fa-envelope icon-large icon-size"></i>
                    <div>Email</div>
                </router-link>
                <router-link class="app-link" @click.native="showMainNav = !showMainNav" to="/missKeep-app">
                    <i class="fas fa-lightbulb icon-size" ></i>
                    <div>Keep</div> 
                </router-link>
            </div>    
        </section>
    `
}