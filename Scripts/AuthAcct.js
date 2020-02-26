
var ui = new firebaseui.auth.AuthUI(firebase.auth());

document.getElementById("start-button").onclick = function () {

    var passed = false;

    var promise = ui.start('#firebaseui-auth-container', {
        signInSuccessUrl: './main.html',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]

    });


}

