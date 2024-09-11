<script>
export default{
    data(){
        return {
            
        }
    }
}
</script>

<template>
    <header class="px-4 py-3">
        <nav class="navbar">
            <ul class="list-unstyled d-flex mb-0">
                <li>
                    <router-link to="/" class="text-decoration-none fw-bold text-white mx-2">Boolcoach</router-link>
                </li>
                <li>
                    <router-link to="/search" class="text-center text-decoration-none fw-bold text-white mx-2">Coaching</router-link>
                </li>
            </ul>
            
            
        </nav>
    </header>
</template>

<style scoped lang="scss">
    header{
        background: #7e3cc1;
        background: linear-gradient(145deg, #7e3cc1 0%, #d62973 75%, #ff204e 100%);
    }
</style>