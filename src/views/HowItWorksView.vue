<script lang="ts"></script>

<template>
    <section id="rent-a-bike">
        <h1>How to rent a bike</h1>
        <br />
        <div class="howToRent">
            <!-- Three columns of text below the carousel -->
            <div class="row">
                <div class="col-lg-3">
                    <h2>Book your reservation</h2>
                    <img class="circle" src="@/assets/pictures/book_res.png" width="120" height="120" />

                    <p>
                        You can book a reservation for a bike of your liking in no time. Just use the Formular to select
                        a date, a time and the bike you wish to rent. As soon as you’re done, you have successfully
                        reserved a bike.
                    </p>

                    <input class="btn btn-primary" type="button" id="showButton" name="answer"
                        :value="buttonText(showMoreBook)" @click="showMoreBook = !showMoreBook" />
                </div>
                <!-- /.col-lg-3 -->
                <div class="col-lg-3">
                    <h2>Pick up your bike</h2>
                    <img class="circle" src="@/assets/pictures/pick.png" width="120" height="120" />

                    <p>
                        After you reserved a bike you can pick up the bike at our store. You just need to scan the QR
                        code you will receive as soon as the reservation was successful. Enjoy your ride :)
                    </p>

                    <input class="btn btn-primary" type="button" id="showButton" name="answer"
                        :value="buttonText(showMorePick)" @click="showMorePick = !showMorePick" />
                </div>
                <!-- /.col-lg-4 -->
                <div class="col-lg-3">
                    <h2>Enjoy your ride!</h2>
                    <img class="circle" src="@/assets/pictures/enjoy.png" width="120" height="120" />

                    <p>
                        You’ve finally picked up the bike and now you’re ready to go. Over your rental period, BIKE UP
                        will provide all the important information such as duration, distance or battery stats.
                    </p>

                    <input class="btn btn-primary" type="button" id="showButton" name="answer"
                        :value="buttonText(showMoreEnjoy)" @click="showMoreEnjoy = !showMoreEnjoy" />
                </div>
                <!-- /.col-lg-4 -->
                <div class="col-lg-3">
                    <h2>Return the bike</h2>
                    <img class="circle" src="@/assets/pictures/return.png" width="120" height="120" />

                    <p>
                        As soon as you’re done, please return the bike to one of our bike stations. This will
                        automatically register your rental as done and end the rental period. You will receive a sales
                        slip within the next minutes.
                    </p>

                    <input class="btn btn-primary" type="button" id="showButton" name="answer"
                        :value="buttonText(showMoreReturn)" @click="showMoreReturn = !showMoreReturn" />
                </div>
                <!-- /.col-lg-4 -->
            </div>
        </div>
        <!-- /.row -->

        <div class="foo" id="bookResDiv" v-if="showMoreBook">

            <div class="test">
                <strong> 1. Go to rent a bike</strong> <br />
                This form will contain the following steps to gather all the information which is required to
                use our bikes. Your data will only be used for the renting process. If you need help, feel free
                to watch our “Book a reservation” video, to get a step by step instruction on how to reserve a
                bike. <br />
            </div>
            <div class="test">
                <strong> 2. Select Date and Time</strong> <br />
                The first thing you need to do, is to select the specific day and time at which you want to rent
                on of our bikes. If you know, that you won’t be able to make it, you can cancel your
                reservation. It’s important to make sure, that you will pick up your bike within the first 15
                minutes or else we must charge you a fee of 2 euro for our services. <br />
            </div>
            <div class="test">
                <strong> 3. Choose your bike</strong> <br />
                In this step you can select the bike you actually want to rent. You will see an overview of all
                the bikes, which are available during the day and time you’ve selected before. If you need help
                deciding which bike might be the best for you, don’t hesitate to contact our support. <br />
            </div>
            <div class="test">
                <strong> 4. Your personal Data</strong> <br />
                In the last step of your reservation, you need to add your personal information such as name,
                address and payment method. After you added all the required informations, the reservation
                process is finished. You will receive a mail with all the informations, regarding your
                reservation plus the QR Code you will need to pick up the bike.
            </div>
        </div>

        <div class="foo" id="pickUpDiv" v-if="showMorePick">

            <div class="test">
                <strong> 1. Go to rent a bike</strong> <br />
                This form will contain the following steps to gather all the information which is required to
                use our bikes. Your data will only be used for the renting process. If you need help, feel free
                to watch our “Book a reservation” video, to get a step by step instruction on how to reserve a
                bike. <br />
            </div>
            <div class="test">
                <strong> 2. Select Date and Time</strong> <br />
                The first thing you need to do, is to select the specific day and time at which you want to rent
                on of our bikes. If you know, that you won’t be able to make it, you can cancel your
                reservation. It’s important to make sure, that you will pick up your bike within the first 15
                minutes or else we must charge you a fee of 2 euro for our services. <br />
            </div>
            <div class="test">
                <strong> 3. Choose your bike</strong> <br />
                In this step you can select the bike you actually want to rent. You will see an overview of all
                the bikes, which are available during the day and time you’ve selected before. If you need help
                deciding which bike might be the best for you, don’t hesitate to contact our support. <br />
            </div>
            <div class="test">
                <strong> 4. Your personal Data</strong> <br />
                In the last step of your reservation, you need to add your personal information such as name,
                address and payment method. After you added all the required informations, the reservation
                process is finished. You will receive a mail with all the informations, regarding your
                reservation plus the QR Code you will need to pick up the bike.
            </div>
        </div>

        <div class="foo" id="enjoyRideDiv" v-if="showMoreEnjoy">

            <div class="test">
                <strong> 1. Go to rent a bike</strong> <br />
                This form will contain the following steps to gather all the information which is required to
                use our bikes. Your data will only be used for the renting process. If you need help, feel free
                to watch our “Book a reservation” video, to get a step by step instruction on how to reserve a
                bike. <br />
            </div>
            <div class="test">
                <strong> 2. Select Date and Time</strong> <br />
                The first thing you need to do, is to select the specific day and time at which you want to rent
                on of our bikes. If you know, that you won’t be able to make it, you can cancel your
                reservation. It’s important to make sure, that you will pick up your bike within the first 15
                minutes or else we must charge you a fee of 2 euro for our services. <br />
            </div>
            <div class="test">
                <strong> 3. Choose your bike</strong> <br />
                In this step you can select the bike you actually want to rent. You will see an overview of all
                the bikes, which are available during the day and time you’ve selected before. If you need help
                deciding which bike might be the best for you, don’t hesitate to contact our support. <br />
            </div>
            <div class="test">
                <strong> 4. Your personal Data</strong> <br />
                In the last step of your reservation, you need to add your personal information such as name,
                address and payment method. After you added all the required informations, the reservation
                process is finished. You will receive a mail with all the informations, regarding your
                reservation plus the QR Code you will need to pick up the bike.
            </div>
        </div>

        <div class="foo" id="doneDiv" v-if="showMoreReturn">

            <div class="test">
                <strong> 1. Go to rent a bike</strong> <br />
                This form will contain the following steps to gather all the information which is required to
                use our bikes. Your data will only be used for the renting process. If you need help, feel free
                to watch our “Book a reservation” video, to get a step by step instruction on how to reserve a
                bike. <br />
            </div>
            <div class="test">
                <strong> 2. Select Date and Time</strong> <br />
                The first thing you need to do, is to select the specific day and time at which you want to rent
                on of our bikes. If you know, that you won’t be able to make it, you can cancel your
                reservation. It’s important to make sure, that you will pick up your bike within the first 15
                minutes or else we must charge you a fee of 2 euro for our services. <br />
            </div>
            <div class="test">
                <strong> 3. Choose your bike</strong> <br />
                In this step you can select the bike you actually want to rent. You will see an overview of all
                the bikes, which are available during the day and time you’ve selected before. If you need help
                deciding which bike might be the best for you, don’t hesitate to contact our support. <br />
            </div>
            <div class="test">
                <strong> 4. Your personal Data</strong> <br />
                In the last step of your reservation, you need to add your personal information such as name,
                address and payment method. After you added all the required informations, the reservation
                process is finished. You will receive a mail with all the informations, regarding your
                reservation plus the QR Code you will need to pick up the bike.
            </div>
        </div>









    </section>
</template>

<style scoped>
.test {
    display: inline-block;
    padding: 20px;
}

.foo {
    display: flex;
    align-items: center;


}

.row {
    display: flex;
    flex-direction: row;
}

.howToRent .col-lg-3 {
    text-align: center;
    align-items: center;
}

.circle {
    border-radius: 50%;
}

.foldyDiv {
    display: inline-flexbox;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>



<script>

export default {
    data() {
        return {
            showMoreBook: false,
            showMorePick: false,
            showMoreEnjoy: false,
            showMoreReturn: false,
        };
    },
    methods: {
        logInDiv: function () {
           
        },
        buttonText(bool) {
             return bool ? "Show less" : "Show more";
        }
    },
    computed: {
    }
};

</script>