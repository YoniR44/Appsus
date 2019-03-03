export default{
    props: {
        note: Object
    },
    template: `
        <li :class="{ 'removed': note.checked }">
            <input v-model="note.checked" type="checkbox">  
           <span>
             <button class = "btn-todo-remove">
                X
             </button> {{ note.text }} 
           </span>
        </li>
    `
}