import keepTodoAdd from './keep-todo-add-cmp.js'

export default {
    components: {
        keepTodoAdd
    },
    template: `
            <section class = "keep-todo">
                <div class = "keep-todo-wrapper flex justfy-center align-center ">
                    <keep-todo-add :notesList="notesList"></keep-todo-add>
                </div> 
            </section>    
    `,
    data() {
        return {
            notesList: [{ id: "9laHCEdSpFy", text: "Note1", checked: true },
            { id: "9laHCEdSpFa", text: "Note2", checked: false }],
            newNote: '',
        }
    },
    created() {
        console.log(`"Todo" component is linked!`);
    }
}
