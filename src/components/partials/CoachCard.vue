<script>
export default{
    data(){
        return {
            
        }
    },
    props: {
        singleCoach: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card border border-light rounded mx-3 mb-3">
        <img :src="singleCoach.img_url" class="card-img-top" :alt="singleCoach.nickname" draggable="false">
        <div class="card-body text-white">
            <h5 class="card-title">{{ singleCoach.nickname }}</h5>
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