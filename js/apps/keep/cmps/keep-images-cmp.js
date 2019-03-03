import keepService from '../services/keep-service.js'
import keepDisplayImg from '../cmps/keep-display-img-cmp.js'

export default {
    props: {
        data: Array
    },
    components: {
        keepDisplayImg
    },
    data() {
        return {
            imgs: this.data,
            currActiveIndex: -1,
            isOutside: true,
            currIndex: -1,
            newText: ''
        }
    },

    template: `
    <section class = "keep-imgs">     
        <div class = "keep-imgs-header flex space-between align-center">
            <div class = "keep-imgs-input-wrapper flex"> 
                <div>
                     <input v-model = "newText" class = "input-img" type="text" placeholder="Enter new Image src"
                     @keyup.enter = "addNewImg">
                </div> 
            </div>  
        </div>     
        <div class = "img-ul-wrapper flex"> 
            <ul class = "flex align-center justify-center">
                <div v-for="(currImg,index) in imgs" :key = "currImg.id"              
                        @click = "onClick(currImg,index,$event)"
                        @mouseleave = "onMouseLeave(index,$event)"
                        @mouseenter = "onMouseEnter(index,$event)"
                        class = "imgs-layout-wrapper flex justify-center align-center">  
                    <keep-display-img
                       :isActive = "currActiveIndex"
                       :isOutside = "isOutside"
                       :currIndex = "currIndex"
                       :background = "currImg.bgnd"
                       :pinned = "currImg.pinned"
                       :url = "currImg.url"
                       :index = "index"
                    >    
                    </keep-display-img>
                </div>    
             </ul> 
        </div>    
        <router-view v-if="$route.fullPath === '/missKeep-app/img'"></router-view>             
    </section>
        `,
    methods: {
        onClick(img, index, ev) {
            // console.log(ev.target.classList);
            if (ev.target.tagName !== 'BUTTON' && ev.target.tagName !== 'TD') {
                this.$router.push({ name: 'imgRoute', params: { id: img.id, url: img.url, index: index } });
                return;
            }
            if (ev.target.classList.contains('btn-palette')) {
                this.currActiveIndex = index;
                return;
            }
            if (ev.target.classList.contains('btn-tack')) {
                this.imgs[index].pinned = !this.imgs[index].pinned;
                keepService.filterImgs();
                return;
            }
            if (ev.target.classList.contains('btn-remove')) {
                keepService.removeImg(index);
                return;
            }
            if (ev.target.tagName === 'TD') {
                this.imgs[index].bgnd = ev.target.style.backgroundColor;
                this.currActiveIndex = -1;
                keepService.updateImgProperty();
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
        },
        addNewImg() {
            if (this.newText.trim() !== '') keepService.addImg(this.newText);
            this.newText = '';
        },
    },
    created() {
        console.log('KeepImgs linked');

    }
}