import  mainHeader  from '../cmps/header.js'

export default {
    name: 'about',
    template:
    `<div>
    <router-link to="/" class="flex justify-center m5">Return to Homepage</router-link>
        <h2 class="text-center m5">About</h2>
        <div class="flex space-around about">
        <article class="inline p5">
            <img src="./img/team/yoni-portrait.jpg" class="mb5" />
            <h4>Yoni Kohn</h4>
            <p>26 years old from Zefat. Married to Neta and the father of Renana and Assaf. Passionate about full stack development.</p>
        </article>
        <article class="inline p5">
            <div>
            <img src="./img/team/tal-portrait.jpg" class="mb5" />
            </div>
            <h4>Tal Shachar</h4>
            <p>22 years old from Rosh HaAyin. An enthusiast developer and tech lover, enjoys sports and cooking.</p>
        </article>
        </div>
    </div>`,
    components: {
        mainHeader
    },
}