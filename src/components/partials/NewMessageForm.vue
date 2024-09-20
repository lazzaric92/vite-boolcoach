<script>
import { store } from '@/store';
import axios from 'axios';

export default {
    data() {
        return {
            isSent: false,
            store
        };
    },
    methods: {
        async submitMessage(id){
            event.preventDefault();
            
            const formData = {
                messages: [
                    {
                        coach_id: this.$route.params.id,
                        username: document.getElementById('message-username-id').value,
                        email: document.getElementById('message-email-id').value,
                        title: document.getElementById('message-title-id').value,
                        content: document.getElementById('message-content-id').value
                    }
                ]
            }
            
            axios.post(`http://localhost:8000/api/coaches/${this.$route.params.id}`, formData)
            .then(response => {
                console.log('messaggio correttamente inviato')
                console.log(response.data);
                document.getElementById('message-username-id').value = '';
                document.getElementById('message-email-id').value = '';
                document.getElementById('message-title-id').value = '';
                document.getElementById('message-content-id').value = '';
                this.isSent = true;
                this.showIsSentMessage();
            })
            .catch(error => {
                console.log('ERRORRRE')
                console.log(this.$route.params)
                console.log(formData)

                console.error('There was an error!', error.message);
            });
        },
        showIsSentMessage(){
            setInterval(() => {
                this.isSent = false;
                document.getElementById('closing-offcanvas-btn').click();
            }, 1000);
        }
    },

};
</script>

<template>
<div class="offcanvas offcanvas-start w-50 h-100 full-md" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <button type="button" id="closing-offcanvas-btn" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="offcanvas" aria-label="Close" @click="this.store.isOffcanvasOpen = false"></button>
    <div class="offcanvas-header position-relative">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Invia un messaggio al coach</h5>
    </div>
    <div class="offcanvas-body d-flex flex-column">
        <form class="mb-5" v-on:submit="submitMessage($event, $route.params.id)">
            <div class="row mb-3">
                <div class="col-12">
                    <input id="message-title-id" type="text" class="form-control" placeholder="Title" required />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-6">
                    <input id="message-username-id" type="text" class="form-control" placeholder="Username" required />
                </div>
                <div class="col-6">
                    <input id="message-email-id" type="email" class="form-control" placeholder="Email" required />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <textarea id="message-content-id" class="form-control" rows="8" placeholder="Content" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button type="submit" class="w-100">&#9993; Invia Messaggio</button>
                </div>
            </div>
        </form>
        <span id="message-sent" v-if="isSent === true">
            Messaggio inviato!
        </span>
    </div>
</div>


</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;
@media (max-width: 766.98px){
.full-md{
    width: 100% !important;
}
}

#message-sent{
    align-self: center;
    background-color: $primary-red;
    border: 3px solid black;
    border-radius: 30px;
    padding: 1rem 2rem;
    // font-family: 'Jaro', sans-serif;
    color: white;
    font-size: 1.3rem;
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
}
</style>
