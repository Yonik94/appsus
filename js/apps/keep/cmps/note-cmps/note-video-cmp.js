import actionBtns from './controller-btns-cmp';

export default {
    props: ['title', 'txt', 'videoUrl'],
    template:
        `<article>
        <h4>{{title}}</h4>
        <iframe src="{{videoUrl}}" frameborder="0"></iframe>
        <p>{{txt}}</p>
        <action-btns><action-btns>
    </article>`,
    components: {
        actionBtns
    }
};