var names = document.getElementById("NAME");
var passes = document.getElementById("PASS");

names.innerHTML = sessionStorage.getItem("USER-NAME");
passes.innerHTML = sessionStorage.getItem("USER-PASS");