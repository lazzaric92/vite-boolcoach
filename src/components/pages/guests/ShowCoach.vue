<script>
import NewMessageForm from './NewMessageForm.vue';
import axios from 'axios';

export default {
    data() {
        return {
            coach: null,
            gamesAssets: [
                {
                    id: 1,
                    name: "League of Legends",
                    background: "https://s3-alpha-sig.figma.com/img/c30a/f47e/f41ee738ce99e874cde8d2b656d98a43?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsMrBNdOh2XfTb2ungrKVIg~tuRIL3V8JmCwZ5HWToTO6xNupgL8qHvJFxqwK3I-4tWxN-ibwaclytifE2XmnI3cXUGAtvhv2W8c4U1Vpzo-LfviHVM1cv7EMVwREBGnbWToFzbbgVvhWeon6hNP01K8ivnO1524ohuTfvU2JfJEUoeoPI~C-ytIEwBHka8bmeBEQ-tONrFI4GdYW-xXYagVtZpXn60cOr-fTalFQHxgX2W6m4OP3ISnBwWD9N17L5F1muwQEH9m~oC-~MFVXQ9ZPwbmrVDCoAfpiicVnC2PFz3ubcOZTgPTzF8OyVTylsjjBoVPcFiYO~im3bzw3Q__"
                },
                {
                    id: 2,
                    name: "Rainbow Six Siege",
                    background: "https://s3-alpha-sig.figma.com/img/f2a1/d577/3b362951622c01d909cee8a230dce6e5?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exlQl7fSRI6egBlwSdLnrVCtqBAtJRHUYESUE4LTlmWNuRmqhLGjD~qhGHZzzwR8EBxw-Bs1uQ-59OqsxUO4xYJQ2TLZmvJcy65TZlndVkPr~XJunQisHccNQu2EQtgjcAU6enUEhRF8fMXLoU51bioAWTj8bZphM2Di1sorCoJETXuKkw3sUYQigXKuz8dr0JFl0EoYqhEc3sTM4SyqCaQl8W7IvDy-sLuvjBnyv8VdaOkZLKXDAK8wPm~XDfN4Y817WbExK42QMK8m0QbccFwwT4YfktFbgealP3JhxGiw6msbOnlk~UroGSiY3BcY1RufGVO6QGsp-NImBxNTMA__"
                },
                {
                    id: 3,
                    name: "Overwatch 2",
                    background: "https://s3-alpha-sig.figma.com/img/d258/ad95/ffb609ecd311943a741f1cbb3953bfb9?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUSutUzRx6xXfjVQPw~86JpiUjSr9WBRfztTFp-VPPtdUpAYdQLtxUinSyUzrxalpJDRFemdPnpVi0VSJUPvjNe5P~sM1LNn0BB4pMSesFVc5wZc3W~yB4A9CneHZVnxnGnjH1WfrIQWtxa92xjBqigLq-eQYqYJxlcc9iX~g3N5If8eHSgr1kvW7HkPvflG~vAOCN~bDMkfUBZgNkmc0yov-BXuZ-SZICLxYpCqC8fvJ6Wbn~LFHNMX5u5YQEKaoTEDkrBv7OTUFyEsBawxxQTVKn67Sbo4Lekz4lemGELPRA14onQMGMiCXEVvM1iTWB5524ouLBgnFk-PQLjS7w__"
                },
                {
                    id: 4,
                    name: "Rocket League",
                    background: "https://s3-alpha-sig.figma.com/img/1d20/94e2/e8713d52fdaa48a36530b684282bb50d?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iLXfEgMX2C5GxSOcoKtqPVnvgyD2~-fem3~hlhBBboZcHQ6GqjRBGUV2ZmV7jfM1s3JM4G5ClplWi8qeyvQ8VuYzEjmwU42bw4B0AsMMntXD7A3w3ajDKxKuROtaMUyqO5RitRh3hBspDqQ-evrNWMKfR8dHxQ-JkFGFCGhr3d0b8E7mFMt6HdYk43V~WRcW~6N8S1qQBrCKaDRDXYc4YTodHrLhJYVCuWWuUYK1zKdQZzXhbHrxgqoxF9yk1Z5SQ6BV~NdrZLnLrY5cAzvkqw9~s5vGGKe2PC5yo0vbyNjTxnQNQGXN6YDY0ImqK-8vIRKpBQyuhDHi~Uw5UAyhmg__"
                },
                {
                    id: 5,
                    name: "FC 25",
                    background: "https://s3-alpha-sig.figma.com/img/c829/9992/c1719f81e55f4c75b6d6a8bbb483d07e?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXCODJu0M3GdvgPzgMI4taSU25Gji-n0J1qGKw5jjL-1pKwWTSHurAfFsyH8AYbQHaKLLg1g7lCzwhJYpfYcvGado6eixs7k6AwCaZX9ADNDBmrmHYVWTR8jtS5QRJ597zbz0-PwQCJwIadul9WRxl6~55rPBCgJ0wTAevsmF9K0ebuRjM0Vlb99ydChCG-xAOQnmqVpEin0FNRLU48EmoXaXnC80NivnjtL5sVEVHJBQWD2gMgJclRaL9-nVnJ0QmX1j7DSz93yzpt9TzrL4-ATiTANVkIu-S06aMFxWL~~GAk031Xv5ehM0GSAmtFvWLuHy10nZr1h81weVoKlNQ__"
                }
            ]
        }
    },
    components:{
        NewMessageForm
    },
    methods: {
        getCoach(id) {
            axios.get(`http://127.0.0.1:8000/api/coaches/${id}`, {
                params: {
                }
            })
                .then((response) => {
                    // console.log(response.data.results);
                    this.coach = response.data.results;
                    // console.log(this.coach);
                })
                .catch((error) => {
                    this.$router.push({ name: '404-not-found' });
                    console.log(error);
                });
        },
    },
    created() {
        this.getCoach(this.$route.params.id);
    }
}
</script>

