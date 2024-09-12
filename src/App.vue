<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/partials/AppHeader.vue';
import AppFooter from './components/partials/AppFooter.vue';
export default {
    data() {
      return { 

      }
    },
    components: {
      AppHeader,
      AppFooter
    }
}
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter/>
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss';
@use './assets/styles/general.scss';
@use './assets/styles/partials/variables' as *;
@use './assets/styles/partials/mixins' as *;
</style>
