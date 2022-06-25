<script lang="ts">
import Bikes from "@/components/Bikes.vue";
import { checkOutStore } from "@/stores/checkOut";
import { sessionStore } from "@/stores/session";
import { mapWritableState, mapActions } from "pinia";
import type { AxiosError, AxiosResponse } from "axios";
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
        createContract() {
            this.axios({
                method: "post",
                url: "/createNewContract",
                data: {
                    name_customer: this.loggedInCustomer!.Nachname,
                    customer_ID: this.loggedInCustomer.Kunde_ID,
                    bike_ID: this.selectedBike.Fahrrad_ID,
                    date_1: this.selectedDateFrom,
                    date_2: this.selectedDateTo,
                    payment: this.selectedPaymentOption,
                },
            })
                .then((response: AxiosResponse) => {
                    if (response.status == 200) {
                        alert("success!");
                    }
                })
                .catch((error: AxiosError) => {
                    console.log("error", error);
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
        <p id="title">RENT A BIKE NOW</p>
        <div class="rental-progress">
            <h1 class="border-bottom headlines paddingTop">Day & Time</h1>

            <div class="rentalForms">
                <div>
                    <label for="meeting-time">From:</label> <br />

                    <input type="datetime-local" id="meeting-time" name="meeting-time" v-model="selectedDateFrom" />
                </div>
                <div>
                    <label for="meeting-time">To:</label> <br />

                    <input type="datetime-local" id="meeting-time" name="meeting-time" v-model="selectedDateTo" />
                </div>
            </div>
            <h1 class="border-bottom headlines paddingTop">Bikes</h1>
            <Bikes :bikeData="bikeData"></Bikes>

            <h1 class="border-bottom headlines paddingTop">Personal Data</h1>
            <div class="loginForm">
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
            </div>

            <!-- <p>Payment</p> -->
            <h1 class="border-bottom headlines paddingTop">Payment</h1>

            <div class="col">
                <div class="card col text-center">
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">Please choose your preferred payment option</h6>
                        <form>
                            <input
                                type="radio"
                                id="mc"
                                name="payment"
                                v-model="selectedPaymentOption"
                                value="Mastercard"
                            />
                            <label for="mc"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-credit-card-2-back"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"
                                    />
                                    <path
                                        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"
                                    />
                                </svg>
                                Mastercard</label
                            >
                            <br />
                            <input type="radio" id="pp" name="payment" v-model="selectedPaymentOption" value="Paypal" />
                            <label for="pp"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-paypal"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"
                                    />
                                </svg>
                                Paypal</label
                            >
                            <br />
                            <input type="radio" id="cash" name="payment" v-model="selectedPaymentOption" value="Cash" />
                            <label for="cash"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cash-coin"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                                    />
                                    <path
                                        d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
                                    />
                                    <path
                                        d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"
                                    />
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                </svg>
                                Cash</label
                            >
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <h1 class="border-bottom headlines paddingTop">Checkout</h1>
                <div class="container p-4">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card col text-center">
                                <div class="card-body">
                                    <h6 class="card-title">1. DAY & TIME</h6>
                                    <p class="card-text">
                                        {{ new Date(selectedDateFrom).toLocaleString() }} <br />
                                        --- <br />
                                        {{ new Date(selectedDateTo).toLocaleString() }}
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

            <div class="col-12 paddingTop">
                <button type="submit" class="btn btn-primary centeredButton" @click="createContract">Confirm</button>
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

.col.singleBike {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
}

.col {
    display: flex;
}

.card-img-top {
    height: 330px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    width: max-content;
}

.rentalForms {
    display: flex;
    align-items: center;
    justify-content: center;
}

#meeting-time {
    border: 3px solid gray;
    background-color: #fff9b2;
    border-radius: 5%;
    margin-right: 20px;
}

.loginForm {
    display: flex;
    justify-content: space-evenly;
}

.payment {
    display: flex;
    align-items: center;
}

.centeredButton {
    margin: 0 auto;
    display: block;
}

.paddingTop {
    padding-top: 80px;
}
</style>
