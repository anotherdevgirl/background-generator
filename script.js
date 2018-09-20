//Another way to code this would be adding the  onclick or oninout within the input in the html instead of using the addEventListener directly on the js file, which is a good way as we should keep things seperated:

var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
body.style.background =
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";

CSS.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
    



    
/*
//Our DRY -refactored code:
var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
body.style.background =
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
    
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
    



/*

// Let's use function to clean up this code using the code above and turn it to DRY:
var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", function(){
body.style.background =
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
    
})

color2.addEventListener("input", function(){
body.style.background =
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
    
})

*/