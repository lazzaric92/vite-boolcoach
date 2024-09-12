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
        <div class="container pt-5">
            <nav class="d-flex align-items-center justify-content-center">
                <ul class="d-flex m-0 p-0">
                    <li class="mx-3"><router-link to="/search">Coaches</router-link></li>
                    <li class="mx-3">Games</li>
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
footer {
    background: linear-gradient(180deg, #99132f 49%, #7E3CC1);
    width: 100%;
    height: $footer-height;

    li {
        cursor: pointer;
        text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
    }

    h6 {
        font-size: small;
    }
}
</style>