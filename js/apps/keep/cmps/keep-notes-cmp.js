import keepService from '../services/keep-service.js'
import keepDisplayNote from './keep-display-note-cmp.js'
import keepTodo from '../cmps/keep-todo-cmp.js'
import { eventBus } from '../../../event-bus.js';

export default {
    props: {
        data: Array,
        mail: Object,
        todos: Array
    },
    components: {
        keepDisplayNote,
        keepTodo
    },
    data() {
        return {
            currMail: this.mail,
            notes: this.data,
            currActiveIndex: -1,
            isOutside: true,
            currIndex: -1,
            newText: '',
            filterStr: '',
            emailId: '',
            currMail: ''
        }
    },
    template: `
        <section class = "keep-notes">     
            <div class = "keep-notes-header flex space-between align-center">
                <div class = "keep-notes-input-wrapper flex"> 
                    <textarea v-model = "newText" placeholder="New Note"
                         rows="3" class="form-control">    
                    </textarea>
                    <div>
                        <button class = "btn-input-save" @click = "addNewNote"> Save </button>
                         <input v-model = "filterStr" class = "input-search" type="text" placeholder="Search">
                    </div> 
                </div>
                <keep-todo></keep-todo>
                <div class = "email-wrapper flex justify-center align-center" 
                     v-for="(currNote,index) in notes" :key = "currNote.id"
                          v-if = "currNote.id === currMail.id"> 
                                <p class = "flex"> Email Draft: {{currNote.content}} </p>                         
                </div>    
            </div>
            <ul class = "flex align-center justify-center">
            <div v-for="(currNote,index) in notes" :key = "currNote.id"              
                     @click = "onClick(currNote,index,$event)"
                     @mouseleave = "onMouseLeave(index,$event)"
                     @mouseenter = "onMouseEnter(index,$event)"
                     class = "notes-layout-wrapper flex justify-center align-center">  
                <keep-display-note
                    :todos = "todos"
                    :isActive = "currActiveIndex"
                    :isOutside = "isOutside"
                    :currIndex = "currIndex"
                    :pinned = "currNote.pinned"
                    :content = "currNote.content" 
                    :index = "index"
                    :background = "currNote.bgnd"
                    :filterStr = "filterStr"
                >    
                </keep-display-note>
            </div>    
            </ul>
            <router-view v-if="$route.fullPath === '/missKeep-app/note'"></router-view>             
         </section>
    `,
    methods: {
        onClick(note, index, ev) {
            console.log(ev.target);
            if (ev.target.tagName !== 'BUTTON' && ev.target.tagName !== 'TD') {
                this.$router.push({ name: 'noteRoute', params: { id: note.id, content: note.content, index: index } });
                return;
            }
            if (ev.target.classList.contains('btn-palette')) {
                this.currActiveIndex = index;
                return;
            }
            if (ev.target.classList.contains('btn-tack')) {
                this.notes[index].pinned = !this.notes[index].pinned;
                keepService.filterNotes();
                return;
            }
            if (ev.target.classList.contains('btn-remove')) {
                keepService.removeNote(index);
                return;
            }
            if (ev.target.classList.contains('btn-email')) {
                this.currMail.id = this.notes[index].id;
                this.currMail.content = this.notes[index].content;
                keepService.saveEmail(this.notes[index]);
                console.log('email');
                return;
            }
            if (ev.target.tagName === 'TD') {
                this.notes[index].bgnd = ev.target.style.backgroundColor;
                this.currActiveIndex = -1;
                keepService.updateNoteProperty();
                return;
            }
        },
        onMouseLeave() {
            this.isOutside = true;
            this.currActiveIndex = -1;
            this.currIndex = -1;
        },
        onMouseEnter(index) {
            this.isOutside = false;
            this.currIndex = index;
        },
        addNewNote() {
            if(this.newText.trim() !== '') keepService.addNote(this.newText);
            this.newText = '';
        },
    },
    created() {
        console.log('keepNotes linked');
        eventBus.$on('editNote', dat => {
            let content = dat.content;
            if (content.trim() !== '') {
                this.notes[dat.index].content = content;
                keepService.updateNoteProperty();
            }
        });
    },
}