<script>
import CoachesList from '@/components/partials/CoachesList.vue';

export default{
    data(){
        return {
            message: 'Search'
        }
    },
    components: {
        CoachesList
    }
}
</script>

<template>
<h1> {{ message }} </h1>
    <div class="container">
        <CoachesList />
    </div>
</template>

<style scoped lang="scss">

</style>