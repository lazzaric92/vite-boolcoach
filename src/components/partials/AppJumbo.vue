<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <section class="jumbo-container d-flex flex-column align-items-center">
        <h1> be the best player</h1>
        <div class="w-50">
            <p> impara a giocare dai migliori coach in circolazione, migliora le tue abilità e diventa un vero pro player!</p>
        </div>
    </section>
</template>

<style lang=scss scoped>
.jumbo-container {
    width: 100%;
    height: 600px;
    background:
        linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), ), url('../../assets/images/jumbo/676369.jpg');
    background-size: cover;
    background-position: center;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    
    h1 {
        font-family: 'Jaro';
        padding-top: 3rem;
        font-size: 10rem;
        -webkit-text-stroke-width: 4px;
        -webkit-text-stroke-color: #000;
    }

    p {
        margin-top: 4rem;
        font-size: 2rem;
        font-family: 'Doppio One', sans-serif;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #000;
    }
}
</style>