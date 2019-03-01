import keepDisplayImg from './keep-display-image-cmp.js'

export default {
    props: {
        data: Array
    },
    components: {
        keepDisplayImg
    },
    data() {
        return {
            urls: this.data
        }
    },
    template: `
        <section class = "keep-images">
            Keep Images Component
            <ul class = "flex align-center justify-center">
                <div v-for="(currUrl,index) in urls" :key = "currUrl.id" class = "flex justify-center align-center">  
                   <router-link :to="{name: 'imgRoute', params: {id: currUrl.id, src : currUrl.url, index: index}}" >
                        <keep-display-img
                            :url = "currUrl" :index = "index">
                        </keep-display-img>
                    </router-link>
                </div>    
            </ul>
            <router-view v-if="$route.fullPath === '/missKeep-app/img'"></router-view>
        </section>
    `,
    created() {
        console.log('KeepImgs linked');
        console.log('urls', this.urls);
    }
}