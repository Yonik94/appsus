import { keepTestDataService } from './keep-test-data-service.js';
import { utilsService } from '../../../services/utils-service.js';

export const keepService = {
    query,
    queryById,
    saveNote,
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

function saveNote(noteId, elType, idx, value) {
    const note = gNotes.find(note => note.noteId === noteId);
    
    switch (note.type) {
        case 'noteTodos':
            if (elType === 'txt') {
                note.info.todos[idx].txt = value;
                break;
            }
            default:
                if (elType === 'txt') note.info.txt = value;
                else note[elType] = value;
            console.log(note.info[elType], value, note);
    }
    const noteIdx = gNotes.findIndex(note => note.noteId === noteId)
    gNotes.splice(noteIdx, 1, note);

    utilsService.saveToStorage('notes', gNotes);
}

function updateNote(note) {
    const noteIdx = gNotes.findIndex(currNote => currNote.noteId === note.noteId);  
    gNotes.splice(noteIdx, 1, note);

    utilsService.saveToStorage('notes', gNotes);
    return Promise.resolve(note);   
}