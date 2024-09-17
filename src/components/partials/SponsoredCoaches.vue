<script>
import { RouterLink } from 'vue-router';
import CoachCard from './CoachCard.vue';
import axios from 'axios';
import SponsoredStar from './SponsoredStar.vue';
import { store } from '@/store';

export default{
    data(){
        return {
            store,
            message: 'Sponsored Coaches',
            sponsoredCoaches: [],
            isDown: false,
            startX: 0,
            scrollLeft: 0,
            currentIndex: 0,
            isAutoScrollActive: false,
            carouselClock: null
        }
    }, 
    computed: {
    },
    components: {
        CoachCard,
        SponsoredStar
    },
    methods: {
        getSponsoredPlayers(){
            axios.get('http://127.0.0.1:8000/api/coaches')
                .then((response) => {
                    // handle success
                    console.log(response.data.results.sponsoredUsers);
                    this.store.carouselSponsoredCoaches = response.data.results.sponsoredUsers;
                    this.sponsoredCoaches = response.data.results.sponsoredUsers;
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
            const walk = (x - this.startX) * 2;
            this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
        },
        nextCard(){
            this.sponsoredCoaches.push(this.sponsoredCoaches[this.currentIndex]);
            this.sponsoredCoaches.shift();
            
            // console.log(this.sponsoredCoaches);
        },
        prevCard(){
            this.sponsoredCoaches.unshift(this.sponsoredCoaches[this.sponsoredCoaches.length - 1]);
            this.sponsoredCoaches.pop();
        },
        startCarouselClock(){
            if(this.isAutoScrollActive === false){
                this.carouselClock = setInterval(this.nextCard, 4000);
                this.isAutoScrollActive = true; 
            }
        },
        stopCarouselClock(){
            if(this.isAutoScrollActive === true){
                clearInterval(this.carouselClock);
                this.isAutoScrollActive = false; 
            }
        }
    },
    mounted(){
        this.getSponsoredPlayers();
        // this.$refs.carousel.scrollLeft = this.$refs.carousel.scrollWidth / 3;
        this.startCarouselClock();
        // console.log(this.store.sponsoredCoaches);
    }
}
</script>

<template>
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center text-uppercase">I nostri Coach in primo piano</h2>
            <!-- <div class="coaches-carousel d-flex" ref="carousel"
            @mousedown="startDrag"
            @mousemove="isDragging"
            @mouseup="stopDrag"
            @mouseleave="stopDrag">
                <RouterLink  :to="{ name: 'coach-details', params: { id: coach.id } }"  class="col-sm-12 col-md-6 col-lg-4 my-5" v-for="(coach, index) in sponsoredCoaches" :key="index" style="cursor: pointer;">
                    <CoachCard :single-coach="coach"/>
                </RouterLink>
            </div> -->
            <div class="d-flex justify-content-between">
                <div class="arrow-wrapper">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" class="arrow-icon" @click="this.prevCard()"/>
                </div>
                <div class="coaches-carousel justify-content-center">
                    <template v-for="(coach, index) in sponsoredCoaches" :key="index" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">
                        <RouterLink  :to="{ name: 'coach-details', params: { id: coach.id } }" v-if="index === this.currentIndex" class="d-sm-none d-md-block col-md-4 my-5 card-wrapper smaller-card" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">
                            <SponsoredStar class="sponsored-star"/>
                            <CoachCard :single-coach="coach"/>
                        </RouterLink>
                        <RouterLink  :to="{ name: 'coach-details', params: { id: coach.id } }" v-if="index === this.currentIndex + 1" class="col-sm-11 col-md-4 my-5 card-wrapper" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">
                            <SponsoredStar class="sponsored-star"/>
                            <CoachCard :single-coach="coach"/>
                        </RouterLink>
                        <RouterLink  :to="{ name: 'coach-details', params: { id: coach.id } }" v-if="index === this.currentIndex + 2" class="d-sm-none d-md-block col-md-4 my-5 card-wrapper smaller-card" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">
                            <SponsoredStar class="sponsored-star"/>
                            <CoachCard :single-coach="coach"/>
                        </RouterLink>
                    </template>
                </div>
                <div class="arrow-wrapper">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" class="arrow-icon" @click="this.nextCard()"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;
h2{
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
}

.coaches-carousel{
    width: 97%;
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2rem;
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

.card-wrapper {
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
}

.smaller-card{
    scale: 0.8;
}

.arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: center;
    font-size: 1.2rem;

    .arrow-icon {
        opacity: .7;
        color: white;
    }

    &:hover .arrow-icon{
        opacity: 1;
        color: $primary-red;
        scale: 1.2;
        transition: all .2s ease-in-out;
    }
}

@keyframes wiggle {
    0% {transform: translate(+60%, -65%) rotate(10deg);}
    25% {transform: translate(+60%, -65%) rotate(-10deg);}
    50% {transform: translate(+60%, -65%) rotate(20deg);}
    75% {transform: translate(+60%, -65%) rotate(-5deg);}
    100% {transform: translate(+60%, -65%)rotate(0deg);}
}
</style>