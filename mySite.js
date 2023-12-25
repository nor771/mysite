document.addEventListener('DOMContentLoaded', function () {
    // Registration Form Event Listener
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var registrationUsername = document.getElementById('registrationUsername').value;
        localStorage.setItem('username', registrationUsername);
        alert('Registration successful!');
    });

    // Login Form Event Listener
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var loginUsername = document.getElementById('loginUsername').value;
        var storedUsername = localStorage.getItem('username');

        if (loginUsername === storedUsername) {
            alert('Login successful!');
        } else {
            alert('Username not found. Please register.');
        }
    });
});
