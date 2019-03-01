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
            <h3>{{index}}</h3>
        </div>

        <div class="modal-body">
            <label class="form-label">
                Title
                <input class="form-control">
            </label>
            <label class="form-label">
                Body
                <textarea rows="5" class="form-control">{{content}}</textarea>
            </label>
        </div>

        <div class="modal-footer text-right">
            <button class="modal-default-button" @click="savePost()">
                Save
            </button>
        </div>
    </div>
</div>
</template>
`,
    methods: {
        close() {
            console.log(' id:  ', this.$route.params);
            this.$router.push({ path: '/missKeep-app' });
        },
        savePost() {
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
