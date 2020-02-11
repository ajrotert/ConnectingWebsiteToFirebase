            // Your web app's Firebase configuration

var firebaseConfig = {
apiKey: "AIzaSyAm7Mmd1nnzDxnsiG5mmMDvF1ACz3Pp3UA",
authDomain: "connectwebpagetofirebase.firebaseapp.com",
databaseURL: "https://connectwebpagetofirebase.firebaseio.com",
projectId: "connectwebpagetofirebase",
storageBucket: "connectwebpagetofirebase.appspot.com",
messagingSenderId: "169507978975",
appId: "1:169507978975:web:dd12cf0390b8188c0a336a",
measurementId: "G-VM4FQ6EBQV"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();


//Data Object Change Listener

const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref();


dbRefObject.on('value', snap => {

    console.log(snap.val());
    preObject.innerText = JSON.stringify(snap.val(), null, 3);

}, function (error) {
    // The fetch failed.

    console.error(error);
});