<template>
    <section id="rent-bike-now">
        <h1>RENT A BIKE NOW</h1>
        <div class="rental-progress">
            <p><strong>Day & Time</strong></p>
            <div>
                <label for="meeting-time">Choose a time for your ride:</label> <br>

                <input type="datetime-local" id="meeting-time" name="meeting-time" value="2022-05-12T19:30">
            </div>
            <p><strong>Choose your Bike</strong></p>
            <div id="bicycles-container" class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mx-4 mt-4">
            </div>
            <p><strong>Personal Data</strong></p>
            <div class="col-lg-3">

                <div id="logInDiv" style="display:none">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName">
                        </div>
                        <div class="col-md-6">
                            <label for="customerID" class="form-label">Customer ID</label>
                            <input type="text" class="form-control" id="customerID">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Confirm</button>
                        </div>
                    </form>
                </div>
                <input class="btn btn-primary" type="button" id="logInButton" name="answer" value="Log In" onclick="logInDiv()" />
            </div>


            <div class="col-lg-3">
                <div id="signUpDiv" style="display:none">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName">
                        </div>
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName">
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">E-Mail</label>
                            <input type="email" class="form-control" id="inputEmail4">
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress2">
                        </div>
                        <div class="col-md-1">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>
                        <div class="col-md-5">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Confirm</button>
                        </div>
                    </form>
                </div>
                <input class="btn btn-primary" type="button" id="signUpButton" name="answer" value="Sign Up" onclick="signUpDiv()" />
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
