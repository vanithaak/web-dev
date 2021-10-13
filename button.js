// var b = document.querySelector("body").addEventListener("click", function() {
// 	this.style.background = "purple";
// wronggggggggggggg});

// var button = document.querySelector("button");
// var isPurple = false;
// button.addEventListener("click", function() {
// 	if(isPurple) {
// 		document.body.style.background = "white";
// 	}	
// 	else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });

var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function() {
	document.body.classList.toggle("purple");	
});