<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<template>
    <footer class="d-flex align-items-center">
        <img src="../../assets/images/Footer2.png" alt="" class="left">
        <img src="../../assets/images/Footer3.png" alt="">
        <div class="container pt-5">
            <nav class="d-flex align-items-center justify-content-center">
                <ul class="d-flex m-0 p-0">
                    <li class="mx-3"><router-link to="/search">Coaches</router-link></li>
                    <li class="mx-3">Sponsorship</li>
                </ul>
            </nav>
            <h6 class="text-center mt-5">
                Sito Web creato dal team dei Cavallones (best team EU) tutti i cavalli riservati
            </h6>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: calc($footer-height - 3rem);

    &.left {
        left: 0;
    }
}

footer {
    position: relative;
    background: black;
    width: 100%;
    height: $footer-height;

    li {
        cursor: pointer;
    }

    h6 {
        font-size: small;
    }
}
</style>