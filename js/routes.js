import emailApp from './pages/email-app-cmp.js';
import homeCmp from './pages/home-cmp.js';
import aboutCmp from './pages/about-cmp.js';
import missKeepApp from './pages/missKeep-app-cmp.js';

const routes = [
    { path: '/', component: homeCmp },
    { path: '/about', component: aboutCmp },
    { path: '/email-app', component: emailApp },    
    { path: '/missKeep-app', component: missKeepApp },    
]

export default routes;