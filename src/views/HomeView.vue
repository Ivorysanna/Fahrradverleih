<script lang="ts"></script>

<template>
    <section class="startscreen">
        <p id="title">Bike up your life</p>
        <p id="introduction">Rent the perfect bike for your adventure</p>
        <section id="cta-start">
            <RouterLink class="button" to="/RentABike">RENT YOUR BIKE</RouterLink>
            <RouterLink class="button" to="/HowItWorks">FIND OUT MORE</RouterLink>
        </section>
    </section>

    <!-- Why us -->
    <div class="container marketing">
        <h1 class="border-bottom">WHY US?</h1>

        <!-- Three columns of text below the carousel -->
        <div class="row">
            <div class="col-lg-4">
                <h2>Bike-Venture</h2>
                <img class="rounded-rectangle" src="@/assets/pictures/bikes_forest.png">

                <p>
                    Wherever you want to go, we got your back. You can choose between a wide variaty of pro level bikes,
                    so you can fully concentrate on your bikeventure.
                </p>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <h2>Guidance</h2>
                <img class="rounded-rectangle" src="@/assets/pictures/customer.png">

                <p>
                    You want to go for a ride, but don’t know where to start? Don’t worry, our employees are specialised
                    on bikes and they’ll make sure to find the right bike for your ride.
                </p>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <h2>Satisfaction</h2>
                <img class="rounded-rectangle" src="@/assets/pictures/bike_love.png">

                <p>
                    Nobody is perfect - but we do our best to make your bike experience as wonderful as it possibly
                    could be. But if you’re not happy with our services our customer care will help you to find a
                    solution for your problem.
                </p>
            </div>
            <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
    </div>

    <div class="px-4 py-5 my-5 text-center backgroundPicRentaBike">
        <h1 class="display-5 fw-bold whiteText">RENT A BIKE</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4 whiteText">Easy - Safe - Together</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <RouterLink class="button" to="/RentABike">START NOW</RouterLink>

            </div>
        </div>
    </div>

    <div>
        <h1 class="border-bottom">What our customers think</h1>
        <div class="container p-4">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card col text-center">
                        <div class="card-body">
                            <h5 class="card-title">Persona 1</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Perfect Bike - Perfect Ride</h6>
                            <p class="card-text">- &#11088;&#11088;&#11088;&#11088;&#11088; -</p>
                            <p class="card-text">
                                This was the first time I rented a bike with BIKE UP and I was not disappointed. The
                                bikes are really good an the support was helpful and very kind.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card col text-center">
                        <div class="card-body">
                            <h5 class="card-title">Persona 1</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Perfect Bike - Perfect Ride</h6>
                            <p class="card-text">- &#11088;&#11088;&#11088;&#11088;&#11088; -</p>
                            <p class="card-text">
                                This was the first time I rented a bike with BIKE UP and I was not disappointed. The
                                bikes are really good an the support was helpful and very kind.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card col text-center">
                        <div class="card-body">
                            <h5 class="card-title">Persona 1</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Perfect Bike - Perfect Ride</h6>
                            <p class="card-text">- &#11088;&#11088;&#11088;&#11088;&#11088; -</p>
                            <p class="card-text">
                                This was the first time I rented a bike with BIKE UP and I was not disappointed. The
                                bikes are really good an the support was helpful and very kind.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card col text-center">
                        <div class="card-body">
                            <h5 class="card-title">Persona 1</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Perfect Bike - Perfect Ride</h6>
                            <p class="card-text">- &#11088;&#11088;&#11088;&#11088;&#11088; -</p>
                            <p class="card-text">
                                This was the first time I rented a bike with BIKE UP and I was not disappointed. The
                                bikes are really good an the support was helpful and very kind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <!--Accordion -->
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        How do I rent a bike?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is it possible to cancel a reservation?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How do I know which bike I should choose?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Where can I get help with my reservation?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#title {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 60px;
    text-align: center;
}

#introduction {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 20px;
    text-align: center;
    opacity: 1;
}

#cta-start {
    margin-top: 200px;
    display: flex;
    justify-content: center;
}

.border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
}

/* Why us */

.rounded-rectangle {
    height: 140px;
    width: 140px;
    border-radius: 25%;
}

.marketing {
    margin-top: 8rem;
    margin-bottom: 9rem;
}

.marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
}

.marketing .col-lg-4 p {
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    margin-top: 2rem;
}

.marketing h2 {
    font-weight: 400;
    margin-bottom: 2rem;
}

.backgroundPicRentaBike {
    background-image: url("@/assets/pictures/people_riding_a_bike.png");
}

.startscreen {
    background-image: url("@/assets/pictures/welcome_op50.png");
    height: 600px;
}

#FAQ {
    margin-top: 3rem;
}
</style>
