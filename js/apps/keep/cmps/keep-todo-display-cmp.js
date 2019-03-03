export default{
    props: {
        note: Object
    },
    template: `
        <li :class="{ 'removed': note.checked }">
            <input v-model="note.checked" type="checkbox">  
            <span><button> Delete </button> {{ note.text }}  </span>
        </li>
    `
}