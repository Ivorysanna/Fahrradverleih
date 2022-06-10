<script lang="ts">
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
    components: { Navigation, Footer },
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
    },
};
</script>

<template>
    <Navigation></Navigation>

    <RouterView />
    <Footer></Footer>
</template>

<style scoped></style>
