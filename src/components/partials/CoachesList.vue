<script>
import axios from 'axios';
import CoachCard from './CoachCard.vue';

export default{
    data(){
        return {
            message: 'Coaches',
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
<h1> {{ message }} </h1>
<div class="container-fluid">
    <div class="row">
        <article class="col-3 mb-3" v-for="coach in coachesList" key="coach.id">
            <CoachCard :singleCoach="coach"/>
        </article>
        
    </div>
</div>

</template>

<style scoped lang="scss">

</style>