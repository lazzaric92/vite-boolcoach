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
            axios.post(`http://localhost:8000/api/coaches/${this.$route.params.id}`, formData)
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

    <form v-on:submit="submitReview($event, $route.params.id)">
        <div class="row">
            <div class="col-3">
                <input id="review-username-id" type="text" placeholder="Username" required />
            </div>
            <div class="col-3">
                <input id="review-email-id" type="email" placeholder="Email" required />

            </div>
            <div class="col-6">
                <textarea id="review-description-id" placeholder="Description" class="w-100" required></textarea>
                
            </div>
            
            <button type="submit">Send Review</button>
        </div>
    </form>

</template>

<style scoped lang="scss">

</style>