<template>
    <div class="show d-flex align-items-start">

        <div class="image" :style="{ background: 'url(' + coach.img_url + ')' }">
            <div class="gradient"></div>
        </div>
        <div class="info"
            style="background: linear-gradient(to right, rgba(18, 25, 34, 1) 20%, rgba(18, 25, 34, .7) 100%), url(https://s3-alpha-sig.figma.com/img/c30a/f47e/f41ee738ce99e874cde8d2b656d98a43?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsMrBNdOh2XfTb2ungrKVIg~tuRIL3V8JmCwZ5HWToTO6xNupgL8qHvJFxqwK3I-4tWxN-ibwaclytifE2XmnI3cXUGAtvhv2W8c4U1Vpzo-LfviHVM1cv7EMVwREBGnbWToFzbbgVvhWeon6hNP01K8ivnO1524ohuTfvU2JfJEUoeoPI~C-ytIEwBHka8bmeBEQ-tONrFI4GdYW-xXYagVtZpXn60cOr-fTalFQHxgX2W6m4OP3ISnBwWD9N17L5F1muwQEH9m~oC-~MFVXQ9ZPwbmrVDCoAfpiicVnC2PFz3ubcOZTgPTzF8OyVTylsjjBoVPcFiYO~im3bzw3Q__);">
            <section class="d-flex justify-content-between align-items-center">
                <h1 class="d-inline"> {{ coach.nickname }} </h1>
                <p class="pt-3">
                    <span class="badge" v-for="game in coach.games" :key="game.id">
                        <img v-show="game.id == 1"
                            src="https://s3-alpha-sig.figma.com/img/8a9a/b436/cfb21689e2dba2768a2644e9e998a40b?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IKyJ53PvjIeCWwpE2fd45jhoxFHUXTg39hA9iP3YZHB6qe7lxQmLjKm0fEXjqf6NQbMZzXjPXowqgpPfK6fifwJvHbkVFYqGpTgmFoakepUlq~EQEmQzV~ckuK-64C-2zmFLn0ICRCA4bZzfT1t2R9ClU6hHk4u8bwEooVTEZwfHfSV1wrr6pYdKcfSheFAXMne119svG2XAD6DD~5wnwRD9il0blyqv3v1MHTs99fZQAAG32WylhYbQVaj5wrvITtqD8CG-domUdOsLbkeCLZS5iv2mlZZNkgfSNWs0a3I0Gr~eR7FYKWlXoSHTQnHciwymdMqE1fI81WpfPgB1bQ__"
                            :alt="game.name">
                        <img v-show="game.id == 2"
                            src="https://s3-alpha-sig.figma.com/img/86c1/98ba/e588a0b75bcbaaa3e197d187fd159912?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7hNrwkIuyt7t1tKD3zelJXj365CKjWUfgHBkH1bIY6AFzqonRkAyf9rAsSeJJJE9~BR63CpQGnl-Nnvud4FHfYCgqGrZ1b9kqX26-yBB8PGtv1O5fqIqHWZ27h9KvqBisRHCe4NJ6Yy9IVkc6riIHBfBf~0vz3TH70~Hun8Lu3UbyCDXEaMsMJqG8OWDLD-UWhk2SimSV2aNQNALLUt4NI9uKwTaJ8i6Wy~ykBwYgyNEbmqvsc8u~f3lrz1CvjNRJDfn~8g5Qj74PH7O-KBOzrvgRyY0WD~7UkNnriU1UdrcBvZYAAfRwLA0fO7inKVXuwT~I49j0Ebh6hUrshhqQ__"
                            :alt="game.name">
                        <img v-show="game.id == 3" class="mt-2"
                            src="https://s3-alpha-sig.figma.com/img/a751/3cfa/9c68bb3547fe84c442fbe86d703f5f9a?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rt9wI5rwhlP14wDjMmfa0JbeFhI6NzORgcoqY3Pf7OynWA7ZelIsi40KJyfNo4wkSo01ckW20UhdeuNTo~P23HF9mJDKpjIxtPCCQbyAuN6LKit14ngqWyKkbN1482LGmMwwJD6rG79FgrQYEfGslPenIpr587~U2CmXyytrZW66GBMIgeR7FGfgkJMYmQipmerFOEF2mg6rTev2nMDuvRPhYuPPF~cuj27LB6qb0mQlAE0zrFBXyNnejo9j-Zt2gA4u6uscKmwgoN0TyrcC6Ufl2kSUWOaeSlwSW~YsZcooufsOMapaVce4DSgMcfKMYf3dtAimM0e-zboD3klv~A__"
                            :alt="game.name">
                        <img v-show="game.id == 4"
                            src="https://s3-alpha-sig.figma.com/img/6ecc/1d5d/74240ceb07688ef9becef6875f1b4ed3?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WllW4zKwyFZbWAtf6iqFY6YB7Be15Loftun4ztUC61bzZNmvOHyw-qjQ4O5egmXOVj33-XCb9EjPn-a3w9oOOZNd2yT4Gtc04Nr5VD-MjWEdJ-RBpdJdNLxaWBXzkJ4LdsNz7jov5mzzw~YPARfOp4aaDcFerRtHIWNee7b5XlMNw0Nq-4CK0ZWOZzcDeaMiSRHTv~PE~n6FwOKdDAa2mPmuDull~p74fdkvb~ohsiO5DTcTnsaBiF0Y8qORNXVpEeBQV-JHNpRQ14DBA8kkQ6nG~UnopXIlDudAFaQzSAE0AhyK1yAzBQqe-Pptd06Mq2HW0OTWvf1aYRNzEvLXdw__"
                            :alt="game.name">
                        <img v-show="game.id == 5"
                            src="https://s3-alpha-sig.figma.com/img/a751/3cfa/9c68bb3547fe84c442fbe86d703f5f9a?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rt9wI5rwhlP14wDjMmfa0JbeFhI6NzORgcoqY3Pf7OynWA7ZelIsi40KJyfNo4wkSo01ckW20UhdeuNTo~P23HF9mJDKpjIxtPCCQbyAuN6LKit14ngqWyKkbN1482LGmMwwJD6rG79FgrQYEfGslPenIpr587~U2CmXyytrZW66GBMIgeR7FGfgkJMYmQipmerFOEF2mg6rTev2nMDuvRPhYuPPF~cuj27LB6qb0mQlAE0zrFBXyNnejo9j-Zt2gA4u6uscKmwgoN0TyrcC6Ufl2kSUWOaeSlwSW~YsZcooufsOMapaVce4DSgMcfKMYf3dtAimM0e-zboD3klv~A__"
                            :alt="game.name">
                    </span>
                </p>
            </section>
            <p class="text-capitalize"><span>{{ coach.name }} {{ coach.surname }}</span></p>
            <p>Lingue: <span class="text-capitalize">{{ coach.language }}</span></p>
            <p>Prezzo: {{ coach.price }} &euro;</p>
            <div class="summary">
                <p>Descrizione:</p>
                <span >{{ coach.summary }} </span>
            </div>
            <div>
                <p>Recensioni:</p>
                <section class="review" v-for="review in coach.reviews" :key="review.id">
                    <h6>{{ review.username }}</h6>
                    <span>{{ review.description }}</span>
                </section>
            </div>
            <button>&#9993; Invia Messaggio</button>
        </div>
        <NewMessageForm/>
    </div>
