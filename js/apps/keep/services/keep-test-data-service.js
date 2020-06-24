export const keepTestDataService = {
    query
};

function query(){
    return Promise.resolve(notes)
};

// Consider adding editedAt key to all notes
const notes = [
    {
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
        type: 'noteTodos',
        isPinned: false,
        title: 'Shopping list',
        info: {
            list: [
                {
                    txt: 'cucambers',
                    isDone: false
                },
                {
                    txt: 'tomatoes',
                    isDone: false
                },
                {
                    txt: 'cheese',
                    isDone: true
                }
            ]
        },
        style: {
            backgroundColor: 'yellow'
        },
    },
    // {
    //     type: 'noteVideo',
    //     isPinned: false,
    //     title: '',
    //     info: {
    //         videoUrl: '',
    //     },
    //     style: {
    //         backgroundColor: ''
    //     }
    // },
    // {
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