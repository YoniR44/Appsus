import utilService from '../../../services/util-service.js';
import keepTodoDisplay from './keep-todo-display-cmp.js';
import { eventBus } from '../../../event-bus.js';

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
                    <input @keyup.enter="addTodo(newNote)" v-model="newNote"
                        placeholder="add new note" type="text"
                        class="form-control" maxlength="50"  >
                </div> 
                <ul>
                    <keepTodoDisplay v-for="(note,index) in notesList" :key = "note.id"
                         :note="note" 
                          @click.native = "onClick(index,$event)">
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
        onClick(index,ev){
            if (ev.target.classList.contains('btn-todo-remove')) {
                this.removeTodo(index);
            }       
        },
        addTodo(note) {  
            let text = note.trim();
            if (text) {
                this.notesList.push({ text: text, checked: false,
                id: utilService.makeId(11)});
                this.newNote = "";
            }
        },
        removeTodo(index){
            this.notesList.splice(index,1);
        } 
    },
    created(){
        eventBus.$on('addTodo', todo => {
            console.log('receiving addTodo...');
            let content = todo;
            this.addTodo(content);  
        });
    }
}