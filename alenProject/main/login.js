function checkLogin() {
    let username = document.getElementById('username');
    let userEmail = username.value;
    let password = document.getElementById('password');
    let userPass = password.value;

    if (userEmail === 'login' && userPass === 'password') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorText').innerHTML =
            'Invalid username or password.';
    }
}
