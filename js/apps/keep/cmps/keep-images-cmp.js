import keepDisplayImg from './keep-display-image-cmp.js'
export default {
    props: {
        data: Array
    },
    components: {
        keepDisplayImg
    },
    data(){
        return {
            urls: this.data
        }
    },
    template: `
        <section class = "keep-images">
            Keep Images Component
            <ul class = "flex align-center justify-center">
                <div v-for="(currUrl,index) in urls" :key = "currUrl.id" class = "flex justify-center align-center">
                    <keep-display-img
                        :url = "currUrl" :index = "index">
                    </keep-display-img>
                </div>
            </ul>
        </section>
    `,
    created(){
        console.log('KeepImgs linked');
        console.log('urls',this.urls);
    } 
}