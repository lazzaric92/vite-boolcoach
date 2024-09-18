<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="main-container">
        <div class="wrapper">
            <video autoplay muted loop>
                <source
                    src="../../assets/images/jumbo/Rainbow Six Siege_ The Tournament of Champions - Six Invitational 2020 _ Ubisoft [NA] - Trim.mp4"
                    type="video/mp4">
            </video>

        </div>
        <section class="jumbo-container d-flex flex-column align-items-center">
            <h1> be the best player</h1>
            <div class="w-50 small-size">
                <p> impara a giocare dai migliori coach in circolazione, migliora le tue abilità e diventa un vero pro
                    player!
                </p>
                <!--             <p>oppure</p> -->
                <!-- <a href="https://www.youtube.com/watch?v=RvY5ploo1OI"><button>Acquista dei Cheat</button></a> -->
            </div>
        </section>
    </div>
</template>

<style lang=scss scoped>
/* Media Queery */
@media (max-width: 767.98px) {

    .main-container {
height: fit-content !important;
    }
    
    .wrapper {
        height: 100vw !important;
    }
    video {
        width: 300% !important;
    }

    .jumbo-container {
        height: unset !important;
        margin-bottom: 4rem;

        .small-size {
            width: 100% !important;
            padding: 0 2rem;
        }

        h1 {
            font-size: 5rem !important;
            padding-top: 0 !important;
            padding: 0 1rem;
        }

        p {
            font-size: 1.5rem !important;
        }
    }


    .wrapper::after {
        background-image: linear-gradient(to bottom, rgba(18, 25, 34, 0.5) 0%, rgba(18, 25, 34, 1) 100%);
    }
}

/* Desktop view */

.main-container {
    height: 30vw;
}

.wrapper {
    position: absolute;
    top: -60px;
    width: 100%;
    height: 40vw;
    z-index: -1;
    overflow: hidden;
}

.wrapper::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-image: linear-gradient(to bottom, rgba(18, 25, 34, 0) 0%, rgba(18, 25, 34, 1) 100%);
}

video {
    width: 100%;
}

.jumbo-container {
    height: fit-content;
    width: 100%;
    background-size: cover;
    background-position: center;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;


    h1 {
        font-family: 'Jaro';
        padding-top: 4rem;
        font-size: 10vw;
        text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
    }

    p {
        font-size: 1.8vw;
        font-family: 'Doppio One', sans-serif;
        text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
    }


}
</style>