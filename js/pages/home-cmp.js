export default {
    name: 'home',
    template:
        `<main class="home-container full-height flex column justify-center align-center">
        <transition name="hard-slide-fade">
            <div v-show="pageLoad" class="flex column grow4 justify-end align-center">
            <h2 class="main-logo flex">Appsus</h2>
            <p class="color-white fw300 italic p3 text-center">&ldquo;For every minute spent organizing, an hour is earned.&ldquo;</p>
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