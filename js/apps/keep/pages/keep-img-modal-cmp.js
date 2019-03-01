export default {
    data(){
        return {
            src:'',
            index: ''
        }
    },
    template: `
        <div class="modal-mask" @click="close" transition="modal">
            <div class="modal-container" @click.stop>
                <div class="modal-header">
                    <h3>Image No: {{index}}</h3>
                </div>
                <div class="modal-body">
                    <label class="form-label">
                        Title
                        <input class="form-control">
                    </label>
                    <div class = "img-wrapper flex align-center justify-center">
                        <img :src="src"></img>
                    </div>    
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
            console.log( ' id:  ',this.$route.params);
            this.$router.push({ path: '/missKeep-app' });
        },
        savePost() {
            this.close();
        },
        init(){
            this.src = this.$route.params.src,
            this.index =  this.$route.params.index
        }
    },
    mounted(){
       this.init();
    }
}
