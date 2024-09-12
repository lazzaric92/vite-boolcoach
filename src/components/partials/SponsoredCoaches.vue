<script>
import { RouterLink } from 'vue-router';
import CoachCard from './CoachCard.vue';
import axios from 'axios';

export default{
    data(){
        return {
            message: 'Sponsored Coaches',
            sponsoredCoaches: [],
            isDown: false,
            startX: 0,
            scrollLeft: 0
        }
    }, 
    computed: {
    },
    components: {
        CoachCard,
    },
    methods: {
        getSponsoredPlayers(){
            axios.get('http://127.0.0.1:8000/api/coaches')
                .then((response) => {
                    // handle success
                    console.log(response.data.results);
                    this.sponsoredCoaches = response.data.results
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        startDrag(event) {

    this.isDown = true;
    this.startX = event.pageX - this.$refs.carousel.offsetLeft;        
    this.scrollLeft = this.$refs.carousel.scrollLeft;

    },
    stopDrag() {
        this.isDown = false;
    },
    isDragging(event) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.$refs.carousel.offsetLeft;
    const walk = (x - this.startX) * 2; // Velocità di scorrimento
    this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
    }
    },
    mounted(){
        this.getSponsoredPlayers();
        this.$refs.carousel.scrollLeft = this.$refs.carousel.scrollWidth / 3;
    }
}
</script>

<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center text-uppercase mb-5">Coach in primo piano</h2>
            <div class="coaches-carousel d-flex" ref="carousel"
            @mousedown="startDrag"
            @mousemove="isDragging"
            @mouseup="stopDrag"
            @mouseleave="stopDrag">
                <RouterLink  :to="{ name: 'coach-details', params: { id: coach.id } }"  class="col-3 mb-3 mx-3" v-for="(coach, index) in sponsoredCoaches" :key="index" style="cursor: pointer;">
                    <CoachCard :single-coach="coach"/>
                    <span class="text-white">Voto: {{ coach.vote_average }}</span>
                </RouterLink>
            </div>
    </div>
</div>
</div>
</template>

<style scoped lang="scss">

h2{
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
}

.coaches-carousel{
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2em;
    scrollbar-width: none;
    transition: scroll-left 0.2s ease-in-out;
    &::-webkit-scrollbar{
    width: 0;
    }
    &:active {
    cursor: grabbing;
    }
}

article{
        user-select: none;
        flex: 0 0 auto;
        width: calc((100% / 4) - 2rem);
        overflow: hidden;
}
</style>