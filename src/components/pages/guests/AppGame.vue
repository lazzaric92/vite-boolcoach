<script>
import axios from 'axios';
import GameCard from '@/components/partials/GameCard.vue';

export default{
    data(){
        return {
            gamesList: [],
        }
    },
    components: {
        GameCard
    },
    methods: {
        getGamesList() {
            axios.get('http://127.0.0.1:8000/api/games',{
                params: {

                }
            })
            .then((response) =>{
                console.log(response.data.results);
                this.gamesList = response.data.results;
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    created(){
        this.getGamesList();
    }
}
</script>

<template>
    <div class="row">
        <article class="col-3 mb-3" v-for="game in gamesList" key="game.id">
            <CoachCard :singleGame="game"/>
        </article>
    </div>
</template>

<style scoped lang="scss">
    label{
        color: white;
    }

    button {
        background-color: #7E3CC1;
        border: 1px solid transparent;

        &:hover {
            background-color: #df276b;
            border: 1px solid transparent;
            scale: 1.05;
        }

        &:focus {
            background-color: #df276b;
            border: 1px solid transparent;
            scale: 1.05;
        }
    }
</style>