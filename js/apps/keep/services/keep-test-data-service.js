import { utilsService } from "../../../services/utils-service.js";

export const keepTestDataService = {
    query
}

function query() {
    return gNotes;
}

// Consider adding editedAt key to all notes
const gNotes = [
    {
        noteId: utilsService.getRandomId(),
        type: 'noteTxt',
        isPinned: false,
        title: 'Important phone numbers',
        info: {
            txt:
                `mom: 050-1234567
             dad: 050-7654321`
        },
        style: {
            backgroundColor: 'blue'
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteImg',
        isPinned: false,
        title: 'My cat',
        info: {
            imgUrl: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
            txt: `it's so cute!`
        },
        style: {
            backgroundColor: 'pink'
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteTodos',
        isPinned: false,
        title: 'Shopping list',
        info: {
            todos: [
                {
                    txt: 'cucumbers',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'tomatoes',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'cheese',
                    isDone: true,
                    todoId: utilsService.getRandomId()
                }
            ]
        },
        style: {
            backgroundColor: 'yellow'
        },
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteVideo',
        isPinned: false,
        title: '',
        info: {
            videoUrl: 'https://www.youtube.com/embed/Mus_vwhTCq0'
        },
        style: {
            backgroundColor: 'black'
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteImg',
        isPinned: false,
        title: 'Which came first?',
        info: {
            imgUrl: 'https://img.devrant.com/devrant/rant/r_1827681_trQrG.jpg',
            txt: `Solved.`
        },
        style: {
            backgroundColor: 'pink'
        }
    },
    // {
    //     noteId: utilsService.getRandomId(),
    //     type: 'noteAudio',
    //     isPinned: false,
    //     title: '',
    //     info: {
    //         audioUrl: '',
    //     },
    //     style: {
    //         backgroundColor: ''
    //     }
    // },
    // {
    //     noteId: utilsService.getRandomId(),
    //     type: 'noteMap',
    //     isPinned: false,
    //     title: '',
    //     info: {
    //         pos: {
    //             lat: null,
    //             lng: null
    //         }
    //     },
    //     style: {
    //         backgroundColor: ''
    //     }
    // }
];