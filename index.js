
 window.onload = function() {
     document.getElementById('display').innerHTML = parseInt(localStorage.getItem("counter"));
 }
 function increaseCounter() {
    var a = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', a);
    document.getElementById('display').innerHTML = parseInt(localStorage.getItem("counter"));
 }