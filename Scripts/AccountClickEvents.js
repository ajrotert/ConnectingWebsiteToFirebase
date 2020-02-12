document.getElementById("user-button").onclick = function () {
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var em = document.getElementById("email").value;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (fn != "" && ln != "" && em != "" && user != "" && pass != "") {
        firebase.database().ref('users/' + user).set({
            email: em,
            firstname: fn,
            lastname: ln,
            password: pass
        });
       // window.location.href = "./main.html";
        // Loading new window does not add data to database
    }

    document.getElementById("user-form").reset();
}