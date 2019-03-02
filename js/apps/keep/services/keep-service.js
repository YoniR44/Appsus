import storageService from '../../../services/storage-service.js'
export default {
   updateNoteProperty,
   initGlobals,
   filterNotes
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


