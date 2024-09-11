<script>
import CoachesList from '@/components/partials/CoachesList.vue';

export default{
    data(){
        return {
            
        }
    },
    components: {
        CoachesList
    }
}
</script>

<template>
    <div class="container py-4">
        <form class="row justify-content-around mb-4 p-3">
            <!-- ! GAME_ID -->
            <div class="col-3">
                <select class="form-select" id="game_id" name="game_id" >
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
                <select class="form-select" id="vote_avg" name="vote_avg">
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
                <input class="form-control me-2" name="nickname" type="search" placeholder="Coach name" aria-label="Search">
            </div>
            
            <div class="col-1">
                <button class="btn text-white" type="submit">Search</button>
            </div>
        </form>
        <CoachesList />
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