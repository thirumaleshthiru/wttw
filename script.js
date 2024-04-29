document.addEventListener('DOMContentLoaded', function() {
    function onSubmit(event) {
        event.preventDefault();

        let usernameInput = document.getElementById('username');
        let passwordInput = document.getElementById('password');

        let username = usernameInput.value;
        let password = passwordInput.value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
            return;
        }

        if (username === "admin" && password === "necn@79") {
            window.location.href = './dashboard.html';
        } else {
            alert("Username or password is incorrect. Please try again.");
            passwordInput.value = "";
        }
    }

    let loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', onSubmit);
});


let submitbtn = document.querySelector("#dashboard-submit");
submitbtn.onclick = function(){
    window.location.href = './student.html'
}

let adminLogin = document.querySelector("#adminLogin")

adminLogin.onclick = function(){
    window.location.href = './login.html'
}

