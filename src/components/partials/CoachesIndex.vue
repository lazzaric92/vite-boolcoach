<script>
import axios from 'axios';
import CoachCard from './CoachCard.vue';
import SponsoredStar from './SponsoredStar.vue';
import { store } from '@/store.js';


export default{
    data(){
        return {
            store
        }
    },
    components: {
        CoachCard,
        SponsoredStar
    },
    methods: {
        getCoachesList() {
            axios.get('http://127.0.0.1:8000/api/coaches',{
                params: {

                }
            })
            .then((response) =>{
                console.log(response.data.results.sponsoredUsers);
                this.store.sponsoredCoaches = response.data.results.sponsoredUsers;
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
        <router-link :to="{ name: 'coach-details', params: { id: coach.id } }" class="col-md-4 col-12 mb-3" v-for="coach in this.store.sponsoredCoaches" key="coach.id">
            <article>
                <SponsoredStar class="sponsored-star"/>
                <CoachCard :singleCoach="coach"/>
            </article>
        </router-link>
        
    </div>
</div>

</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;
article {
    position: relative;
    
    .sponsored-star {
        color: $primary-red;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        transform: translate(+25%, -25%);
    }

    &:hover .sponsored-star{
        transform: translate(+60%, -65%);
        font-size: 1.3rem;
        animation-name: wiggle;
        animation-duration: 1000ms;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
    }

    @keyframes wiggle {
        0% {transform: translate(+60%, -65%) rotate(10deg);}
        25% {transform: translate(+60%, -65%) rotate(-10deg);}
        50% {transform: translate(+60%, -65%) rotate(20deg);}
        75% {transform: translate(+60%, -65%) rotate(-5deg);}
        100% {transform: translate(+60%, -65%)rotate(0deg);}
    }
}

</style>