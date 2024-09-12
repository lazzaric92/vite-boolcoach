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
        <article class="col-12 p-4" v-for="game in gamesList" key="game.id">
            <GameCard :singleGame="game"/>
        </article>
    </div>
</template>

<style scoped lang="scss">

</style>