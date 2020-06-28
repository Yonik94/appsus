import { utilsService } from '../../../services/utils-service.js';
import { emailTestDataService } from './email-test-data-service.js';

export const emailService = {
    query,
    queryByFolder,
    queryByStatus,
    getEmailSentAt,
    getSenderName,
    markAsRead,
    getEmailById,
    sendEmail,
    createDraft,
    updateDraft,
    deleteEmail,
    getEmails,
    getEmailsbyReadingStatus,
}

let gEmails;

function query(byParam = null, state) {
    gEmails = utilsService.getFromStorage('emails');
    if (!gEmails) {
        gEmails = emailTestDataService.query();
        utilsService.saveToStorage('emails', gEmails);
    }
    if (!byParam) return Promise.resolve(gEmails);

    switch (byParam) {
        case 'all':
            byParam = 'deleted';
            state = false;
        case 'deleted': case 'starred':
            byParam = 'is' + byParam.charAt(0).toUpperCase() + byParam.slice(1);
            return queryByStatus(byParam, state);
        default:
            return queryByFolder(byParam);
    }
}

function queryByFolder(folder) {
    return Promise.resolve(gEmails.filter(email =>
        (email.folder === folder && !email.status.isDeleted)));
}

function queryByStatus(statusType, state = true) {
    if (statusType === 'isDeleted') return Promise.resolve(gEmails.filter(email =>
        email.status.isDeleted === state && email.folder !== 'drafts'));

    return Promise.resolve(gEmails.filter(email =>
        (email.status[statusType] === state && !email.status.isDeleted)));
}

function getEmailSentAt(time) {
    const currTime = Date.now();
    const calcToHours = 1000 * 60 * 60;
    const calcToYears = 1000 * 60 * 60 * 24 * 365;
    const timeDiff = currTime - time;

    if (timeDiff / calcToHours < 24) {
        return new Date(time).toLocaleTimeString('en-US',
            { hour: '2-digit', minute: '2-digit', hour12: true });
    } else if (timeDiff / calcToYears < 1) {
        return `${new Date(time).getDate()} ${new Date(time).toLocaleString('en-US', { month: 'short' })}`
    } else {
        return new Date(time).toLocaleDateString();
    }
}

function getSenderName(str) {
    if (!str) return;
    return str.match(/^.+?(?=@)/g)[0].replace(/-/g, ' ');
}

function markAsRead(emailId) {
    const email = getEmailById(emailId)
        .then(email => {
            email.status.isRead = true;
            utilsService.saveToStorage('emails', gEmails);
        });
}

function getEmailById(emailId) {
    return Promise.resolve(gEmails.find(email => email.emailId === emailId));
}

function createEmail(folder = 'sent') {
    const email = {
        emailId: utilsService.getRandomId(),
        from: '',
        to: '',
        subject: `(no-subject)`,
        body:
            ``,
        sentAt: Date.now(),
        folder: folder,
        status: {
            isRead: false,
            isStarred: false,
            isDeleted: false
        }
    }
    return Promise.resolve(email);
}

function sendEmail(emailId) {
    return getEmailById(emailId)
        .then(email => {
            console.log(email)
            email.folder = 'sent';
            utilsService.saveToStorage('emails', gEmails);
            if (email.to === 'me@gmail.com') {
                createEmail('inbox')
                    .then(currEmail => {
                        currEmail.from = email.from;
                        currEmail.to = email.to;
                        currEmail.subject = email.subject;
                        currEmail.body = email.body;
                        gEmails.unshift(currEmail);
                        utilsService.saveToStorage('emails', gEmails);
                    });
            }
        });
}


function createDraft() {
    return createEmail('drafts')
        .then(email => {
            gEmails.unshift(email);
            utilsService.saveToStorage('emails', gEmails);
            return email.emailId;
        });

}

function updateDraft(info, emailId) {
    if (info.subject === '') info.subject = '(no-subject)';
    return getEmailById(emailId)
        .then(email => {
            email.from = info.from;
            email.to = info.to;
            email.subject = info.subject;
            email.body = info.body;
            utilsService.saveToStorage('emails', gEmails);
        });
}

function deleteEmail(emailId) {
    return Promise.resolve(gEmails.findIndex(email => email.emailId === emailId))
        .then(idx => {
            console.log(idx);
            gEmails.splice(idx, 1);
            utilsService.saveToStorage('emails', gEmails);
        });
}

function getEmails(ByText, emails) {
    const emailsByText = emails.filter(email => {
        return (email.subject.toLowerCase().includes(ByText.toLowerCase())
            || email.body.toLowerCase().includes(ByText.toLowerCase())
            || email.from.toLowerCase().includes(ByText.toLowerCase()))
    })
    return Promise.resolve(emailsByText)
}

function getEmailsbyReadingStatus(status, emails){
   const filteredEmails = emails.filter(email => email.status.isRead === (status === 'read') ? true : false)
   return Promise.resolve(filteredEmails)
}