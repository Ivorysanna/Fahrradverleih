function logInDiv() {
    var x = document.getElementById('logInDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('logInButton').value = "Cancel";
    } else {
        x.style.display = 'none';
        document.getElementById('logInButton').value = "Log In";
    }
}

function signUpDiv() {
    var x = document.getElementById('signUpDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('signUpButton').value = "Cancel";
    } else {
        x.style.display = 'none';
        document.getElementById('signUpButton').value = "Sign Up";
    }
}