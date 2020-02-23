document.getElementById("start-button").onclick = function () {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    //May be used for some kind of authentication later on
    var passed = false;

    if (user != "" && pass != "") {
        user_info.username = user;
        user_info.password = pass;
        sessionStorage.setItem("USER-NAME", user_info.username);
        sessionStorage.setItem("USER-PASS", user_info.password);

        passed = true;
        const promise = firebase.database().ref('Users/' + user_info.username).set({
            username: user_info.username,
            password: user_info.password
        });
        promise.then(() => {
            setTimeout(1000);
            window.location.href = "./main.html";
        });

    }
    if (!passed)
        alert("Please check the username and password fields for valid information.")

    document.getElementById("user-form").reset();

}

var today = new Date();

var user_info = {
    username: "Guest User",
    password: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
};
