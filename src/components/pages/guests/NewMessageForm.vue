<script>
import axios from 'axios';

export default {
    data() {
        return {
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
<div class="offcanvas offcanvas-start w-50 h-100" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <div class="offcanvas-header position-relative">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Invia un messaggio al coach</h5>
    </div>
    <div class="offcanvas-body d-flex flex-column">
        <form class="flex-grow-1" v-on:submit="submitMessage($event, $route.params.id)">
            <div class="row mb-3">
                <div class="col-12">
                    <input id="title-id" type="text" class="form-control" placeholder="Title" required />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-6">
                    <input id="username-id" type="text" class="form-control" placeholder="Username" required />
                </div>
                <div class="col-6">
                    <input id="email-id" type="email" class="form-control" placeholder="Email" required />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <textarea id="content-id" class="form-control" rows="8" placeholder="Content" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button type="submit" class="w-100">&#9993; Invia Messaggio</button>
                </div>
            </div>
        </form>
    </div>
</div>


</template>

<style scoped lang="scss">

</style>
