<script>
import axios from 'axios';
export default {
    props: {
        background_image: {
            type: String,
            required: true
        },
        logo_image: {
            type: String,
            required: true
        },
        game_name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
        <RouterLink  :to="{ name: 'game-details', params: { id: id } }" class="bg" :style="{ backgroundImage: 'url(' + background_image + ')' }">
            <figure>
                <img :src="logo_image" :alt="game_name">
            </figure>
        </RouterLink>
</template>

<style lang="scss" scoped>


article:last-child {
    div.bg {
        figure {
            margin-top: 2rem;
            height: 70px;

            img {
                height: 100%;
            }
        }
    }
}

.bg {
    height: 30vh;
    width: 30vh;
    border-radius: 15px;
    background-size: 220% !important;
    background-position: center !important;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0px solid #000000;
    transition: all 0.3s ease 0s;

    &:hover {
        cursor: pointer;
        outline: 3px solid #FF204E;
        background-size: 180% !important;
    }

    &:hover figure {
        transition: all .3s ease 0s;
        transform: scale(1.2);
    }

    figure {
        width: 110px;
        height: 110px;
        flex-shrink: 0;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
        }
    }
}
</style>