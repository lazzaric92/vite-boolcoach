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
    <div class="card p-3 mb-2 d-flex flex-row">
    <!-- Immagine a sinistra -->
    <div class="image-container">
        <img v-if="singleCoach.img_url" :src="singleCoach.img_url" class="icon" :alt="singleCoach.nickname" draggable="false">
        <img v-else :src="randomImage()" class="icon" :alt="singleCoach.nickname">
    </div>
    
    <!-- Dettagli a destra -->
    <div class="details-container ms-3 d-flex flex-column justify-content-between">
        <!-- Nome e Prezzo -->
        <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0">{{ singleCoach.nickname }}</h6>
            <span class="price">{{ singleCoach.price }}&euro;</span>
        </div>
        
        <!-- Giochi -->
        <div class="badge mt-2">
            <span v-for="(game, index) in singleCoach.games" :key="index">{{ game.name }}</span>
        </div>
        
        <!-- Email -->
        <h5 class="heading mt-2">{{ singleCoach.email }}</h5>

        <!-- Progress bar e voto -->
        <div class="progress-container mt-2">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="vote mt-2">
                <span class="text1">{{ parseFloat(singleCoach.vote_average).toFixed(2) }}</span>
                <span class="text2"> of 5 max</span>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped lang="scss">
body {
    background-color: #eee;
}

.card {
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Immagine che occupa il 40% della card */
.image-container {
    width: 40%;
}

.icon {
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 10px;
    object-fit: cover;
}

/* Dettagli che occupano il 60% */
.details-container {
    width: 60%;
    padding: 10px;
}

.c-details span {
    font-weight: 300;
    font-size: 13px;
}

.price {
    font-weight: bold;
    color: #555;
}

/* Badge per i giochi */
.badge span {
    background-color: #fffbec;
    height: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    color: #fed85d;
    margin-right: 5px;
}

.progress {
    height: 10px;
    border-radius: 10px;
}

.progress div {
    background-color: red;
}

.text1 {
    font-size: 14px;
    font-weight: 600;
}

.text2 {
    color: #a5aec0;
}

</style>