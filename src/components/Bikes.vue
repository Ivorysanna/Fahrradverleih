<script lang="ts">
import { checkOutStore } from "@/stores/checkOut";
import { mapWritableState } from "pinia";
export default {
    props: {
        bikeData: {
            type: Array,
            required: true,
        },
    },
    computed: {
        ...mapWritableState(checkOutStore, ["selectBike"]),
    },
};
</script>

<template>
    <div id="bicycles-container" class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mx-4 mt-4">
        <div class="col singleBike" v-for="eachBike in bikeData" :key="eachBike.Fahrrad_ID">
            <div class="card">
                <img :src="eachBike.Foto" class="card-img-top" alt="Bikes" />
                <div class="card-body">
                    <h5 class="card-title">{{ eachBike.Marke }}</h5>
                    <p class="card-text">
                        Biketype: {{ eachBike.Kategorie }} <br />Akku: {{ eachBike.Akku }} <br />Color:
                        {{ eachBike.Farbe }}
                    </p>
                    <button class="btn btn-primary" @click="selectBike = eachBike.Fahrrad_ID">Rent this bike</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    vertical-align: -0.125em;
    fill: currentColor;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.card-img-top {
    width: 100%;
    height: 300px;
    object-fit: contain;
}
</style>
