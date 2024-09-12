<script>
export default{
    data(){
        return {
            imgArray: [
                'Ash Chibi.png',
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
            return this.imgArray[randomInt];
        },
        getImagePath: function(img){
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card border border-light rounded">
        <img v-if="singleCoach.img_url" :src="singleCoach.img_url" class="card-img-top" :alt="singleCoach.nickname" draggable="false">
        <img v-else :src="getImagePath(randomImage())" :alt="singleCoach.nickname">
        <div class="card-body text-white">
            <router-link class="card-title fs-5 text-decoration-none text-white">{{ singleCoach.nickname }}</router-link>
            <p class="card-text ">{{ singleCoach.email }}</p>
            <p class="card-text ">{{ singleCoach.language }}</p>
            <p class="card-text ">&euro; {{ singleCoach.price }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        background-color: transparent;
    }
</style>