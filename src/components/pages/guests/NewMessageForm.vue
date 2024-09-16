<script>
import axios from 'axios';

export default {
    data() {
        return {
        };
    },

    methods: {
        async submitMessage(id){
            const formData = {
                messages: [
                    {
                        coach_id: this.$route.params.id,
                        username: document.getElementById('username-id').value,
                        email: document.getElementById('email-id').value,
                        title: document.getElementById('title-id').value,
                        content: document.getElementById('content-id').value
                    }
                ]
        }
            event.preventDefault();
            axios.post(`http://localhost:8000/api/coaches/${id}`, formData)
            .then(response => {
                console.log('messaggio correttamente inviato')
                console.log(response);
            })
            .catch(error => {
                console.log('ERRORRRE')
                console.log(this.$route.params)
                console.log(formData)

                console.error('There was an error!', error.message);
            });
        },
    },

};
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col-12 d-flex flex-column">
            <form v-on:submit="submitMessage($event, $route.params.id)">
                <input id="username-id" type="text" placeholder="Username" required />
                <input id="email-id" type="email" placeholder="Email" required />
                <input id="title-id" type="text" placeholder="Title" required />
                <textarea id="content-id" placeholder="Content" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
