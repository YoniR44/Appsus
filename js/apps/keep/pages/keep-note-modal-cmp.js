import { eventBus } from '../../../event-bus.js';

export default {
    data() {
        return {
            content: '',
            index: ''
        }
    },
    template: `
       <div class="modal-mask" @click="close"  transition="modal">
       <div class="modal-container" @click.stop>
        <div class="modal-header">
            <h3> Edit </h3>
        </div>
        <div class="modal-body">
            <label class="form-label">
                <textarea v-model = "content" rows="5" class="form-control">{{content}}</textarea>
            </label>
        </div>
        <div class="modal-footer text-right">
            <button class="modal-default-button" @click="updateNote()">
                Save
            </button>
        </div>
        </div>
        </div>
    `,
    methods: {
        close() {
            this.$router.push({ path: '/missKeep-app' });
        },
        updateNote() {
            eventBus.$emit('editNote', { index: this.index, content: this.content });
            this.close();
        },
        init() {
            this.content = this.$route.params.content,
                this.index = this.$route.params.index
        }
    },
    mounted() {
        this.init();
    }
}
