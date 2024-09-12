<script>
import axios from 'axios';

export default{
    data(){
        return {
            coach: null
        }
    },
    methods: {
        getCoach(id){
            axios.get(`http://127.0.0.1:8000/api/coaches/${id}`, {
                params: {
                    
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.coach = response.data.results;
                console.log(this.coach);
            })
            .catch((error) => {
                this.$router.push({ name: '404-not-found' });
                console.log(error);
            }); 
        },
    },
    created(){
        this.getCoach(this.$route.params.id);
    }
}
</script>

<template>
<h1> {{ coach.nickname }} </h1>
</template>

<style scoped lang="scss">

</style>