<script>
import axios from 'axios';

export default {
    data() {
        return {
        };
    },

    methods: {
        async submitReview(event, id) {
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
                    this.reloadPage()
                })
                .catch(error => {
                    console.log('ERRORRRE')
                    console.log(this.$route.params)
                    console.log(formData)

                    console.error('There was an error!', error.message);
                });
        },
        reloadPage() {
            window.location.reload();
        }
    },
};
</script>

<template>
    <form v-on:submit="submitReview($event, $route.params.id)" class="d-flex flex-column align-items-end w-100">
        <div class="form-element">
            <input id="review-username-id" type="text" placeholder="Username" required />
        </div>
        <div class="form-element">
            <input id="review-email-id" type="email" placeholder="Email" required />

        </div>
        <div class="w-100 d-flex justify-content-end content">
            <textarea id="review-description-id" type="text" class="w-75" rows="5" required>
            </textarea>
        </div>

        <button type="submit">Invia Recensione</button>
    </form>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;
@media (max-width: 766.98px) {
    .form-element{
        width: 100%;
    }

    input,
    textarea {width: 100% !important;}
}


button:hover {
    scale: 1.05;
    transition: all .2s ease-in-out;
}

input,
textarea {
    background-color: transparent;
    color: white;
    padding: .5rem 1rem;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 20px;
    margin-bottom: 1rem;

    &:focus {
        outline: $primary-violet;
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.808);

        text-shadow: none;
    }


}

textarea {
    border-radius: 30px;
}
</style>
