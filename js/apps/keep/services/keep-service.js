import storageService from '../../../services/storage-service.js'
import utilService from '../../../services/util-service.js'

export default {
    updateNoteProperty,
    updateImgProperty,
    initGlobals,
    filterNotes,
    removeNote,
    addNote,
    saveEmail,
    addImg,
    removeImg,
    filterImgs,
    addTodo,
    removeTodo
}

var gNotes;
var gImgs;
var gTodos;




function initGlobals(notes, imgs,todos) {
    gNotes = notes;
    gImgs = imgs;
    gTodos = todos;
    saveGlobals();
}

function saveGlobals() {
    storageService.store('keepNotes', gNotes);
    storageService.store('keepImgs', gImgs);
    storageService.store('keepTodos', gTodos);
}

function updateNoteProperty() {
    saveGlobals();
}

function updateImgProperty() {
    saveGlobals();
}

function filterNotes() {
    gNotes.sort((note1, note2) => note2.pinned - note1.pinned);
    saveGlobals();
}
function filterImgs() {
    gImgs.sort((img1, img2) => img2.pinned - img1.pinned);
    saveGlobals();
}


function removeNote(index) {
    gNotes.splice(index, 1);
    saveGlobals();
}

function removeImg(index) {
    gImgs.splice(index, 1);
    saveGlobals();
}

function removeTodo(index) {
    gTodos.splice(index, 1);
    saveGlobals();
}

function addNote(text) {
    function createNote() {
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
function addImg(url) {
    function createImg() {
        return {
            id: utilService.makeId(11),
            pinned: false,
            url: url,
            bgnd: 'white'
        };
    }
    gImgs.push(createImg());
    saveGlobals();
}

function addTodo(text) {
    function createTodo() {
        return {
            id: utilService.makeId(11),
            text: text,
            checked: false
        };
    }
    gTodos.push(createTodo());
    saveGlobals();
}

function saveEmail(note) {
    let noteEmail = { id: note.id, content: note.content };
    console.log(noteEmail);
    storageService.store('noteEmail', noteEmail);
}

