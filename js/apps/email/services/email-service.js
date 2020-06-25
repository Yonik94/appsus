import { utilsService } from '../../../services/utils-service.js';
import { emailTestDataService } from './email-test-data-service.js';

export const emailService = {
    query,
    queryByFolder,
    queryByStatus,
    getEmailSentAt,
    getSenderName
}

let gEmails;

function query(byParam = null, state) {
    gEmails = utilsService.getFromStorage('emails');
    if (!gEmails) gEmails = emailTestDataService.query();

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
        email.status.isDeleted === state));

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

function getSenderName(str){
   return str.match(/^.+?(?=@)/g)[0].replace(/-/g, ' ');
}

