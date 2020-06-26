export default {
    name: 'home',
    template:
    `<main>
        <transition name="slide-fade">
            <h2 v-if="pageLoad" class="center">Appsus</h2>
        </transition>
        <router-link to="/email">Email</router-link>  
        <router-link to="/keep">Keep</router-link> 
    </main>`,
    data() {
        return {
            pageLoad: false
        }
    },
    created() {
        setTimeout(() => this.pageLoad = true, 300);
    }
}