</template>

<style scoped lang="scss">
@use '../../../assets/styles/partials/variables' as *;

div.show {
    height: calc(100vh - $header-height - $footer-height);
    width: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0px solid #000000;
    transition: all 0.3s ease 0s;


    .image {
        height: 80vh;
        width: 40%;
        border-radius: 0 20px 20px 0;
        background-size: cover !important;
        background-position: center !important;

        .gradient {
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, rgba(2, 0, 36, 0) 60%, rgba(18, 25, 34, 1) 100%);
        }

        .bg-blue {
            background-color: #121922;
        }
    }


    .info {
        width: 60%;
        height: calc(100vh - $header-height - $footer-height);
        padding: 2rem 5rem;
        overflow-y: scroll;

        h1 {
            font-family: 'Jaro', sans-serif;
            text-transform: uppercase;
            text-align: center;
            font-size: 4rem;
            text-shadow: $violet-outline;
        }

        p {
            text-shadow: $black-outline;
            font-size: 1.5rem;
        }

        .badge {
            height: 4rem;

            img {
                height: 100%;
            }
        }

        .summary {
            font-size: 1rem;
            text-shadow: $black-outline;
            margin-bottom: 2rem;
        }

        .review {
            font-size: 1rem;
            border: 1px solid white;
            border-radius: 20px;
            padding: 1rem 2rem;
            margin-top: 1rem;
            text-shadow: $black-outline;
            margin-bottom: 2rem;
        }
    }
}
</style>