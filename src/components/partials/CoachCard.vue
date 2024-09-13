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
    <div class="card d-flex flex-row">
    <!-- Immagine a sinistra -->
    <div class="image-container">
        <img v-if="singleCoach.img_url" :src="singleCoach.img_url" class="icon" :alt="singleCoach.nickname" draggable="false">
        <img v-else :src="randomImage()" class="icon" :alt="singleCoach.nickname">
    </div>
    
    <!-- Dettagli a destra -->
    <div class="details-container d-flex flex-column justify-content-between">
        <!-- Nome e Prezzo -->
        <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0">{{ singleCoach.nickname }}</h6>
            <span class="price">{{ singleCoach.price }}&euro;</span>
        </div>
        
        <!-- Giochi -->
        
        
        <!-- Email -->
        <h5 class="heading mt-2">{{ singleCoach.email }}</h5>

        <!-- Progress bar e voto -->
        <div class="progress-container mt-2">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="vote mt-2">
                <span class="text1"></span>
                <span class="text2"> of 5 max</span>
            </div>
        </div>
    </div>
</div>
<!-- card seconda -->
<div class="card text-dark card-has-bg click-col" 
     :style="{ backgroundImage: singleCoach.img_url ? 'url(' + singleCoach.img_url + ')' : 'url(' + randomImage() + ')' }">
    <!-- Contenuto della card qui -->


    <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?">
    <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
            <small class="card-meta mb-2">Thought Leadership</small>
            <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">Web Developmet Lorem Ipsum Sit Amet Consectetur dipisi?</a></h4>
            <small><i class="far fa-clock"></i> October 15, 2020</small>
        </div>
            <div class="card-footer">
                <div class="media">
                    <img v-for="(game, index) in singleCoach.games" 
                        :key="index" 
                        class="mr-3 rounded-circle" 
                        :src="game.img" 
                        alt="Generic placeholder image" 
                        style="max-width:50px">
                    <div class="media-body">
                        <h6 class="my-0 text-dark d-block">{{ parseFloat(singleCoach.vote_average).toFixed(2) }}</h6>
                        <small>Director of UI/UX</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
body{
background: #161616;
}
h1{
  color:#fff;
}
.lead{
  color:#aaa;
}

.wrapper{margin:10vh}
//post card styles

.card{
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
 overflow:hidden;
 border-radius:20px;
 min-height:450px;
   box-shadow: 0 0 12px 0 rgba(0,0,0,0.2);

 @media (max-width: 768px) {
  min-height:350px;
}

@media (max-width: 420px) {
  min-height:300px;
}

 &.card-has-bg{
 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size:120%;
  background-repeat:no-repeat;
  background-position: center center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    -webkit-filter: grayscale(1);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);}

  &:hover {
    transform: scale(0.98);
     box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
    background-size:130%;
     transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
}
 .card-footer{
  background: none;
   border-top: none;
    .media{
     img{
       border:solid 3px rgba(255,255,255,0.3);
     }
   }
 }
  .card-title{font-weight:800}
 .card-meta{
    color:rgba(0,0,0,0.3);
  text-transform:uppercase;
   font-weight:500;
   letter-spacing:2px;}
 .card-body{ 
   transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
 

  }
 &:hover {
   .card-body{
     margin-top:30px;
     transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
   }
 cursor: pointer;
 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);

}
}

</style>