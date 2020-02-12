document.getElementById("start-button").onclick = function () {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("name").value;

    //May be used for some kind of authentication later on

    var passed = false;


    if (user != "" && pass != "") {
        user_info.username = user;
        user_info.pass = pass;
        passed = true;
    }

    if (passed) {

        window.location.href = "./main.html";
    }

    document.getElementById("user-form").reset();

}

var today = new Date();
var time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var user_info = {
    username: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    name: "Guest User"
};
