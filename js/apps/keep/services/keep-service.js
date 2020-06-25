import { keepTestDataService } from './keep-test-data-service.js'
import { utilsService } from '../../../services/utils-service.js'

export const keepService = {
    query,
    saveNote
}
// function createNote(type){

// }

let gNotes;

function query() {
    gNotes = utilsService.getFromStorage('notes')
    if (!gNotes) {
        gNotes = keepTestDataService.query()
        utilsService.saveToStorage('notes', gNotes)
    }
        return Promise.resolve(gNotes)
    }

    function saveNote(id, value, idx, editedEl) {
        const note = gNotes.find(note => note.noteId === id)
        if(editedEl === 'title') note.title = value
        else if (editedEl === 'txt'){
            if (note.type === 'noteTodos') note.info.todos[idx].txt = value
            else note.info.txt = value;
        }
    }