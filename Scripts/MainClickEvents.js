document.getElementById("test-button").onclick = function () {

    var today = new Date();
    var id = Math.floor((Math.random() * 10000000) + 1);
    var title = id+ "::" + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var message = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    firebase.database().ref('Content/' + title).set({
        message: message
    });

}

document.getElementById("delete-button").onclick = function () {
    firebase.database().ref('Content/').remove();
}

document.getElementById("sub-button").onclick = function () {
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;

    if (title != "" && message != "")
    {
        firebase.database().ref('Content/' + title).set({
            message: message
        });
    }

    document.getElementById("user-form").reset();

}

