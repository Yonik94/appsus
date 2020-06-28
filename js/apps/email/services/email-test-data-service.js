import { utilsService } from "../../../services/utils-service.js";

export const emailTestDataService = {
    query
}

function query() {
    return gEmails;
}

const gEmails = [
    {
        emailId: utilsService.getRandomId(),
        from: 'Dudi-Gozlan@gmail.com',
        subject: `Let's get back together`,
        body:
            `Hey babe,
        
        I just wanted to let you know that I’ve been thinking about you lately and I realized that I made a terrible mistake. Do you have time this week for us to meet up? I want to see if it’s possible for us to get back together.
        
        Just let me know!
        
        Best,`,
        sentAt: 1593072558969,
        folder: 'inbox',
        status: {
            isRead: false,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'Arik-Sharon@gmail.com',
        subject: `I'm voting this November - are you?`,
        body:
            `Hey,

        Hope you're well. As you know, we have a big day coming up on Tuesday, November 8th! No, not my birthday, it's Election Day!
        
        Did you know that only 55% of eligible voters voted in 2012?
        
        I'm not going to tell you who to vote for - that's none of my business - but what I am asking you to do is join me in voting!
        
        Here's information on deadlines for voter registration and absentee ballots (there's still time!). And this could be helpful if you're looking to see where the candidates stand on the issues.
        
        There's nothing like sharing our voice in the democratic process. I hope you join me this November!
        
        All the best,`,
        sentAt: 1592991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: false,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'natali@japanika.net',
        subject: `Yoni, anything I can help with?`,
        body:
            `Hey Yoni,

            It's Natali here with Japanika. You’ve been using our services for awhile, so I wanted to check in to see how things are going

            So, what questions can I answer? What features can I demo? What issues can I solve?
            
            I'd love to hop on a quick call to see how I can help. Are you free anytime tomorrow between INSERT TIME? If not then, let me know what works best for you.
            
            Best,`,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: false,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'Amenda@gmail.com',
        subject: `I think you'll appreciate this Tal
        `,
        body:
            `Hey Tal,

            I came across this article. It is well written and drives the point home in my opinion.
            
            I'd love to hear your feedback on the subject and maybe we can get together sometime soon to discuss it.
            
            Hope everything is going well!
            
            Cheers,
            
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: false,
            isDeleted: true
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'Shir@pelephone.co.il',
        subject: `Let's schedule a call`,
        body:
            `Hi Yoni,

            I hope you're doing well. I was hoping we could hop on the phone soon to get a better idea of what you're interested and what I can do to help.
            
            Are you available on Monday between INSERT TIME? Please let me know if there's a more convenient time. Also, is still your preferred number?
            
            Looking forward to connecting soon,`,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: false,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'Jef-Bezos@Amazon.com',
        subject: `Hi Yoni, just touching base`,
        body:
            `Hey Yoni,

            I know we haven't spoken in a while, so I just wanted to touch base. As always, I'm here as a resource for you, so just let me know if you have any questions about new features, best practices, or anything in between!
            
            As soon as you run into a question or concern, please let me know by email or you can call 0506548622.
            
            If you're having a great experience with Amazon so far, would you be interested in referring us to your network?
            
            Kindly,`,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: false,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Neta@gmail.com',
        subject: `I'm voting this November - are you?`,
        body:
            `Hey Tal,

            Hope you’re having a lovely day. Just wanted to send along a quick email to say thanks for working with me. As a small fish in a big pond, it’s sometimes hard for me to compete with the larger fish, so I really appreciate you and your business!
            
            Additionally, to keep me swimming, can you think of 1 person in your neighborhood or office who may need help that I could provide? If so, I’d love to meet them.
            
            Thank you, thank you, thank you!`,
        sentAt: 1552991114000,
        folder: 'drafts',
        status: {
            isRead: false,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'Monica@telefonica.com',
        subject: `Help out this small fish?`,
        body:
            `Hey Yoni,

            Hope you're well. As you know, we have a big day coming up on Tuesday, November 8th! No, not my birthday, it's Election Day!
            
            Did you know that only 55% of eligible voters voted in 2012?
            
            I'm not going to tell you who to vote for - that's none of my business - but what I am asking you to do is join me in voting!
            
            Here's information on deadlines for voter registration and absentee ballots (there's still time!). And this could be helpful if you're looking to see where the candidates stand on the issues.
            
            There's nothing like sharing our voice in the democratic process. I hope you join me this November!
            
            All the best,`,
        sentAt: 1552991114000,
        folder: 'drafts',
        status: {
            isRead: false,
            isStarred: true,
            isDeleted: false
        }
    },

    {
        emailId: utilsService.getRandomId(),
        from: 'Edi@ediLawer.net',
        subject: `Happy 1 Year in Your Home!`,
        body:
            `Hi Tal,

            Thank you for reaching out. After focusing on your needs, I believe I may know someone who may be a better fit for your situation. CC’d here is my colleague, who has 9 years of experience representing clients in your situation.
            
            Although I have filled in INSERT NAME based on our previous communication, the best next step would be to arrange a time in order to thoroughly describe your needs.
            
            I hope you are doing well.
            
            All the best,`,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: false,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'nike@nike.com',
        subject: `Can I get your feedback on career advice?`,
        body:
            `Hey Yoni,

            I hope you're doing well! I'm reaching out because I'm thinking of making a career change and would love to get your advice. I admire you and all you've accomplished. I would be eager to have your input.
            
            Free for coffee sometime this week?
            
            Cheers,`,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: true
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'nike@nike.com',
        subject: `Help please`,
        body:
            `Hey NIKE,

            I wanted to reach out to you to see if there was something I could do for you. I'd be more than happy connect you with someone in my network that might be a good contact for you. You've been a pleasure to work with over the years, so I figured it's the least I could do.
            
            Recently I've been updating my website and I'm needing a few case studies to show others the work that I've done has been successful for others in the past. Would you be willing to be a subject of a case study. It would just take me giving you a phone call and asking you some questions about your thoughts on how my services worked for you. I'll write it up everything after that and run it by you for your approval later on.
            
            Thanks so much for your consideration in advance,`,
        sentAt: 1552991114000,
        folder: 'sent',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Muki@walla.com',
        subject: `I'm sooooooo sorry!`,
        body:
            `Puki,

            I don't know what to say. I realize I messed up bad ... like really really bad and I'm so so sorry. I promise it will never happen again.
            
            When I realized the type of position I had put you in and that I was risking your heart, I was so ashamed. I love you so much and that's never going to change.
            
            Is it even possible that you could forgive me?
            
            Forever and Always,
            
            `,
        sentAt: 1552991114000,
        folder: 'sent',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Muki@walla.com',
        subject: `Help out this small fish?`,
        body:
            `Hey Goo,

            Hope you’re having a lovely day. Just wanted to send along a quick email to say thanks for working with me. As a small fish in a big pond, it’s sometimes hard for me to compete with the larger fish, so I really appreciate you and your business!
            
            Additionally, to keep me swimming, can you think of 1 person in your neighborhood or office who may need help that I could provide? If so, I’d love to meet them.
            
            Thank you, thank you, thank you!
            
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Muki@walla.com',
        subject: `Hi baby, just touching base`,
        body:
            `Hey,

            I know we haven't spoken in a while, so I just wanted to touch base. As always, I'm here as a resource for you, so just let me know if you have any questions about new features, best practices, or anything in between!
            
            As soon as you run into a question or concern, please let me know by email or you can call.
            
            If you're having a great experience with so far, would you be interested in referring us to your network?
            
            Kindly,
            
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Muki@walla.com',
        subject: `I want Fluffy back.`,
        body:
            `My dearest Muka,

            Without you, a piece of me is missing. In fact, many pieces are missing — my iPod, my blender, at least 13 t-shirts, every comfortable sweater I own, my pet gerbil Fluffy, and my dignity.
            
            You may have killed our relationship, but I won’t allow Fluffy to suffer the same fate. I expect to see a neatly packed bag of my belongings and a fully fed and watered gerbil on my doorstep by this weekend. If you haven’t deleted my phone number, call me tonight so I can sing lullabies to Fluffy.
            
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Muki@walla.com',
        subject: `Quote`,
        body:
            `Hi!

            Thanks for reaching out — we appreciate your consideration. After reviewing your needs and discussing internally, we estimate that the cost for providing these specific services will be approximately ahava which is represents 50 at 30$.
            
            If you would like to proceed — or have any questions about the cost estimate — please feel free to arrange a call or ask me directly. We look forward to potentially working with you. Please let me know if there is anything I can do for you.
            
            Hope this helps.
            
            Best,
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'bobo@linkedin.com',
        subject: `Thank You for Your LinkedIn Endorsement`,
        body:
            `Hi,

            Thank you for your endorsement on LinkedIn. As a person who gives professional advice to other people, I rely on what my peers, customers and partners are saying about me and the value I bring to each of you.
            
            I appreciate the fact that you took the time to make that investment in me, please let me know if there is something I can do for you in return.
            
            All the best,
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: true,
            isStarred: true,
            isDeleted: false
        }
    },
    {
        emailId: utilsService.getRandomId(),
        from: 'me@gmail.com',
        to: 'Tal@gmail.com',
        subject: `Great to Meet You!`,
        body:
            `Hey Yoni,

            It was great to meet you at the Open House this past weekend. I really enjoyed showing you the home!
            
            What did you think of the property? Was there anything missing? And How soon are you interested in buying a home?
            
            Let me know because I would love to show you some other options that may be what you are looking for!
            
            Looking forward to hearing from you,
            `,
        sentAt: 1552991114000,
        folder: 'inbox',
        status: {
            isRead: false,
            isStarred: true,
            isDeleted: false
        }
    },
];
