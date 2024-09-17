<script>
// import NewMessageForm from '../pages/guests/NewMessageForm.vue';
export default {
    data() {
        return {
        }
    },

}
</script>

<template>
    <footer class="d-flex align-items-center">
        <img src="../../assets/images/Footer2.png" alt="" class="left">
        <img src="../../assets/images/Footer3.png" alt="">
        <div class="container pt-5">
            <nav class="d-flex align-items-center justify-content-center">
                <ul class="d-flex m-0 p-0">
                    <li class="mx-3"><router-link to="/search">I nostri Coach</router-link></li>
                    <li class="mx-3"><a href="https://www.youtube.com/watch?v=RvY5ploo1OI&ab_channel=Wisby">Acquisto di Cheat</a></li>
                </ul>
            </nav>
            <p class="text-center mt-3">
                Sito Web creato dal team dei Cavallones (best team EU) tutti i cavalli riservati
            </p>
        </div>
        <!-- <NewMessageForm/> -->
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

@media (max-width: 767.98px) {
    img{
        display: none;
    }
}

img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: calc($footer-height - 30%);

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

    p {
        font-size: small;
    }
}
</style>