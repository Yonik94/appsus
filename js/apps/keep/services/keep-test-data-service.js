// Consider adding editedAt key to all notes
export const keepTestDataService = {
    query
}

const notes = [
    {
        type: 'noteTxt',
        isPinned: false,
        title: '',
        info: {
            txt: ''
        },
        style: {
            backgroundColor: ''
        }
    },
    {
        type: 'noteImg',
        isPinned: false,
        title: '',
        info: {
            imgUrl: '',
            txt: ''
        },
        style: {
            backgroundColor: ''
        }
    },
    {
        type: 'noteList',
        isPinned: false,
        title: '',
        info: {
            list: [
                {
                    txt: '',
                    isDone: false
                }
            ]
        },
        style: {
            backgroundColor: ''
        },
    },
    {
        type: 'noteVideo',
        isPinned: false,
        title: '',
        info: {
            videoUrl: '',
        },
        style: {
            backgroundColor: ''
        }
    },
    {
        type: 'noteAudio',
        isPinned: false,
        title: '',
        info: {
            audioUrl: '',
        },
        style: {
            backgroundColor: ''
        }
    },
    {
        type: 'noteMap',
        isPinned: false,
        title: '',
        info: {
            pos: {
                lat: null,
                lng: null
            }
        },
        style: {
            backgroundColor: ''
        }
    }
]

function query(){
    return Promise.resolve(notes)
}