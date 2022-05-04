function show(x) {
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('showButton').value = "Show less";
      } else {
        x.style.display = 'none';
        document.getElementById('showButton').value = "Show more";
      }
}

function showExplainReservationDiv() {
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle
    var x = document.getElementById('bookResDiv');
    show(x);
}

function pickUpDiv() {
    var x = document.getElementById('pickUpDiv');
    show(x);
}

function enjoyRideDiv() {
    var x = document.getElementById('enjoyRideDiv');
    show(x);
}

function doneDiv() {
    var x = document.getElementById('doneDiv');
    show(x);
}
