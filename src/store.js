import { reactive } from 'vue';

export const store = reactive({
    searchText: "",
    loading: true,
    carouselSponsoredCoaches: [],
    sponsoredCoaches: [],
    isOffcanvasOpen: false,
    gameSelected: 0
});