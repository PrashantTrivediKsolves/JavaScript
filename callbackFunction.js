// what is a callback function in javaScript

// JavaScript is a synchronus and single theaded language

// bloaking the man thread

// power of callbacks

// Deep about Event listeners


//Closures Demo with Event listeners


//Scope Demo with Event listeners

// Garbge Collection and removeEventListeners.....

setTimeout(function(){
    console.log("times");

},5000);

function x(y){
    console.log("x");
    y();
}
x(function y()
{
    console.log("y");
})




