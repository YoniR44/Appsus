import storageService from '../../../services/storage-service.js'
import utilService from '../../../services/util-service.js'

export default {
   updateNoteProperty,
   initGlobals,
   filterNotes,
   removeNote,
   addNote
}

var gNotes;
var gImgs;

function initGlobals(notes,imgs){
   gNotes = notes;
   gImgs = imgs;
   saveGlobals();
}

function saveGlobals(){
    storageService.store('keepNotes',gNotes);
    storageService.store('keepImgs',gImgs);
}

//function updateNoteProperty(index,property,value) {
    function updateNoteProperty() {
    // switch(property){
    //   case 'pinned': gNotes[index].pinned = value; filterNotes(); break;
    //   case 'bgnd': gNotes[index].bgnd = value; break;
    //   case 'content': gNotes[index].content = value; break;
    //   default: console.log('Something bad with updateProperty!');
    // }
//     let h = gNotes[index];
//   Vue.set(h,'content', value);
//   console.log(h);
//   if (property === 'pinned') filterNotes();
  saveGlobals(); 
}

function filterNotes(){
    gNotes.sort((note1,note2) =>  note2.pinned - note1.pinned );
    saveGlobals();
}

function removeNote(index){
    gNotes.splice(index,1);
    saveGlobals();
}

function addNote(text){
   function createNote(){
       return {
           id: utilService.makeId(11),
           pinned: false,
           content: text,
           bgnd: 'white'
       };
   }
   gNotes.push(createNote());
   saveGlobals();
}


