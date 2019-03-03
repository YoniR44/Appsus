import keepTodoAdd from './keep-todo-add-cmp.js'

export default {
    props: {
      todos: Array
    },
    components: {
        keepTodoAdd
    },
    template: `
            <section class = "keep-todo">
                <div class = "keep-todo-wrapper flex justfy-center align-center ">
                    <keep-todo-add :notesList="todos"></keep-todo-add>
                </div> 
            </section>    
    `,
    data() {
        return {
            // notesList: [{ id: "9laHCEdSpFy", text: "Note1", checked: true },
            // { id: "9laHCEdSpFa", text: "Note2", checked: false }],
            newNote: '',
            notesList: this.todos
        }
    },
    created() {
        console.log(`"Todo" component is linked!`);
        console.log(this.todos);
    }
}
