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
    <div class="card border border-light rounded">
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
        <img :src="singleGame.img" class="card-img-top" :alt="singleGame.name">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ singleGame.name }}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        background-color: transparent;
    }
</style>