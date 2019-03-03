export default {
    props: {
        content: String,
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
           <li v-if = "filterBy" class = "li-wrapper" :style="{background: background}" >
           <div>
               <button v-show = "pinned" class = "btn-checked fa fa-check"></button>
               <div> 
                     <p> {{content}} </p>
               </div>
               <div v-if = "toShowDiv">
               <button class = "btn-email fa fa-envelope"></button> 
               <button class = "btn-tack fa fa-thumbtack"></button> 
               <button class = "btn-todo fa fa-tasks"></button> 
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
        },
        filterBy(){
          //  console.log(this.filterStr,'filter');
            return this.content.toLowerCase().includes(this.filterStr.toLowerCase().trim()) || !this.filterStr;
        }
    },
    created() {
    }
}
