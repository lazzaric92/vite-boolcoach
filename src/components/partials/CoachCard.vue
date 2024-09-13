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

<div class="card text-dark card-has-bg click-col" :style="{ backgroundImage: singleCoach.img_url ? 'url(' + singleCoach.img_url + ')' : 'url(' + randomImage() + ')' }">
    <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?">
    <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
            <small class="card-meta mb-2">Thought Leadership</small>
            <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">{{ singleCoach.nickname }}</a></h4>
            <small><i class="far fa-clock"></i>{{ singleCoach.email }}</small>
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
                        <h6 class="my-0 text-dark d-block">{{ singleCoach.price }}&euro;</h6>
                        <small>{{ parseFloat(singleCoach.vote_average).toFixed(2) }}</small>
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
    
}

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