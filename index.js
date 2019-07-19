
 window.onload = function() {
     document.getElementById('display').innerHTML = parseInt(localStorage.getItem("counter"));
 }
 function increaseCounter() {
     var a = parseInt(localStorage.getItem('counter')) + 1;
     var b = a.toString();
     localStorage.setItem('counter', a.toString());
    document.getElementById('display').innerHTML = parseInt(localStorage.getItem("counter"));
 }