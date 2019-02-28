import utilService from '../../../services/util-service.js';
import keepTodoDisplay from './keep-todo-display-cmp.js'

export default {
    props: {
        notesList: Array
    },
    components: {
        keepTodoDisplay
    },
    template: `
             <div class="input-group">
                <input @keyup.enter="addNote" v-model="newNote"
                        placeholder="add new note" type="text"
                        class="form-control">
                <span class="input-group-btn">
                <button @click="addNote" class="btn btn-default"
                                    type="button">Add!
                </button>
                </span>
                <ul>
                <keepTodoDisplay v-for="note in notesList" :key = "note.id"
                     :note="note">
                </keepTodoDisplay>
            </ul>
             </div>
    `,
    data() {
        return {
            newNote: ''
        }
    },
    methods: {
        addNote() {  
            let text = this.newNote.trim();
            if (text) {
                this.notesList.push({ text: text, checked: false,
                id: utilService.makeId(11)});
                this.newNote = "";
            }
            console.log('noteslist',this.notesList);
        }
    }
}