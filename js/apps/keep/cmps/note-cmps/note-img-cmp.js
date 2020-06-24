import actionBtns from './controller-btns-cmp';

export default {
    props: ['title', 'txt', 'imgUrl'],
    template:
        `<article>
        <h4>{{title}}</h4>
        <img src="{{imgUrl}}" alt="">
        <p>{{txt}}</p>
        <action-btns><action-btns>
    </article>`,
    components: {
        actionBtns
    }
};