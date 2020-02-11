document.getElementById("test-button").onclick = function () {
    firebase.database().ref('users/' + "{First_Name Last_Name}").set({
        email: "Email",
        username: "Username",
        password: "Password"
    });

}

document.getElementById("delete-button").onclick = function () {
    firebase.database().ref().remove();
}

document.getElementById("user-button").onclick = function () {
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var em = document.getElementById("email").value;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (fn != "" && ln != "" && em != "" && user != "" && pass != "")
    {
        firebase.database().ref('users/' + fn + "_" + ln).set({
            email: em,
            username: user,
            password: pass
        });
    }

    document.getElementById("user-form").reset();
}