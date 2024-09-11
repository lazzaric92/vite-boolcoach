<script>
import CoachesList from '@/components/partials/CoachesList.vue';

export default{
    data(){
        return {
            
        }
    },
    components: {
        CoachesList
    }
}
</script>

<template>
    <div class="container py-4">
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<style scoped lang="scss">
    label{
        color: white;
    }

    button {
        background-color: #7E3CC1;
        border: 1px solid transparent;

        &:hover {
            background-color: #df276b;
            border: 1px solid transparent;
            scale: 1.05;
        }

        &:focus {
            background-color: #df276b;
            border: 1px solid transparent;
            scale: 1.05;
        }
    }
</style>