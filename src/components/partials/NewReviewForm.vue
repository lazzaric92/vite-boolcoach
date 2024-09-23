<script>
import axios from 'axios';

export default {
    data() {
        return {
            isSent : false
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

        <button type="submit" @click="isSent = true">Invia Recensione</button>
        <p id="message-sent" v-if="isSent === true">Recensione inviata</p>
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

#message-sent{
    align-self: end;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    background-color: $primary-red;
    border: 3px solid black;
    border-radius: 30px;
    padding: 1rem 2rem;
    // font-family: 'Jaro', sans-serif;
    color: white;
    font-size: 1.3rem;
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
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
