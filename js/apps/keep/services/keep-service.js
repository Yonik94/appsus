import { keepTestDataService } from './keep-test-data-service.js';
import { utilsService } from '../../../services/utils-service.js';

export const keepService = {
    query,
    queryById,
    saveNote
}

// function createNote(type){

// }

let gNotes;

function query() {
    gNotes = utilsService.getFromStorage('notes');
    if (!gNotes) {
        gNotes = keepTestDataService.query();
        utilsService.saveToStorage('notes', gNotes);
    }
    return Promise.resolve(gNotes);
}

function queryById(noteId) {
    return Promise.resolve(gNotes.find(note => note.noteId = noteId));
}

function saveNote(noteId, editedEl, value, idx) {
    const note = gNotes.find(note => note.noteId === noteId);
    console.log(editedEl, note[editedEl]);
    // note[editedEl] = value
    // if (editedEl === 'txt') {
    //     if (note.type === 'noteTodos') note.info.todos[idx].txt = value
    //     else note.info.txt = value;
    // }
}