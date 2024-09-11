<script>
import CoachCard from '@/components/partials/CoachCard.vue';
import CoachesIndex from '@/components/partials/CoachesIndex.vue';
import axios from 'axios';

export default{
    data(){
        return {
            searchOn: false,
            gameId: '',
            voteAvg: '',
            nicknameString: '',
            string: '',
            searchResults: []
        }
    },
    components: {
        CoachesIndex,
        CoachCard
    },
    methods: {
        getSearchedCoaches(game, vote, nick){
            axios.get('http://127.0.0.1:8000/api/coaches/search',{
                params:{
                game_id: game,
                vote_avg: vote,
                nickname: nick
            }
            })
            .then((response) => {
                console.log(response.data.results);
                this.searchResults = response.data.results;
            })
            .catch((error) =>{
                console.log(error);
            });
        }
    }
}
</script>

<template>
    <div class="container py-4">
        <div class="row justify-content-around mb-4 p-3">
            <!-- ! GAME_ID -->
            <div class="col-3 d-flex justify-content-center">
                <select id="game_id" v-model="this.gameId">
                    <option value="" selected disabled>-- Select a game --</option>
                    <option value="1">League of Legends</option>
                    <option value="2">Tom Clancy's Rainbow Six Siege</option>
                    <option value="3">FIFA 25</option>
                    <option value="4">Overwatch</option>
                    <option value="5">Rocket League</option>
                </select>
            </div>
            
            <!-- ! VOTE_AVG -->
            <div class="col-3 d-flex justify-content-center">
                <select id="vote_avg" v-model="this.voteAvg">
                    <option value="" selected disabled>-- Vote --</option>
                    <option value="1">1 star or higher</option>
                    <option value="2">2 stars or higher</option>
                    <option value="3">3 stars or higher</option>
                    <option value="4">4 stars or higher</option>
                    <option value="5">5 stars</option>
                </select>
            </div>
            
            <!-- ! NICKNAME -->
            <div class="col-4">
                <input class="form-control me-2" name="nickname" type="search" placeholder="Coach name" aria-label="Search" v-model="this.nicknameString">
            </div>
            
            <div class="col-1">
                <button class="btn text-white" @click="[console.log(this.game_id, this.vote_avg, this.nickname), getSearchedCoaches(this.gameId, this.voteAvg, this.nicknameString), searchOn = true]">Search</button>
            </div>
            <p v-if="searchOn === true" id="clear-search" class="col-12 text-white text-decoration-underline p-1 mb-0" @click="[searchOn = false, gameId = '', voteAvg = '', nicknameString = '']">Remove filters</p>
            <p class="text-white">params:  <span>{{ gameId }}</span> <span>{{ voteAvg }}</span> {{ nicknameString }}</p>
        </div>
        <CoachesIndex v-if="searchOn === false"/>
        <div v-else class="row">
        <article class="col-3 mb-3" v-for="coach in searchResults" key="coach.id">
            <CoachCard :singleCoach="coach"/>
        </article>
    </div>
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

    p#clear-search {
        cursor: pointer;
    }
</style>