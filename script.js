var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")"; 

		css.textContent = body.style.background + ";";
}

function randomColor() {
	var letters = '0123456789ABCDEF';
  	var colorOne = '#';
  	for (var i = 0; i < 6; i++) {
    	colorOne += letters[Math.floor(Math.random() * 16)];
  	}
  	color1.value = colorOne;

  	var letters = '0123456789ABCDEF';
  	var colorTwo = '#';
  	for (var i = 0; i < 6; i++) {
    	colorTwo += letters[Math.floor(Math.random() * 16)];
  	}
  	color2.value = colorTwo;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);

randomButton.addEventListener("click", randomColor);
