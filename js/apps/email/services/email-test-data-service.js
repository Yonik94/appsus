export const emailTestDataService = {
    query
}

function query() {
    return Promise.resolve(emails);
}

const emails = [
    {
        subject: `Let's get back together`,
        body:
        `Hey {{ first_name | fallback: "Bae" }},
        
        I just wanted to let you know that I’ve been thinking about you lately and I realized that I made a terrible mistake. Do you have time this week for us to meet up? I want to see if it’s possible for us to get back together.
        
        Just let me know!
        
        Best,`,
        isRead: false,
        sentAt: 1592674200000,
    },
    {
        subject: `I'm voting this November - are you?`,
        body:
        `Hey {{ first_name | fallback: 'there' }},

        Hope you're well. As you know, we have a big day coming up on Tuesday, November 8th! No, not my birthday, it's Election Day!
        
        Did you know that only 55% of eligible voters voted in 2012?
        
        I'm not going to tell you who to vote for - that's none of my business - but what I am asking you to do is join me in voting!
        
        Here's information on deadlines for voter registration and absentee ballots (there's still time!). And this could be helpful if you're looking to see where the candidates stand on the issues.
        
        There's nothing like sharing our voice in the democratic process. I hope you join me this November!
        
        All the best,`,
        isRead: true,
        sentAt: 1592991114,
    },
];
