import keepDisplayNote from './keep-display-note-cmp.js'

export default {
    props: {
        data: Array
    },
    components: {
        keepDisplayNote
    },
    data() {
        return {
            notes: this.data
        }
    },
    template: `
        <section class = "keep-notes">
            Keep Notes Component <hr>
            <ul class = "flex align-center justify-center">
            <div v-for="(currNote,index) in notes" :key = "currNote.id" 
                     @click = "triggerNoteRoute(currNote,index)"
                     class = "flex justify-center align-center">  
                <keep-display-note
                    :content = "currNote.content" :index = "index">
                </keep-display-note>
            </div>    
            </ul>
            <router-view v-if="$route.fullPath === '/missKeep-app/note'"></router-view>
            
            
            </section>
            `,
    methods: {
        triggerNoteRoute(note,index) {
           // console.log(note.id);
            this.$router.push({ name: 'noteRoute',params:{ id:note.id,content : note.content,index:index }});

        }
    },
    created() {
        //    <router-link :to="{name: 'noteRoute', params: {id: currNote.id, content : currNote.content, index: index}}" >
        //         <keep-display-note
        //             :content = "currNote.content" :index = "index">
        //         </keep-display-note>
        //     </router-link>
        console.log('keepNotes linked');
        console.log('notes', this.notes);
    }
}