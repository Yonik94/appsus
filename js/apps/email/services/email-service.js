import { utilsService } from '../../../services/utils-service.js';
import { emailTestDataService } from './email-test-data-service.js';

export const emailService = {
    query,
    queryByFolder,
    queryByStatus
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
            return queryByStatus(byParam, state)
        default:
            return queryByFolder(byParam)
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