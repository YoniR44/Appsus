export default {
    props: {
        content: String,
        isActive: Number,
        index: Number,
        background: String,
        isOutside: Boolean,
        currIndex: Number
    },
    data() {
        return {
            colors: [{ hex: 'black' },
            { hex: 'green' },
            { hex: 'red' }
            ],
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
           <li class = "li-wrapper" :style="{background: background}" >
           <div>
               <button class = "btn-pin fa fa-map-pin"></button>
               <div> 
                     <p> {{content}} </p>
               </div>
               <div v-if = "toShowDiv">
               <button class = "btn-remove fa fa-remove"></button> 
               <button  v-show = "toShowBtn" class = "btn-palette fa fa-paint-brush">
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
             return !this.isOutside && this.currIndex === this.index
        }
    },
    created() {
    }
}
