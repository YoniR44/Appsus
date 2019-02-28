export default {
    props: {
        data: Array
    },
    data(){
        return {
            notes: this.data
        }
    },
    template: `
        <section class = "keep-notes">
            Keep Notes Component <hr>
            <ul>
                <li v-for= "note in notes">
                    {{note.content}} 
                </li>
            </ul>
        </section>
    `,
    created(){
        console.log('keepNotes linked');
        console.log('notes',this.notes);
    }
}