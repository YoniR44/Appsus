import storageService from '../../../services/storage-service.js';
import keepNotes from '../cmps/keep-notes-cmp.js'
import keepImages from '../cmps/keep-images-cmp.js'
import keepTodo from '../cmps/keep-todo-cmp.js'

export default {
    template:
        `<section class="missKeep-app-body">
            <div class = "missKeep-wrapper">
            <header>
                <div> 
                    <button @click="saveNotesLocally">Save Notes</button>
                    <button @click="saveImgUrlsLocally">Save Image Urls</button>
                </div>
                <h1>missKeep</h1>  
                <input type="text" placeholder="Search">
                <select v-model = "selected">
                    <option value="text">Text</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                </select> 
                <span>Selected: {{ selected }}</span>
                <input v-model = "newText" type="text" placeholder="" @keyup.enter= "hmm">
                <span>Selected: {{ newText }}</span>
                <hr>
            </header>
            <keep-todo v-if="selected"></keep-todo>
            <main class = "flex justify-center align-center">
                <div class = "missKeep-pending" v-if="showPendingStatus"> Hold on! Loading some things...
                    If nothing shows you have to run it with Live Server because fetch gets blocked 
                    when using browser link from GitHub. I will switch to localstorage later if needed.      
                </div>
                <component :is = "cmp.type" :data = "cmp.data" v-if="selected"></component>
            </main>
            </div>
        </section>
    `,
    data() {
        return {
            selected: '',
            newText: '',
            notes: [],
            imgUrls:[],
            cmp: {
                type: 'keepNotes',
                data: this.notes
            },
        }
    },
    components: {
        keepNotes,
        keepImages,
        keepTodo
    },
    methods: {
        getData() {
            storageService.getDataFromFileGit('notes')
                .then(notes => this.notes = notes);
            storageService.getDataFromFileGit('imgUrls')
                .then( urls => this.imgUrls = urls);
            setTimeout(() => { this.selected = 'text'; console.log('after timeout...', this.notes);
            console.log('after timeout...', this.imgUrls) }, 3000);
            console.log('cmp', this.cmp);
        },
        saveNotesLocally(){
            storageService.saveToFile(JSON.stringify(this.notes), 'notes.json');
        },
        saveImgUrlsLocally(){
            storageService.saveToFile(JSON.stringify(this.imgUrls), 'imgUrls.json');
        }
    },
    computed: {
        showPendingStatus() { return (!this.selected) ? true : false;}
    },
    watch: {
        selected() {
            switch (this.selected) {
                case ('text'): this.cmp = { type: 'keepNotes', data: this.notes }; break;
                case ('image'): this.cmp = { type: 'keepImages', data: this.imgUrls }; break;
            }
        }
    },
    created() {
        console.log(`Miss Keep Page is loaded!`);
    },

    mounted() {
        this.getData(),
        this.$router.push({ path: '/missKeep-app' });
    }

}