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
    <navigation></navigation>
    <header>
        <div class="wrapper">
            <p>{{ count }}</p>
            <button @click="increment">+</button>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>
