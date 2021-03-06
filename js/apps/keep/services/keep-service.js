import { keepTestDataService } from './keep-test-data-service.js';
import { utilsService } from '../../../services/utils-service.js';

export const keepService = {
    query,
    queryById,
    updateNote,
    createNote,
    deleteNote,
    duplicateNote,
    togglePinNote,
}

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

function createNote(noteType, inputVal) {
    const newNote = {
        noteId: utilsService.getRandomId(),
        type: noteType,
        isPinned: false,
        title: '',
        info: {},
        style: {
            backgroundColor: 'rgba(255, 255, 255)',
            borderColor: 'rgba(224, 224, 224)',
            color: 'rgba(0, 0, 0)',
        }
    }
    switch (noteType) {
        case 'noteTxt':
            newNote.info.txt = inputVal;
            break;
        case 'noteTodos':
            newNote.info.todos = [{
                txt: inputVal,
                isDone: false,
                todoId: utilsService.getRandomId()
            }];
            break;
        case 'noteImg':
            newNote.info.imgUrl = inputVal;
            newNote.info.txt = '';
            break;
        case 'noteVideo':
            newNote.info.videoUrl = inputVal.replace('watch?v=', 'embed/');
            break;
    }

    gNotes.push(newNote);

    utilsService.saveToStorage('notes', gNotes);
    return Promise.resolve(gNotes);
}

function deleteNote(noteId) {
    const noteIdx = gNotes.findIndex(currNote => currNote.noteId === noteId);
    gNotes.splice(noteIdx, 1);

    utilsService.saveToStorage('notes', gNotes);
    return Promise.resolve(gNotes);
}

function duplicateNote(note) {
    const noteIdx = gNotes.findIndex(currNote => currNote.noteId === note.noteId);
    note.noteId = utilsService.getRandomId();
    gNotes.splice(noteIdx + 1, 0, note);

    utilsService.saveToStorage('notes', gNotes);
    return Promise.resolve(gNotes);
}

function togglePinNote(note, idx) {
    gNotes.splice(idx, 1);
    if (note.isPinned) gNotes.unshift(note);
    else gNotes.push(note);


    utilsService.saveToStorage('notes', gNotes);
    return Promise.resolve(gNotes);
}