<script lang="ts">
import Bikes from "@/components/Bikes.vue";
import { checkOutStore } from "@/stores/checkOut";
import { sessionStore } from "@/stores/session";
import { mapWritableState, mapActions } from "pinia";
import type { AxiosResponse } from "axios";
export default {
    components: { Bikes },
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
        ...mapActions(sessionStore, ["logIn"]),
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
        loginFormAction() {
            const userIDToLogIn: string = this.$refs.logInCustomerID.value;
            this.axios({
                method: "post",
                url: "/logIn",
                data: {
                    lastName: this.$refs.logInLastName.value,
                    _userID: userIDToLogIn,
                },
            }).then((response: AxiosResponse) => {
                console.log(response.data);
                if (response.data == true) {
                    console.log("Logging in user...");
                    this.logIn(userIDToLogIn);
                    this.axios.get("/getCustomer/" + userIDToLogIn).then((response: AxiosResponse) => {
                        console.log(response.data);
                        this.loggedInCustomer = response.data;
                    });
                }
            });
        },
    },
    computed: {
        ...mapWritableState(checkOutStore, [
            "selectedBike",
            "selectedDateFrom",
            "selectedDateTo",
            "selectedPaymentOption",
        ]),
        ...mapWritableState(sessionStore, ["loggedInCustomer"]),
    },
};
</script>

<template>
    <section id="rent-bike-now">
        <h1 id="title">RENT A BIKE NOW</h1>
        <div class="rental-progress">
            <h1 class="border-bottom headlines">Day & Time</h1>
            <h6>Choose a day and Time</h6>
            <div>
                <label for="meeting-time">From:</label> <br />

                <input type="datetime-local" id="meeting-time" name="meeting-time" v-model="selectedDateFrom" />
            </div>
            <div>
                <label for="meeting-time">To:</label> <br />

                <input type="datetime-local" id="meeting-time" name="meeting-time" v-model="selectedDateTo" />
            </div>
            <h1 class="border-bottom headlines">Bikes</h1>
            <Bikes :bikeData="bikeData"></Bikes>

            <h1 class="border-bottom headlines">Personal Data</h1>
            <div class="col-lg-3">
                <div id="logInDiv" style="display: none">
                    <form @submit.prevent="loginFormAction" class="row g-3">
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" ref="logInLastName" />
                        </div>
                        <div class="col-md-6">
                            <label for="customerID" class="form-label">Customer ID</label>
                            <input type="text" class="form-control" id="customerID" ref="logInCustomerID" />
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

            <!-- <p>Payment</p> -->
            <h1 class="border-bottom headlines">Payment</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card col text-center">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text-muted">Please choose your prefered payment option</h6>
                            <form>
                                <input
                                    type="radio"
                                    id="mc"
                                    name="payment"
                                    v-model="selectedPaymentOption"
                                    value="Mastercard"
                                />
                                <label for="mc"> Mastercard</label>
                                <input
                                    type="radio"
                                    id="pp"
                                    name="payment"
                                    v-model="selectedPaymentOption"
                                    value="Paypal"
                                />
                                <label for="pp">Paypal</label>
                                <input
                                    type="radio"
                                    id="cash"
                                    name="payment"
                                    v-model="selectedPaymentOption"
                                    value="Cash"
                                />
                                <label for="cash">Cash</label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 class="border-bottom headlines">Checkout</h1>
                <div class="container p-4">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card col text-center">
                                <div class="card-body">
                                    <h6 class="card-title">1. DAY & TIME</h6>
                                    <p class="card-text">
                                        {{ selectedDateFrom }} <br />
                                        ___ {{ selectedDateTo }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card col text-center">
                                <div class="card-body">
                                    <h6 class="card-title">2. BIKE</h6>
                                    <div v-if="selectedBike">
                                        <p class="card-text">{{ selectedBike.Marke }}</p>
                                        <p class="card-text">{{ selectedBike.Kategorie }}</p>
                                        <p class="card-text">{{ selectedBike.Farbe }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card col text-center">
                                <h6 class="card-title">3. PERSONAL DATA</h6>
                                <div v-if="loggedInCustomer">
                                    <div class="card-body">
                                        <p class="card-text">
                                            {{ loggedInCustomer.Nachname }} {{ loggedInCustomer.Vorname }}
                                        </p>
                                        <p class="card-text">{{ loggedInCustomer.Anschrift }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card col text-center">
                                <div class="card-body">
                                    <h6 class="card-title">4. PAYMENT</h6>
                                    <p class="card-text">{{ selectedPaymentOption }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.headlines {
    padding-top: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 20px;
}

#title {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 60px;
    text-align: center;
}

.uppercase {
    text-transform: uppercase;
}
</style>
