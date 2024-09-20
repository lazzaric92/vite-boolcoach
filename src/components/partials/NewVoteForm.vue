<script>
import axios from 'axios';

export default {
    data() {
        return {
            votes: [],
            selectedVote: {},
            isSent: false
        };
    },

    methods: {
        getVotesValue() {
            axios.get('http://localhost:8000/api/votes')
                .then(response => {
                    this.votes = response.data.data
                })
        },

        async submitVote(event, id) {
            event.preventDefault()

            //se non c'è voto selezionato ritorna errore
            if (!this.selectedVote || !this.selectedVote.lable || !this.selectedVote.value) {
                console.error('Nessun voto selezionato o dati mancanti');
                return;
            }

            console.log('VOTO SELEZIONATO', this.selectedVote);

            const formData = {
                votes: [
                    {
                        user_id: this.$route.params.id,
                        vote_id: this.selectedVote.id,
                    }
                ]
            };

            console.log('FORM DATA', formData);

            axios.post(`http://localhost:8000/api/coaches/${id}`, formData)
                .then(response => {
                    console.log('voto correttamente inviato')
                    console.log(formData)
                    console.log(response);
                    this.reloadPage();
                })
                .catch(error => {
                    console.log('VOTO SELEZIONATO DI ERRORE')
                    console.log(this.selectedVote)
                    console.log('FORM DATA DI ERRORE')
                    console.log(this.formData)
                    console.error('There was an error!', error.message);
                });
        },
        reloadPage() {
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        this.getVotesValue()
    }
};
</script>

<template>
    <div class="mb-5">
        <form v-on:submit="submitVote($event, $route.params.id)" class="d-flex flex-wrap">
            <select name="vote" id="select-vote-value" v-model="selectedVote">
                <option v-for="vote in votes" :id="vote.id" :key="vote.id" :value="vote">
                    {{ vote.lable }}
                </option>
            </select>
            <button class="ms-4" type="submit" @click="isSent = true">Invia voto</button>
        </form>
        <p id="message-sent" v-if="isSent===true">Voto inviato!</p>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;
@media (max-width: 576.98px) {
    form {
        flex-direction: column;

        select {
            margin-bottom: 1rem;
            align-self: end !important;
        }
    }
}
#message-sent{
    align-self: center;
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


select {
    align-self: center;
    padding: 1rem 1.5rem;
    border-radius: 20px;
}
</style>
