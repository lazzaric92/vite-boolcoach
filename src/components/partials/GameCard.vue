<script>
export default{
    data(){
        return {
            
        }
    },
    props: {
        singleGame: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card h-100 text-white d-flex flex-column border-secondary bg-transparent">
  <img :src="singleGame.img" class="card-img-top" :alt="singleGame.name">
  <div class="card-body flex-grow-1">
    <h5 class="card-title pt-auto">{{ singleGame.name }}</h5>
    <p class="card-text">{{ singleGame.genre }}</p>
    <!-- <div class="mt-auto">
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>

    </div> -->
  </div>
</div>
</template>

<style scoped lang="scss">
    .card{
        background-color: transparent;
    }

    .card-title {
        color: #7E3CC1;
    }
</style>