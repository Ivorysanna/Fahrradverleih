<script lang="ts"></script>
<template>
    <div class="row">
        <p id="title">ABOUT US</p>
        <div class="col-lg-3">
            <h2>Eva Breuninger</h2>
            <img class="rounded" src="@/assets/pictures/Eva_crop.jpg" width="120" height="120" />
            <p>Project Management</p>
        </div>

        <div class="col-lg-3">
            <h2>Josue Buck</h2>
            <img class="rounded" src="@/assets/pictures/josue_buck.jpeg" width="120" height="120" />
            <p>Backend Development</p>
        </div>

        <div class="col-lg-3">
            <h2>Violetta Pyralov</h2>
            <img class="rounded" src="@/assets/pictures/Vio_crop.jpg" width="120" height="120" />
            <p>Frontend Development</p>
        </div>

        <div class="col-lg-3">
            <h2>Jasmin Meyer</h2>
            <img class="rounded" src="@/assets/pictures/jasmin_crop.jpg" width="120" height="120" />
            <p>Frontend Development</p>
        </div>
    </div>
    <br />
    <div>
        <h1>Our Story</h1>
        <p id="story">
            Our "Bike Up" - Rental Website has been realised as part of a bigger study project named "IoT and Business
            processes" that was conducted at Furtwangen University in cooperation with Fischer AG. It started in the
            Winter Semester of 2021 and will continue until the end of July 2022. The ultimate goal of this project was
            to connect the world of Internet of Things with some simple Business procedures. After a long period of
            research and analysis, in which we were able to learn a lot about ioT technologies and were able to
            experiment with numerous different sensors and devices, we finally decided to create our example Project -
            "Bike Up". <br />
            Here, we were able to build a bridge between Sensor data (sensors on the bikes to measure battery status,
            location, speed, etc) via OpenHab and business data (Customer, bike and contact data) via a database. With
            the help of our external partner from the Fischer AG, we were then able to use their Software Sherlock to
            collect all of the important Data in one place and use their REST API to access all the needed data on our
            website.
        </p>
    </div>
</template>

<style scoped>
#title {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 60px;
    text-align: center;
}
.col-lg-3 {
    text-align: center;
    align-items: center;
}

.rounded {
    border-radius: 100%;
}

#story {
    margin-left: 30px;
    margin-right: 30px;
}
</style>
