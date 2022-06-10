<script lang="ts">
import Navigation from "./components/Navigation.vue";
export default {
    components: { Navigation },
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
</template>

<style scoped></style>
