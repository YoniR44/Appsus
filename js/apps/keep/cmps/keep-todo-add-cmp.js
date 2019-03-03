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
            <div>
               <div class = "flex justify-center">
                    <input @keyup.enter="addNote" v-model="newNote"
                        placeholder="add new note" type="text"
                        class="form-control" maxlength="50"  >
                </div> 
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
            console.log('hhhh')  
            let text = this.newNote.trim();
            if (text) {
                this.notesList.push({ text: text, checked: false,
                id: utilService.makeId(11)});
                this.newNote = "";
            }
            console.log('noteslist',this.notesList);
        }
    },
    create(){
        console.log(this.notesList);
    }
}