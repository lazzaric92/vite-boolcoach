import { reactive } from 'vue';

export const store = reactive({
    searchText: "",
    loading: true,
    carouselSponsoredCoaches: [],
    sponsoredCoaches: [],
});