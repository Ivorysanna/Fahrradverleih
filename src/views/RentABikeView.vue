<script lang="ts">
import Bikes from "@/components/Bikes.vue";
import { checkOutStore } from "@/stores/checkOut";
import { mapWritableState } from "pinia";
export default {
    components: { Bikes },
    setup() {
        const counterStore = checkOutStore();

        return { checkOutStore };
    },
    data() {
        return {
            bikeData: [],
        };
    },
    mounted() {
        var data = JSON.stringify({
            status: ["0"],
        });

        var config = {
            method: "post",
            url: "/getBikesByFilterOptions",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        this.axios(config).then((response) => {
            this.bikeData = response.data;
        });
    },
    methods: {
        logInDiv: function () {
            var x = document.getElementById("logInDiv")!;
            if (x.style.display === "none") {
                x.style.display = "block";
                this.$refs.logInButton.value = "Cancel";
            } else {
                x.style.display = "none";
                this.$refs.logInButton.value = "Log In";
            }
        },
        signUpDiv: function () {
            var x = document.getElementById("signUpDiv")!;
            if (x.style.display === "none") {
                x.style.display = "block";
                this.$refs.signUpButton.value = "Cancel";
            } else {
                x.style.display = "none";
                this.$refs.signUpButton.value = "Sign Up";
            }
        },
        loginInCLick (){
            
        },
    },
    computed: {
        ...mapWritableState(checkOutStore, ["selectedDateFrom", "selectedDateTo"]),
    },
};
</script>

<template>
    <section id="rent-bike-now">
        <h1>RENT A BIKE NOW</h1>
        <div class="rental-progress">
            <p><strong>Day & Time</strong></p>
            Choose a day and Time
            <div>
                <label for="meeting-time">From:</label> <br />

                <input type="datetime-local" id="meeting-time" name="meeting-time"  v-model="selectedDateFrom" />
            </div>
            <div>
                <label for="meeting-time">To:</label> <br />

                <input type="datetime-local" id="meeting-time" name="meeting-time" v-model="selectedDateTo" />
            </div>
            <p><strong>Choose your Bike</strong></p>
            <Bikes :bikeData="bikeData"></Bikes>

            <p><strong>Personal Data</strong></p>
            <div class="col-lg-3">
                <div id="logInDiv" style="display: none">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="col-md-6">
                            <label for="customerID" class="form-label">Customer ID</label>
                            <input type="text" class="form-control" id="customerID" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Confirm</button>
                        </div>
                    </form>
                </div>
                <input
                    class="btn btn-primary"
                    type="button"
                    ref="logInButton"
                    id="logInButton"
                    name="answer"
                    value="Log In"
                    @click="logInDiv"
                />
            </div>

            <div class="col-lg-3">
                <div id="signUpDiv" style="display: none">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" />
                        </div>
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">E-Mail</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-5">
                            <label for="inputAddress2" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress2" />
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-md-5">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Confirm</button>
                        </div>
                    </form>
                </div>

                <input
                    class="btn btn-primary"
                    type="button"
                    ref="signUpButton"
                    id="signUpButton"
                    name="answer"
                    value="Sign Up"
                    @click="signUpDiv"
                />
            </div>

            <p>Payment</p>
            <p>Checkout</p>
        </div>
        <div class="dayTime">
            <p>Choose a day and time for your bike-venture</p>
        </div>
    </section>
</template>

<style scoped></style>
