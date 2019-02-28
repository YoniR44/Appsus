import emailApp from './apps/email/pages/email-app-cmp.js';
import homeCmp from './pages/home-cmp.js';
import aboutCmp from './pages/about-cmp.js';
import missKeepApp from './apps/keep/pages/missKeep-app-cmp.js';
import emailDetails from './apps/email/cmps/email-details-cmp.js';
import emailCompose from './apps/email/cmps/email-compose-cmp.js';

const routes = [
    { path: '/', component: homeCmp },
    { path: '/about', component: aboutCmp },
    { path: '/email-app', component: emailApp, children: [
        { path: '/email-app/email/:emailId', component: emailDetails },        
        { path: '/email-app/email-compose', component: emailCompose },        
    ] },    
    { path: '/missKeep-app', component: missKeepApp },
]

export default routes;