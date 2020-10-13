//this file contains any calls that are necessary upon loading the browser window

//attach listener on window resize
window.addEventListener("resize", resizer);

defineParams();

//reset the colors based on the input from params (in case this eventually is read in from a file
Object.keys(params.boxes).forEach(function(c, i){
	document.documentElement.style.setProperty('--'+c+'-color',params.boxes[c].color);
});

// populateBoxes2();
initBoxes();

//these functions will both call the line plotter
//this will load the answers
loadAnswers();



