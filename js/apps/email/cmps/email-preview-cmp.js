export default {
    props: ['email'],
    template: `
        <li class="single-email" :class="{'read-email': email.isRead}">
            <h3>{{email.subject}}</h3>
            <p>{{email.body}}</p>
        </li>
    `,
}