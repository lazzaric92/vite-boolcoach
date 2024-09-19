<script>
export default{
    data(){
        return {
            imgArray: [
                'Ashe Chibi.png',
                'Genji Chibi.png',
                'Jager Chibi.png',
            ]
        }
    },
    props: {
        singleCoach: {
            type: Object,
            required: true
        }
    },
    methods: {
        randomImage(){
            const randomInt = Math.floor((Math.random() * this.imgArray.length), 10);
            return `src/assets/images/${this.imgArray[randomInt]}`;
        },
        getImagePath(img){
            return `src/assets/images/${img}`;
        }
    }
}
</script>

<template>
<div class="card text-white card-has-bg" 
    :style="{
        backgroundImage: (singleCoach.img_url ? (`linear-gradient(to bottom, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 70%), url(${singleCoach.img_url})`) : (`linear-gradient(to bottom, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 70%), url(${this.getImagePath('spaceInvaders_neon.png')})`)) }">
    <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
            <h4 class="fw-bolder">{{ singleCoach.nickname }}</h4>
            <small>{{ singleCoach.language }}</small>
        </div>
        <div class="p-1">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="my-0">{{ $formatNumber(singleCoach.price) }}&euro; / H</h5>
                </div>
                <div class="p-1 d-flex flex-wrap justify-content-end">
                    <img v-for="(game, index) in singleCoach.games" 
                        :key="index" 
                        class="me-2 mb-1 game-badge" 
                        :src="game.img" 
                        :alt="game.name" >
                </div>
            </div>
            <div class="rating">
                <span v-for="n in 5" 
                    :key="n" 
                    class="star" 
                    :class="{ 'filled': n <= Math.round(singleCoach.vote_average) }">&#9733;
                </span>
                <small class="mx-2 text-white">{{ (Number(singleCoach.vote_average)).toFixed(1) }} / 5</small>
                <small>({{ singleCoach.vote_average }})</small>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

.card {
    border: none;
    text-transform: capitalize;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    overflow: hidden;
    min-height: 400px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    border-radius: 1rem;
    will-change: transform;
    cursor: pointer;
}

img {
    height: 30px;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.5s;
    outline: 3px solid #FF204E;
}

.card-has-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
    background-size: cover;
    background-position: top;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.card-has-bg:hover::before {
    transform: scale(1.1);
}


.rating {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ffd700;
}

.star {
    transition: color 0.3s ease;
    color: #ddd;
}

.star.filled {
    color: #ffd700;
}

.rating small {
    font-size: 1rem;
    color: #fff;
}

.game-badge{
    border-radius: 12px;
    padding: 3px;
}

</style>
