export default {
    template: `
        <section class="home-main">
            <h1 class="home-header">Welcome to the Appsus App!</h1>
            <div class="home-app-links">
                <router-link class="app-link" @click.native="showMainNav = !showMainNav" to="/about">
                    <i class="fas fa-address-card" style="font-size: 80px"></i>
                    <div>About</div> 
                </router-link>
                <router-link class="app-link" @click.native="showMainNav = !showMainNav" to="/email-app">
                    <i class="fas fa-envelope icon-large" style="font-size: 80px"></i>
                    <div>Email</div>
                </router-link>
                <router-link class="app-link" @click.native="showMainNav = !showMainNav" to="/missKeep-app">
                    <i class="fas fa-lightbulb" style="font-size: 80px"></i>
                    <div>Keep</div> 
                </router-link>
            </div>    
        </section>
    `
}