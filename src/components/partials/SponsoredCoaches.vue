<script>
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
<div class="container">
    <div class="row">
        <div class="col-12">
            <h2 class="text-white">Our sponsored coaches:</h2>
            <div class="coaches-carousel d-flex" ref="carousel"
            @mousedown="startDrag"
            @mousemove="isDragging"
            @mouseup="stopDrag"
            @mouseleave="stopDrag">
                <article class="col-3 mb-3 mx-3"v-for="(coach, index) in sponsoredCoaches" :key="index">
                    <CoachCard :single-coach="coach"/>
                    <span class="text-white">Voto: {{ coach.vote_average }}</span>
                </article>
            </div>
    </div>
</div>
</div>
</template>

<style scoped lang="scss">
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