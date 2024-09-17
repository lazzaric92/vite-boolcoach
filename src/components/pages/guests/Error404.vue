<script>
export default{
data(){
    return {
        
        }
    }
}
</script>

<template>
    <div id="main-content" class="container-fluid d-flex align-items-center justify-content-start p-0">
        <img src="../../../assets/images/R6sad.png" alt="Sorry mate 😢">
        <div class="flex-grow-1 text-center">
            <h1 class="mb-4">4 0 4</h1>
            <h2 class="mb-4">Pagina non trovata.</h2>
            <h3>Controlla di aver inserito <br> l'indirizzo giusto.</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../../assets/styles/partials/mixins' as *;
@use '../../../assets/styles/partials/variables' as *;

#main-content {
    height: calc(100vh - $header-height - $footer-height);

    img{
        height: 100%
    };

    h1{
        font-size: 6rem;
        @include font-jaro;
    }
}
</style>