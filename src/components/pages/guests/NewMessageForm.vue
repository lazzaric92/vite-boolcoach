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

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
        <form v-on:submit="submitMessage($event, $route.params.id)">
            <input id="username-id" type="text" placeholder="Username" required />
            <input id="email-id" type="email" placeholder="Email" required />
            <input id="title-id" type="text" placeholder="Title" required />
            <textarea id="content-id" placeholder="Content" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
