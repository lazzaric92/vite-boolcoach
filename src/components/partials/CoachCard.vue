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
    <div class="border border-light rounded">
        <p class="text-white">{{ singleCoach.nickname }}</p>
    </div>
</template>

<style scoped lang="scss">

</style>