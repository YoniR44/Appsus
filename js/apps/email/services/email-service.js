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

const EMAILS_KEY = 'emails_key';
const SENT_EMAILS_KEY = 'sent_emails_key';
const DELETED_EMAILS_KEY = 'deleted_emails_key';

var gEmails = [];
var gSentEmails = [];
var gDeletedEmails = [];

createEmails();
sortByTime(gEmails);

function _createEmail(subject, body, fromWho) {
    var currTime = new Date();
    var email = {
        id: makeId(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: currTime.getDate() + '/' + (currTime.getMonth() + 1) + '/' + currTime.getFullYear() + '\n' + currTime.getHours() + ':' + currTime.getMinutes(),
        timeStamp: +currTime,
        fromWho: fromWho,
        location: 'inbox'
    }
    return email;
}

function createEmails() {
    // loads emails from local storage
    
    gSentEmails = storageService.load(SENT_EMAILS_KEY);
    if (!gSentEmails) gSentEmails = [];

    gDeletedEmails = storageService.load(DELETED_EMAILS_KEY);
    if (!gDeletedEmails) gDeletedEmails = [];

    gEmails = storageService.load(EMAILS_KEY);
    if (gEmails && gEmails.length) return;

    // if local storage is empty creates data
    var emails = [];
    emails.push(_createEmail('Whats up with Vue', 'Sawsan Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Howdy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
    emails.push(_createEmail('Join our team!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!', 'abc@codingdude.com'));
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

function queryEmails(emailType) {
    if (emailType === 'inbox') return Promise.resolve(gEmails);
    else if (emailType === 'sent') return Promise.resolve(gSentEmails);
    else if (emailType === 'deleted') return Promise.resolve(gDeletedEmails);
}

function getEmailById(emailId) {
    var email = gEmails.find(function(email) {
        return emailId === email.id;
    })
console.log(email)
    if (!email) {
        email = gDeletedEmails.find(function(email) {
            return emailId === email.id;
        })
    }

    return Promise.resolve(email);
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(email => emailId === email.id);
    var deleted = gEmails.splice(emailIdx, 1);
    storageService.store(EMAILS_KEY, gEmails);
    
    deleted[0].location = 'deleted';
    console.log(deleted[0].location);
    
    gDeletedEmails.push(deleted[0]);
    storageService.store(DELETED_EMAILS_KEY, gDeletedEmails);

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

function addEmail(subject, body, sender) {
    var email = _createEmail(subject, body, sender);    
    gEmails.push(email);
    storageService.store(EMAILS_KEY, gEmails);
    
    gSentEmails.push(email);
    storageService.store(SENT_EMAILS_KEY, gSentEmails);    
    sortByTime(gEmails);
    return Promise.resolve(email);
}

function sortByTime(emails) {
    emails.sort((email1, email2) => (email1.timeStamp < email2.timeStamp) ? 1 : -1 );
    return Promise.resolve();
}