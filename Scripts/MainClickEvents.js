document.getElementById("test-button").onclick = function () {

    var today = new Date();
    var time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    firebase.database().ref('users/' + time).set({
        email: "null",
        firstname: "null",
        lastname: "null",
        password: "null"
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
        firebase.database().ref('users/' + user).set({
            email: em,
            firstname: fn,
            lastname: ln,
            password: pass
        });
    }

    document.getElementById("user-form").reset();

}

