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
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
        <nav class="navbar">
            <div>
                <router-link to="/" class="text-decoration-none text-white mx-2">Home</router-link>
                <router-link to="/dashboard" class="text-decoration-none text-white mx-2">Dashboard</router-link>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>