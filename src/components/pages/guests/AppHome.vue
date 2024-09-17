<script>
import AppJumbo from '@/components/partials/AppJumbo.vue';
import AppMainHome from '@/components/partials/AppMainHome.vue';
import CheatSection from '@/components/partials/CheatSection.vue';
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
        SponsoredCoaches,
        CheatSection
    }
}
</script>

<template>
    <main>
        <AppJumbo/>
        <AppMainHome />
        <SponsoredCoaches/>
        <CheatSection/>
    </main>
</template>

<style lang="scss">

</style>