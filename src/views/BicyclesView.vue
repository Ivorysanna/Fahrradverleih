<script lang="ts">
import Bikes from '@/components/Bikes.vue';
export default {
  components: { Bikes },
    data() {
        return {
            bikeData:[]
        };
    },
    mounted() {
        console.log("hallo");
        this.axios.get("/getAllBikes").then((response) => {
            this.bikeData = response.data;
        });
    },
};
</script>

<template>
   <Bikes :bikeData="bikeData"></Bikes>
</template>

