<script>
import CoachesIndex from '@/components/partials/CoachesIndex.vue';

export default{
    data(){
        return {
            searchOn: false,
            gameId: '',
            voteAvg: '',
            nicknameString: '',
        }
    },
    components: {
        CoachesIndex
    },
    methods: {
        getSearchedCoaches(game, vote, nickname){
            axios.get('',{
                    params:{
                    game_id: game,
                    vote_avg: vote,
                    nickname: nickname
                }
            })
            .then((response) => {
                console.log(response.data.results);
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
            <div class="col-3">
                <select class="form-select" id="game_id" name="game_id" v-model="gameId">
                    <option selected disabled>-- Select a game --</option>
                    <option value="1">League of Legends</option>
                    <option value="2">Tom Clancy's Rainbow Six Siege</option>
                    <option value="3">FIFA 25</option>
                    <option value="4">Overwatch</option>
                    <option value="5">Rocket League</option>
                </select>
            </div>
            
            <!-- ! VOTE_AVG -->
            <div class="col-3">
                <select class="form-select" id="vote_avg" name="vote_avg" v-model="voteAvg">
                    <option selected disabled>-- Vote --</option>
                    <option value="1">1 star or higher</option>
                    <option value="2">2 stars or higher</option>
                    <option value="3">3 stars or higher</option>
                    <option value="4">4 stars or higher</option>
                    <option value="5">5 stars</option>
                </select>
            </div>
            
            <!-- ! NICKNAME -->
            <div class="col-4">
                <input class="form-control me-2" name="nickname" type="search" placeholder="Coach name" aria-label="Search" v-model="nicknameString">
            </div>
            
            <div class="col-1">
                <button class="btn text-white" @click="[getSearchedCoaches(gameId, voteAvg, nicknameString), searchOn = true]">Search</button>
            </div>
            <p v-if="searchOn === true" class="col-12 text-white text-decoration-underline p-1 mb-0" @click="[searchOn = false, gameId = '', voteAvg = '', nicknameString = '']">Remove filters</p>
        </div>
        <CoachesIndex v-if="searchOn === false"/>
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