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

function updateNoteProperty(index,property,value) {
  gNotes[index].property = value;
  if (property === 'pinned') filterNotes();
  saveGlobals(); 
}

function filterNotes(){
    gNotes.sort((note1,note2) =>  note2.pinned - note1.pinned );
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


