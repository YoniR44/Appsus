import emailApp from './apps/email/pages/email-app-cmp.js';
import homeCmp from './pages/home-cmp.js';
import aboutCmp from './pages/about-cmp.js';
import missKeepApp from './apps/keep/pages/missKeep-app-cmp.js';
import emailDetails from './apps/email/cmps/email-details-cmp.js';

const routes = [
    { path: '/', component: homeCmp },
    { path: '/about', component: aboutCmp },
    { path: '/email-app', component: emailApp },    
    { path: '/missKeep-app', component: missKeepApp },
    { path: '/email/:emailId', component: emailDetails },
        
]

export default routes;