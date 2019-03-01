import { makeId } from '../../../services/util-service.js';
import storageService from '../../../services/storage-service.js';

export default {
    queryEmails,
    getEmailById,
    deleteEmail,
    updateEmailStatus,
    addEmail,
    sortByTime,
}

const EMAILS_KEY = 'emails_key'

var gEmails = [];

createEmails();
sortByTime(gEmails);

function _createEmail(subject, body, fromWho) {
    var email = {
        id: makeId(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: Date.now(),
        fromWho: fromWho
    }
    return email;
}

function createEmails() {
    // loads emails from local storage
    gEmails = storageService.load(EMAILS_KEY);
    if (gEmails && gEmails.length) return;
    
    // if local storage is empty creates data
    var emails = [];
    emails.push(_createEmail('Whats up with Vue', 'Sawsan Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Howdy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Join our team!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Become a member!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Are you available??', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Meet tommorrow?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Buy our product!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Upcoming visit', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Regarding the upcoming meeting', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Check out this Cat!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    
    // stores that data in local storage
    storageService.store(EMAILS_KEY, gEmails);
    gEmails = emails;
}

function queryEmails() {
    return Promise.resolve(gEmails);
}

function getEmailById(emailId) {
    var email = gEmails.find(function(email) {
        return emailId === email.id;
    })
    return Promise.resolve(email);
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(email => emailId === email.id);
    gEmails.splice(emailIdx, 1);
    storageService.store(EMAILS_KEY, gEmails);
    
    // returns the id of email above for presenting
    if (gEmails && gEmails.length) {
        return emailIdx > 0 ? Promise.resolve(gEmails[emailIdx - 1].id) : Promise.resolve(gEmails[emailIdx].id);
    }
    else return Promise.resolve(-1);
}

function updateEmailStatus(emailId, status) {
    var email = gEmails.find(email => email.id === emailId);
    email.isRead = status;
    storageService.store(EMAILS_KEY, gEmails);
    return Promise.resolve(email);
}

function addEmail(subject, body) {
    var email = _createEmail(subject, body);    
    gEmails.push(email);
    storageService.store(EMAILS_KEY, gEmails);
    sortByTime(gEmails);
    return Promise.resolve(email);
}

function sortByTime(emails) {
    emails.sort((email1, email2) => (email1.timestamp > email2.timestamp) ? 1 : -1 );
    return Promise.resolve();
}