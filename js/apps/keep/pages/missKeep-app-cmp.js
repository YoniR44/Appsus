import storageService from '../../../services/storage-service.js';
import keepService from '../services/keep-service.js'
import keepNotes from '../cmps/keep-notes-cmp.js'
import keepImages from '../cmps/keep-images-cmp.js'
import keepTodo from '../cmps/keep-todo-cmp.js'

export default {
    template:
        `<section class="missKeep-app-body flex">
            <div class = "missKeep-wrapper">
            <header>
                <div> 
                     <button @click="saveNotesLocally">Save Notes</button>
                     <button @click="saveImgUrlsLocally">Save Image Urls</button>
                </div>
                <hr>
                <div class = "hero flex align-center justify-center">
                    <h1>missKeep</h1> 
                </div>
                <div class = "header-wrapper ">         
                    <div class = "header-options-wrapper flex align-centern" > 
                        <div>                 
                            <select v-model = "selected">
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                        </div>            
                    </div>                  
                </div>
            
            </header>
        
            <main class = "flex justify-center align-center">
                <div class = "missKeep-pending" v-if="showPendingStatus"> Hold on! Loading some things...
                    If nothing shows you have to run it with Live Server because fetch gets blocked 
                    when using browser link from GitHub. I will switch to localstorage later if needed.      
                </div>
                <component :is = "cmp.type" :data = "cmp.data"  :mail = "cmp.mail" v-if="selected"></component>
            </main>
            </div>
        </section>
    `,
//     <div> 
//     <button @click="saveNotesLocally">Save Notes</button>
//     <button @click="saveImgUrlsLocally">Save Image Urls</button>
//    </div>
    data() {
        return {
            selected: '',
            notes: [],
            imgUrls: [],
            noteEmail: '',
            cmp: {
                type: 'keepNotes',
                data: this.notes,
                mail: this.noteEmail
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
            this.noteEmail = storageService.load('noteEmail');
            let storageNotes = storageService.load('keepNotes');
            let storageImgs = storageService.load('keepImgs');
            console.log(storageNotes);
            if (!storageNotes || !storageImgs || storageNotes === null || storageImgs === null) {
                storageService.getDataFromFileGit('notes')
                    .then(notes => this.notes = notes);
                storageService.getDataFromFileGit('imgUrls')
                    .then(urls => this.imgUrls = urls);
            } else {
                this.notes = storageNotes;
                this.imgUrls = storageImgs;
            }
            setTimeout(() => {
                this.selected = 'text'; console.log('after timeout...', this.notes);
                keepService.initGlobals(this.notes, this.imgUrls);
            }, 3000);
        },

        saveNotesLocally() {
            storageService.saveToFile(JSON.stringify(this.notes), 'notes.json');
        },
        saveImgUrlsLocally() {
            storageService.saveToFile(JSON.stringify(this.imgUrls), 'imgUrls.json');
        },
    },
    computed: {
        showPendingStatus() { return (!this.selected) ? true : false; }
    },
    watch: {
        selected() {
            switch (this.selected) {
                case ('text'): this.cmp = { type: 'keepNotes', data: this.notes, mail: this.noteEmail }; break;
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