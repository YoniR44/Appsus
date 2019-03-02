import keepService from '../services/keep-service.js'
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
            notes: this.data,
            currActiveIndex: -1,
            isOutside: true,
            currIndex: -1
        }
    },
    template: `
        <section class = "keep-notes">
            <ul class = "flex align-center justify-center">
            <div v-for="(currNote,index) in notes" :key = "currNote.id"              
                     @click = "onClick(currNote,index,$event)"
                     @mouseleave = "onMouseLeave(index,$event)"
                     @mouseenter = "onMouseEnter(index,$event)"
                     class = "notes-layout-wrapper flex justify-center align-center">  
                <keep-display-note
                    :isActive = "currActiveIndex"
                    :isOutside = "isOutside"
                    :currIndex = "currIndex"
                    :pinned = "currNote.pinned"
                    :content = "currNote.content" 
                    :index = "index"
                    :background = "currNote.bgnd">
                </keep-display-note>
            </div>    
            </ul>
            <router-view v-if="$route.fullPath === '/missKeep-app/note'"></router-view>             
            </section>
            `,
    methods: {
        onClick(note, index, ev) {
            console.log(ev.target.classList);
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
                keepService.updateNoteProperty(index,'pinned',this.notes[index].pinned);
                return;
            }
            if (ev.target.classList.contains('btn-remove')) {
                // this.notes[index].pinned = !this.notes[index].pinned;
                // keepService.updateNoteProperty(index,'pinned',this.notes[index].pinned);
                   keepService.removeNote(index);
                return;
            } 
            if (ev.target.tagName === 'TD') {
                this.notes[index].bgnd = ev.target.style.backgroundColor;
                this.currActiveIndex = -1;
                keepService.updateNoteProperty(index,'bgnd',this.notes[index].pinned);
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
        }
    },
    created() {
        console.log('keepNotes linked');
    }
}