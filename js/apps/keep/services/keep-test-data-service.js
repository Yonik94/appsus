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
        type: 'noteImg',
        isPinned: false,
        title: 'Asi creating a basic layout',
        info: {
            imgUrl: 'https://media2.giphy.com/media/13GIgrGdslD9oQ/giphy.gif?cid=ecf05e4730661c732d435cf562023f5ab95b792a87d89032&rid=giphy.gif',
            txt: ``
        },
        style: {
            backgroundColor: '#ccff90',
        }
    },
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
            backgroundColor: '#a7ffeb',
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteTxt',
        isPinned: false,
        title: 'hahaha',
        info: {
            txt:
                `Q: Why did the programmer quit his job?

                A: Because he didn't get arrays.`
        },
        style: {
            backgroundColor: '#b356ac',
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteTodos',
        isPinned: false,
        title: 'Latin',
        info: {
            todos: [
                {
                    txt: 'unite',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'triangular',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'decade',
                    isDone: true,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'septet',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'octagon',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'quins',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'union',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
            ]
        },
        style: {
            backgroundColor: '#f28b82',
        },
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteTxt',
        isPinned: false,
        title: 'Masonry',
        info: {
            txt:
                `Fluid stacking layout: https://masonry.desandro.com/
                What is Masonry?
                Masonry is a JavaScript grid layout library.
                It works by placing elements in optimal position based on available vertical space,
                sort of like a mason fitting stones in a wall. You’ve probably seen it in use all over the Internet.`
        },
        style: {
            backgroundColor: '#c1be48',
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
            backgroundColor: '#cbf0f8',
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
                },
                {
                    txt: 'peanut butter',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'peanut butter',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'peanut butter',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                },
            ]
        },
        style: {
            backgroundColor: '#aecbfa',
        },
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteVideo',
        isPinned: false,
        title: 'JS Pro Tips',
        info: {
            videoUrl: 'https://www.youtube.com/embed/Mus_vwhTCq0'
        },
        style: {
            backgroundColor: '#f28b82',
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteVideo',
        isPinned: false,
        title: 'תור ליאור',
        info: {
            videoUrl: 'https://www.youtube.com/embed/N6a6EUvgSFQ'
        },
        style: {
            backgroundColor: '#ccff90',
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteVideo',
        isPinned: false,
        title: '',
        info: {
            videoUrl: 'https://www.youtube.com/embed/Zy4KtD98S2c'
        },
        style: {
            backgroundColor: '#e6c9a8',
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
            backgroundColor: '#fff475',
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteImg',
        isPinned: false,
        title: '',
        info: {
            imgUrl: 'https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif',
            txt: `oh right`
        },
        style: {
            backgroundColor: '#fbbc04',
        }
    },
    {
        noteId: utilsService.getRandomId(),
        type: 'noteTodos',
        isPinned: false,
        title: 'TODO',
        info: {
            todos: [
                {
                    txt: 'Call grandma',
                    isDone: true,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'Learn Node',
                    isDone: true,
                    todoId: utilsService.getRandomId()
                },
                {
                    txt: 'Go to sleeep',
                    isDone: false,
                    todoId: utilsService.getRandomId()
                }
            ]
        },
        style: {
            backgroundColor: '#e8eaed',
        }
    }
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