import { makeId } from '../../../services/util-service.js';

export default {
    queryEmails,
    getEmailById
}

var gEmails = [];

function createEmail(subject, body) {
    var email = {
        id: makeId(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: Date.now()
    }
    return email;
}

function createEmails() {
    gEmails.push(createEmail('Whats up with Vue', 'Sawsan Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Howdie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Join our team!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Become a member!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Are you available??', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Meet tommorrow?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Buy our product!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Upcoming visit', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Regarding the upcoming meeting', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
    gEmails.push(createEmail('Check out this Cat!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum. In beatae voluptate deleniti iusto accusantium, nihil facilis sapiente similique distinctio temporibus aliquam repudiandae ab dolor nam quaerat sunt a!'));
}

function queryEmails() {
    createEmails();
    return Promise.resolve(gEmails);
}

function getEmailById(emailId) {
    var email = gEmails.find(function(email) {
        return emailId === email.id;
    })
    return Promise.resolve(email);
}