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
    var fn = document.getElementsByName("firstname").values;
    var ln = document.getElementsByName("lastname").values;
    var em = document.getElementsByName("email").values;
    var user = document.getElementsByName("username").values;
    var pass = document.getElementsByName("password").values;

    //broken

    firebase.database().ref('users/' + fn+"_"+ln).set({
        email: em,
        username: user,
        password: pass
    });

}