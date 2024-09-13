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
                this.$router.push({ name: '404-not-found' });
            });
        }
    }
}
</script>

<template>


    <div class="container">
        <div id="search-nav-container" class="row justify-content-around">
            <!-- ! GAME_ID -->
            <div class="col-3 d-flex justify-content-center">
                <select id="game_id" v-model="this.gameId" class="text-center">
                    <option value="" selected disabled>-- Videogioco --</option>
                    <option value="1">League of Legends</option>
                    <option value="2">Tom Clancy's Rainbow Six Siege</option>
                    <option value="3">FIFA 25</option>
                    <option value="4">Overwatch</option>
                    <option value="5">Rocket League</option>
                </select>
            </div>
            
            <!-- ! VOTE_AVG -->
            <div class="col-3 d-flex justify-content-center">
                <select id="vote_avg" v-model="this.voteAvg" class="text-center">
                    <option value="" selected disabled>-- Voto --</option>
                    <option value="0">0 &#9733; o superiore</option>
                    <option value="1">1 &#9733; o superiore</option>
                    <option value="2">2 &#9733; o superiore</option>
                    <option value="3">3 &#9733; o superiore</option>
                    <option value="4">4 &#9733; o superiore</option>
                    <option value="5">5 &#9733;</option>
                </select>
            </div>
            
            <!-- ! NICKNAME -->
            <div class="col-4">
                <input class="form-control me-2" name="nickname" type="search" placeholder="Nome coach" aria-label="Search" v-model="this.nicknameString">
            </div>
            
            <div class="col-1">
                <button class="btn text-white" @click="[getSearchedCoaches(this.gameId, this.voteAvg, this.nicknameString), searchOn = true]">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <p v-if="searchOn === true" id="clear-search" class="col-12 ms-5 text-white text-decoration-underline mb-0" @click="[searchOn = false, gameId = '', voteAvg = '', nicknameString = '']">Rimuovi filtri</p>
        </div>
    </div>

    <div id="main-content" class="container-fluid" :class="(searchOn === false || (searchOn === true && searchResults.length === 0)) ? 'empty' : ''">
        <CoachesIndex v-if="searchOn === false"/>
        <div v-if="searchOn === true">
            <div v-if="searchResults.length > 0" class="row p-5 justify-content-center">
                <article class="col-3 mb-3" v-for="coach in searchResults" key="coach.id">
                    <CoachCard :singleCoach="coach"/>
                </article>
            </div>
            <div v-else class="no-results pt-5 d-flex flex-column align-items-center">
                <h2 class="text-center text-white mb-4">No results found. <br> Unlucky.</h2>
                <img src="../../../assets/images/amumu_sad_crying.png" alt="😭" >
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../../../assets/styles/partials/variables' as *;
    @use '../../../assets/styles/partials/mixins' as *;

    #search-nav-container{
        height: $search-nav-container-height;
        padding: 3rem 1rem 1rem;
    }

    button {
        background-color: #7E3CC1;
        border: 1px solid transparent;

        &:hover {
            background-color: #ff204e;
            border: 1px solid transparent;
            scale: 1.05;
        }

        &:focus {
            background-color: #ff204e;
            border: 1px solid transparent;
            scale: 1.05;
        }
    }

    p#clear-search {
        cursor: pointer;
    }
</style>