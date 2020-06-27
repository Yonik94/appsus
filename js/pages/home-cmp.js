export default {
    name: 'home',
    template:
    `<main class="home-container full-height flex column justify-center align-center">
        <transition name="slide-fade">
            <h2 v-show="pageLoad" class="logo">Appsus</h2>
        </transition>
        <div class="flex justify-center">
            <router-link to="/email">Email</router-link>  
            <router-link to="/keep">Keep</router-link> 
            <router-link to="/about">About</router-link> 
        </div>
    </main>`,
    data() {
        return {
            pageLoad: false
        }
    },
    created() {
        setTimeout(() => this.pageLoad = true, 500);
    }
}