import emailApp from './apps/email/pages/email-app-cmp.js';
import homeCmp from './pages/home-cmp.js';
import aboutCmp from './pages/about-cmp.js';
import missKeepApp from './apps/keep/pages/missKeep-app-cmp.js';
import emailDetails from './apps/email/cmps/email-details-cmp.js';
import emailCompose from './apps/email/cmps/email-compose-cmp.js';
import keepNoteModal from './apps/keep/pages/keep-note-modal-cmp.js'
import keepImgModal from './apps/keep/pages/keep-img-modal-cmp.js';

const routes = [
    { path: '/', component: homeCmp },
    { path: '/about', component: aboutCmp },
    {
        path: '/email-app', component: emailApp, children: [
            { path: '/email-app/email/:emailId', component: emailDetails },
            { name: 'eCompose',path: '/email-app/email-compose', component: emailCompose },
        ]
    },
    {
        path: '/missKeep-app', component: missKeepApp, children: [
            {
                name: 'noteRoute',
                path: '/missKeep-app/note',
                component: keepNoteModal
            },
            {
                name: 'imgRoute',
                path: '/missKeep-app/img',
                component: keepImgModal
            },
        ]
    }
]

export default routes;