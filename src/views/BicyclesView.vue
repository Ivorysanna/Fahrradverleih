<script lang="ts">
import Bikes from "@/components/Bikes.vue";
export default {
    components: { Bikes },
    data() {
        return {
            bikeData: [],
        };
    },
    mounted() {
        this.axios.get("/getAllBikes").then((response) => {
            this.bikeData = response.data;
        });
        console.log("ist durchgelaufen");
    },
};
</script>

<template>
    <Bikes :bikeData="bikeData"></Bikes>
</template>
