export default {
    name: 'header',
    template:
    `<main>
        <transition name="slide-fade">
            <h2 v-if="pageLoad" class="center">Appsus</h2>
        <div>
            <router-link to="/email">Email</router-link>  
            <router-link to="/keep">Keep</router-link> 
            <router-link to="/about">About</router-link> 
        </div>
    </main>`,
}