
 window.onload = function() {
     document.getElementById('display').innerHTML = parseInt(localStorage.getItem("counter"));
 }
 function increaseCounter() {
   /* 
    * not necessary to stringfy the value to save in local storage. 
    *
    *  var a = parseInt(localStorage.getItem('counter')) + 1;
    *  var b = a.toString();
    *  localStorage.setItem('counter', a.toString());
    */
    var a = parseInt(localStorage.getItem('counter')) + 1;
    // localStorage value is string.
    localStorage.setItem('counter', a);
    document.getElementById('display').innerHTML = parseInt(localStorage.getItem("counter"));
 }