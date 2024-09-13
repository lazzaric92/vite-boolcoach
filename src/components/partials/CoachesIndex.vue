<script>
import axios from 'axios';
import CoachCard from './CoachCard.vue';

export default{
    data(){
        return {
            coachesList: [],
        }
    },
    components: {
        CoachCard
    },
    methods: {
        getCoachesList() {
            axios.get('http://127.0.0.1:8000/api/coaches',{
                params: {

                }
            })
            .then((response) =>{
                console.log(response.data.results);
                this.coachesList = response.data.results;
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    created(){
        this.getCoachesList();
    }
}
</script>

<template>
<div class="container-fluid">
    <div class="row justify-content-center pt-4">
        <router-link :to="{ name: 'coach-details', params: { id: coach.id } }" class="col-3 mb-3" v-for="coach in coachesList" key="coach.id">
            <article>
                <CoachCard :singleCoach="coach"/>
            </article>
        </router-link>
        
    </div>
</div>

</template>

<style scoped lang="scss">

</style>