export default {
    template: 
        `<section class="missKeep-app-body">
            <div class = "missKeep-wrapper">
               <header>
              <h1>missKeep</h1>  
             <input type="text" placeholder="Search">
             <hr>
             </header>
             <main class = "flex justify-center align-center">
                <div class = "notes-container">
                  <ul>
                       <li> 
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, deleniti voluptates assumenda saepe suscipit provident voluptatibus soluta aut totam vero recusandae, nemo et tenetur quas labore maxime. Itaque, quo.
                       </li>
                      <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, deleniti voluptates assumenda saepe suscipit provident voluptatibus soluta aut totam vero recusandae, nemo et tenetur quas labore maxime. Itaque, quo.
                      </li>
                      <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, deleniti voluptates assumenda saepe suscipit provident voluptatibus soluta aut totam vero recusandae, nemo et tenetur quas labore maxime. Itaque, quo.
                      </li>
                 </ul>
                 </div>
                 <div class = "img-container">
                  <ul>
                       <li> 
                       <img src = "../img/Clubs-Ace.jpg" > </img>
                       </li>
                      <li> 
                      <img src = "../img/Clubs-Ace.jpg" > </img>
                      </li>
                      <li> 
                      <img src = "../img/Clubs-Ace.jpg" > </img>
                      </li>
                 </ul>
                 </div>
             </main>
            </div>
        </section>
    `,

    data() {
        return {
            
        }
    },
    components: {
        
    },
    methods: {
        
    },
    computed: {
       
    },
    created() {
         console.log(`Miss Keep Page is loaded!`) ;
    }
   
}