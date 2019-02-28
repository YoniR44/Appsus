export default {
    props:{
        url: Object
    },
    template: `
           <li>
               <img :src = "url.url"> </img>
           </li>    
        `,
}   