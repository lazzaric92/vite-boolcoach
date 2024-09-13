<script>
import axios from 'axios';

export default {
    data() {
        return {
        username: '',
        email: '',
        title: '',
        content: ''
        };
    },

    methods: {
        submitMessage(){
            const data = {
                username: this.username,
                email: this.email,
                title: this.title,
                content: this.content
            }

            axios.post(`/api/coaches/${this.$route.params.id}`, data)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        },
    },
    mounted:{
    }
};
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col-12 d-flex flex-column">
            <form @submit.prevent="submitMessage" method="POST">
                <input v-model="username" type="text" placeholder="Username" required />
                <input v-model="email" type="email" placeholder="Email" required />
                <input v-model="title" type="text" placeholder="Title" required />
                <textarea v-model="content" placeholder="Content" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
