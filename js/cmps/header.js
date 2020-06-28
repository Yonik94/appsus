export default {
    name: 'main-header',
    template:
        `<main class="main-header">
        <transition name="slide-fade"/>
        <div class="flex space-between">
            <div class="flex align-center" v-if="pagePath === 'keep'">
            <img class="keep" src="./img/icons/keep.svg" alt="">
            <h2>Keep</h2>
            </div>
            <div class="flex align-center" v-if="pagePath === 'email'">
            <img class="email" src="./img/icons/email.svg" alt="">
            <h2>Email</h2>
            </div>
            <router-link to="/" class="flex align-center"><h3>Appsus</h3></router-link>
            <router-link to="/keep" class="flex align-center" v-if="pagePath === 'email'">
                <img class="keep keep-display" src="./img/icons/keep.svg" alt="">
            </router-link> 
            <router-link to="/email" class="flex align-center" v-if="pagePath === 'keep'">
                <img class="email email-display" src="./img/icons/email.svg" alt="">
            </router-link> 
        </div>
            </main>`,
    data() {
        return {
            pagePath: ''
        }
    },
    created() {
        (this.$route.path.includes('email')) ? this.pagePath = 'email' : this.pagePath = 'keep'
        // console.log(this.$route)
    }
}
        // <router-link to="/about">About</router-link>