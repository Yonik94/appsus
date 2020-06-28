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
        from: 'Assaf-Margalit@gmail.com',
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
        from: 'Japanika@japanika.net',
        subject: `Yoni, anything I can help with?`,
        body:
            `Hey Yoni,

            It's japanika here with INSERT COMPANY. You’ve been using our services for awhile, so I wanted to check in to see how things are going

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
        from: 'Edi@ediLawer.net',
        subject: `Happy 1 Year in Your Home!`,
        body:
            `Hi Tal,

            Thank you for reaching out. After focusing on your needs, I believe I may know someone who may be a better fit for your situation. CC’d here is my colleague, INSERT NAME, who has INSERT # OF YEARS OF EXPERIENCE years of experience representing clients in your situation.
            
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
];
