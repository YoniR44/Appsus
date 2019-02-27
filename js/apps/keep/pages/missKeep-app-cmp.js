export default {
    template:
        `<section class="missKeep-app-body">
            <div class = "missKeep-wrapper">
               <header>
              <h1>missKeep</h1>  
             <input type="text" placeholder="Search">
             <select v-model = "selected">
             <option value="text">Text</option>
             <option value="image">Image</option>
             <option value="video">Video</option>
            </select> 
            <span>Selected: {{ selected }}</span>
            <input v-model = "newText" type="text" placeholder="" @keyup.enter= "hmm">
            <span>Selected: {{ newText }}</span>
            <hr>
             </header>
             <main class = "flex justify-center align-center">
                <div class = "notes-container" v-if="showText">
                    <ul>
                       <li v-for= "text in texts">
                            {{text.content}} 
                      </li>
                    </ul>
                </div>
                <div class = "img-container" v-if="showImg">
                    <ul>
                        <li v-for= "(url,index) in urls">
                         <img :src = url.url ></img>
                        </li>
                    </ul>
                </div>
             </main>
            </div>
            <br>
            <p> ---------------------------</p>
        </section>
    `,

    data() {
        return {
            texts: [{ content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, deleniti voluptates assumenda saepe suscipit provident voluptatibus soluta aut totam vero recusandae, nemo et tenetur quas labore maxime. Itaque, quo.' },
            { content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, deleniti voluptates assumenda saepe suscipit provident voluptatibus soluta aut totam vero recusandae, nemo et tenetur quas labore maxime. Itaque, quo.' },
            // { content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, deleniti voluptates assumenda saepe suscipit provident voluptatibus soluta aut totam vero recusandae, nemo et tenetur quas labore maxime. Itaque, quo.' }
            ],
            urls: [{url:'../img/Clubs-Ace.jpg'},
            {url:'../img/Clubs-Ace.jpg'},
            {url:'../img/Clubs-Ace.jpg'}],
            noteType: 'text',
            selected: 'text',
            newText: ''
        }
    },
    components: {
        
    },
    methods: {
        hmm() {
            console.log('hmmm');
            this.texts.push({content: this.newText});
        }

    },
    computed: {
        showImg() { return (this.selected === 'image') ? true : false; },
        showText() { return (this.selected === 'text') ? true : false; }
    },
    created() {
        console.log(`Miss Keep Page is loaded!`);
    }

}