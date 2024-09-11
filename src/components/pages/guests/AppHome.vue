<script>
import AppJumbo from '@/components/partials/AppJumbo.vue';
import AppMainHome from '@/components/partials/AppMainHome.vue';


export default {
    data() {
        return {
            message: ''
        }
    },
    components: {
        AppJumbo,
        AppMainHome
    }
}
</script>

<template>
    <main>
        <AppJumbo/>
        <AppMainHome />
    </main>
</template>

<style lang="scss">
</style>