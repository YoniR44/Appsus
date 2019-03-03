export default {
    props: {
        url: String,
        isActive: Number,
        index: Number,
        background: String,
        isOutside: Boolean,
        currIndex: Number,
        pinned: Boolean,
        filterStr: String
    },
    data() {
        return {
            colors1: [{ hex: 'black' },
            { hex: 'green' },
            { hex: 'white' },
            { hex: 'red' }
            ],
            colors2: [{ hex: 'yellow' },
            { hex: 'magenta' },
            { hex: 'cyan' },
            { hex: 'orange' }
            ],
        }
      
    },
    template: `
           <li  class = "li-wrapper" :style="{background: background}" >
           <div>
               <button v-show = "pinned" class = "btn-checked fa fa-check"></button>
             
               <p class = "flex justify-center align-center wrap"> 
               <span><img :src = "url"></span></img> 
               </p>
               <div v-if = "toShowDiv">
               <button class = "btn-tack fa fa-thumbtack"></button> 
               <button class = "btn-remove fa fa-times"></button> 
               <button  v-show = "toShowBtn" class = "btn-palette fa fa-palette">
               </button>
               <table class = "dropdown-table" v-show = "toShowTbl">
                    <tbody>
                    <tr>
                        <td v-for="color in colors1" class = "dropdown-color"  
                        :style="{background: color.hex}" 
                        > &nbsp&nbsp&nbsp</td>
                    </tr>
                    <tr>
                        <td v-for="color in colors2" class = "dropdown-color" 
                        :style="{background: color.hex}" 
                        > &nbsp&nbsp&nbsp</td>
                    </tr>
                    </tbody>
                </table> 
                </div>  
            </div>  
            </li>    
    `,
    computed: {
        toShowTbl() {
            return this.isActive === this.index;
        },
        toShowBtn() {
            return !this.toShowTbl;
        },
        toShowDiv(){
             return !this.isOutside && this.currIndex === this.index;
        }
    },
    created() {
    }
}