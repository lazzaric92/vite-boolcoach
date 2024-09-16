<script>
import axios from 'axios';

export default {
    data() {
        return {
        };
    },

    methods: {
        async submitReview(event, id){
            const formData = {
                reviews: [
                    {
                        coach_id: this.$route.params.id,
                        username: document.getElementById('review-username-id').value,
                        email: document.getElementById('review-email-id').value,
                        description: document.getElementById('review-description-id').value
                    }
                ]
        }
            event.preventDefault();
            axios.post(`http://localhost:8000/api/coaches/${id}`, formData)
            .then(response => {
                console.log('recensione correttamente inviata')
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

            <form v-on:submit="submitReview($event, $route.params.id)">
                <input id="review-username-id" type="text" placeholder="Username" required />
                <input id="review-email-id" type="email" placeholder="Email" required />
                <textarea id="review-description-id" placeholder="Description" required></textarea>
                <button type="submit">Send Review</button>
            </form>

        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
