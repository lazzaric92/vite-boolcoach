<script>
import axios from 'axios';

export default {
    data() {
        return {
            votes: [],
            selectedVote: {}
        };
    },

    methods: {
        getVotesValue(){
            axios.get('http://localhost:8000/api/votes')
            .then(response =>{
                this.votes = response.data.data
            })
        },
        
        async submitVote(event, id){
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
            window.location.reload();
        }
    },

    mounted(){
        this.getVotesValue()
    }
};
</script>

<template>
        <div class="mb-5">
            <form v-on:submit="submitVote($event, $route.params.id)" class="d-flex flex-wrap">
                <select name="vote" id="select-vote-value" v-model="selectedVote">
                    <option 
                        v-for="vote in votes"
                        :id="vote.id"
                        :key="vote.id"
                        :value="vote"> 
                        {{ vote.lable }}
                    </option>
                </select>
                <button class="ms-4" type="submit">Invia voto</button>
            </form>
        </div>
</template>

<style scoped lang="scss">
@media (max-width: 576.98px) {
form{
    flex-direction: column;
    
    select{
        margin-bottom: 1rem;
        align-self: end !important;
    }
}
}



select {
    align-self: center;
    padding: 1rem 1.5rem;
    border-radius: 20px;
}

</style>
