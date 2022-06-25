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
    <!-- <Bikes :bikeData="bikeData"></Bikes> -->
    <p id="title">BICYCLES</p>
    <div id="bicycles" class="row row-cols-2 row-cols-md-2 row-cols-xl-3 g-4 mx-4 mt-4">
        <div class="col singleBike" v-for="eachBike in bikeData" :key="eachBike.Fahrrad_ID">
            <div class="card">
                <img :src="eachBike.Foto" class="card-img-top" alt="Bikes" />
                <div class="card-body">


                    <h5 class="card-title">{{ eachBike.Marke }}</h5>

                    <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-bicycle" viewBox="0 0 16 16">
                            <path
                                d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                        </svg> {{ eachBike.Kategorie }} <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-battery-full" viewBox="0 0 16 16">
                            <path d="M2 6h10v4H2V6z" />
                            <path
                                d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                        </svg> {{ eachBike.Akku }} % <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-palette-fill" viewBox="0 0 16 16">
                            <path
                                d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg> {{ eachBike.Farbe }}
                    </p>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.col.singleBike {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
}

.card-img-top {
    height: 330px;
    border-radius: 5%;

}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    width: max-content;
    border-radius: 5%;
    background-color: #FFF9B2;
}

#title {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 60px;
    text-align: center;
}
</style>