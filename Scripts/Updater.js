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