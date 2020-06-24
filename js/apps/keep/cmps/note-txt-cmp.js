import actionBtns from './action-btns-cmp'

export default {
    props: ['title', 'txt'],
    template:
    `<article>
        <h4>{{title}}</h4>
        <p>{{txt}}</p>
        <action-btns><action-btns>
    </article>`,
    components:{
        actionBtns
    }
}