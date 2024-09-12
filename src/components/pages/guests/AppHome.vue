<script>
import AppJumbo from '@/components/partials/AppJumbo.vue';
import AppMainHome from '@/components/partials/AppMainHome.vue';
import SponsoredCoaches from '@/components/partials/SponsoredCoaches.vue';

export default {
    data() {
        return {
            message: ''
        }
    },
    components: {
        AppJumbo,
        AppMainHome,
        SponsoredCoaches
    }
}
</script>

<template>
    <main>
        <AppJumbo/>
        <AppMainHome />
        <SponsoredCoaches/>
    </main>
</template>

<style lang="scss">
</style>