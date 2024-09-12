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
            return `src/assets/images/${this.imgArray[randomInt]}`;
        }
    }
}
</script>

<template>
        <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">

                    <img v-if="singleCoach.img_url" :src="singleCoach.img_url" class="icon" :alt="singleCoach.nickname" draggable="false">
                    <img v-else :src="randomImage()" class="icon" :alt="singleCoach.nickname">

                    <div class="ms-2 c-details">
                        <h6 class="mb-0">{{ singleCoach.nickname }}</h6> <span>{{ singleCoach.price }}&euro;</span>
                    </div>
                </div>
                <div class="badge"> 
                    <span v-for="(game, index) in singleCoach.games" :key="index">{{ game.name }}</span>
                </div>
            </div>
            <div class="mt-5">
                <h5 class="heading">{{ singleCoach.email }}</h5>
                <div class="mt-5">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="mt-3"> <span class="text1"><span>{{ parseFloat(singleCoach.vote_average).toFixed(2) }}</span>
                        <span class="text2"> of 5 max</span></span> </div>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
    body {
    background-color: #eee
}

.card {
    border: none;
    border-radius: 10px
}

.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}

.badge span {
    background-color: #fffbec;
    height: 25px;
    padding-bottom: 3px;
    border-radius: 5px;
    display: flex;
    color: #fed85d;
    justify-content: center;
    align-items: center
}

.progress {
    height: 10px;
    border-radius: 10px
}

.progress div {
    background-color: red
}

.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}
</style>