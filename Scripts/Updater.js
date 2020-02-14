//Data Object Change Listener


const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref();


dbRefObject.on('value', snap => {

    var val = snap.val();
    var str = JSON.stringify(val, null, 3)
    if (str != "null") {
        //Remove first and last brackets from string 
        str = str.substr(1, str.length - 5);
    }
    else {
        str = "Database is empty."
    }
    console.log(str);

    preObject.innerHTML = str;

}, function (error) {
    // The fetch failed.

    console.error(error);
});