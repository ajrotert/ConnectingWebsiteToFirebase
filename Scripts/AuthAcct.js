document.getElementById("login-button").onclick = function () {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    /*if (user != "" && pass != "") {
        firebase.database().ref('users/' + user).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // ...
        });
    }*/
    var passed = true;

    if (passed) {
        window.location.href = "./main.html";
    }

    document.getElementById("user-form").reset();

}
document.getElementById("create-button").onclick = function () {
    window.location.href = "./CreateAccount.html";
}