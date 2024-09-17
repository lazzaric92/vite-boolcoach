<script>
import axios from 'axios';
import CoachCard from '@/components/partials/CoachCard.vue';
import SponsoredStar from '@/components/partials/SponsoredStar.vue';
import { router } from '@/router';

export default {
    data() {
        return {
            game: [],
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
            ],
            sponsoredCoaches: [],
            sponsored: [],
        }
    },
    components: {
        CoachCard,
        SponsoredStar
    },
    methods: {
        getGameBackground(id) {
            const gameAsset = this.gamesAssets.find(asset => asset.id === id);
            return gameAsset ? gameAsset.background : '';
        },
        getGame(id) {
            axios.get(`http://127.0.0.1:8000/api/games/${this.$route.params.id}`, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.game = response.data.results[0];
                    console.log(this.game);
                })
                .catch((error) => {
                    this.$router.push({ name: '404-not-found' });
                    console.log(error);
                });
        },
        getCoachesList() {
            axios.get('http://127.0.0.1:8000/api/coaches',{
                params: {

                }
            })
            .then((response) =>{
                this.sponsoredCoaches = response.data.results.sponsoredUsers;
                console.log(this.sponsoredCoaches);
                this.checkIfSponsored();
            })
            .catch((error) => {
                console.log(error);
            });
        },
        checkIfSponsored(){
            // scorro l'array di ricerca
            this.game.users.forEach(coach => {
                // se l'array degli utenti sponsorizzati contiene un elemento con quell'id
                for (let index = 0; index < this.sponsoredCoaches.length; index++) {
                    const spCoach = this.sponsoredCoaches[index];
                    if(coach.id === spCoach.id){
                        // inserisco l'id nell'array sponsored
                        this.sponsored.push(spCoach.id)
                    }
                }
            });
            console.log(this.sponsored);
        }
    },
    created() {
        this.getGame(this.$route.params.id);
        this.getCoachesList();
        // console.log(this.store.sponsoredCoaches)
    }
}
</script>

<template>
    <div v-if="game"
        :style="{ backgroundImage: `linear-gradient(to right,rgba(18, 25, 34, .9) 1%, rgba(18, 25, 34, 0.7) 50%, rgba(18, 25, 34, .9) 100%), url(${getGameBackground(game.id)})` }">
        <section>
            <img :src="game.img">
    
                <h1> Coach di {{ game.name }} </h1>

            <img :src="game.img">
        </section>
        <div class="wrapper">
            <router-link :to="{ name: 'coach-details', params: { id: coach.id } }"v-for="coach in game.users" :key="coach.id" class="w-33" :class="sponsored.includes(coach.id) ? 'order-0' : 'order-1'">
                <article>
                    <SponsoredStar class="sponsored-star" v-if="sponsored.includes(coach.id)"/>
                    <CoachCard :singleCoach="coach" />
                </article>
            </router-link>
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../../../assets/styles/partials/variables' as *;

.wrapper{
    min-height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

section{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    h1, h2 {
        font-size: 3.5rem;
        font-family: 'Jaro';
        text-shadow: $black-outline;
    }



    img {
        height: 3rem;
        margin: 0 1rem;
    }
}

.w-33 {
   
    width:calc(
        33% - 5rem
        );

    article {
        position: relative;
        margin-bottom: 3rem;

        .sponsored-star {
            color: $primary-red;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            transform: translate(+25%, -25%);
        }

        &:hover .sponsored-star {
            transform: translate(+60%, -65%);
            font-size: 1.3rem;
            animation-name: wiggle;
            animation-duration: 1000ms;
            animation-iteration-count: 1;
            animation-timing-function: ease-in-out;
        }

        @keyframes wiggle {
            0% {
                transform: translate(+60%, -65%) rotate(10deg);
            }

            25% {
                transform: translate(+60%, -65%) rotate(-10deg);
            }

            50% {
                transform: translate(+60%, -65%) rotate(20deg);
            }

            75% {
                transform: translate(+60%, -65%) rotate(-5deg);
            }

            100% {
                transform: translate(+60%, -65%)rotate(0deg);
            }
        }
    }

}
</style>