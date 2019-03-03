export default {
    data(){
        return {
            src:'',
            index: '',
            bgnd: ''
        }
    },
    template: `
        <div class="modal-mask" @click="close" transition="modal">
            <div class="modal-container" @click.stop>
                <div class="modal-header">
                    <h3>Pretty Picture</h3>
                </div>
                <div class="modal-body">
                    <div  :style="{background: bgnd}" class ="img-wrapper flex align-center justify-center">
                        <img :src="src"></img>
                    </div>    
                </div>
                <div class="modal-footer text-right">
                    <button class="modal-default-button" @click="leave">
                    Leave
                    </button>
                </div>
            </div>
        </div>
    `,
    methods: {
        close() {
           // console.log( ' id:  ',this.$route.params);
            this.$router.push({ path: '/missKeep-app' });
        },
        leave() {
            this.close();
        },
        init(){
            this.src = this.$route.params.url;
            this.index =  this.$route.params.index;
            this.bgnd =  this.$route.params.bgnd;
        }
    },
    mounted(){
       this.init();
      // console.log( this.$route.params);
    }
}
