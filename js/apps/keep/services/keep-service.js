import { keepTestDataService } from './keep-test-data-service.js';
import { utilsService } from '../../../services/utils-service.js';

export const keepService = {
    query,
    queryById,
    updateNote
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

function updateNote(note) {
    const noteIdx = gNotes.findIndex(currNote => currNote.noteId === note.noteId);  
    gNotes.splice(noteIdx, 1, note);

    utilsService.saveToStorage('notes', gNotes);
    return Promise.resolve(gNotes);
}