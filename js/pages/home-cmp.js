export default {
    name: 'home',
    template:
        `<main class="home-container full-height flex column justify-center align-center">
        <transition name="hard-slide-fade">
            <div v-show="pageLoad" class="flex grow3 align-end">
            <h2 class="logo flex">Appsus</h2>
            </div>
        </transition>

            <transition name="slide-fade">
            <div v-show="pageLoad" class="flex align-center grow">
                <router-link to="/email" class="flex column align-center space-between m6 color-white">
                    <img src="./img/icons/email.svg" class="email-icon" />
                    Email
                    </router-link>  
                <router-link to="/keep" class="flex column align-center space-between m6 color-white">
                    <img src="./img/icons/keep.svg" class="keep-icon" />
                    Keep
                </router-link> 
            </div>
            </transition>

            <transition name="slide-fade">
            <router-link v-show="pageLoad" to="/about" class="flex column align-center m5 color-white">
                <i class="fas fa-info-circle fa-3x"></i>
                About
            </router-link>
            </transition>
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