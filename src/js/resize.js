//attach listener on window resize and run it once to start

function resizePara(){
	var lim = 0.1*window.innerHeight; //pixel limit to allow
	var nLim = 50; //limit the number of iterations for text resizing

	//resize the paragraph font size so the para fills the screen height
	var para = document.getElementById('paraColumn');
	var fs = parseFloat(window.getComputedStyle(para, null).getPropertyValue('font-size'));
	var rect = para.getBoundingClientRect();
	var height = window.innerHeight - rect.top;
	var diff = height - rect.height;
	var nTrial = 0;
	var fac = 0.5;

	while ((Math.abs(diff) > lim || diff < 0) & nTrial < nLim){
		var mult = fac*(1. + nTrial/nLim);
		if (diff > 0){
			mult =  2. - mult;
		}
		para.style.fontSize = fs*mult + 'px';
		fs = parseFloat(window.getComputedStyle(para, null).getPropertyValue('font-size'));
		rect = para.getBoundingClientRect();
		diff = height - (rect.height + 0.005*window.innerWidth); //adding to account for of form?

		nTrial += 1
	}

}

function resizer(){

	//resize svg as needed
	params.svg
		.style('width',d3.select('#container').node().getBoundingClientRect().width - 20)
		.style('height',d3.select('#container').node().getBoundingClientRect().height);

	//redefine the clipping mask
	params.svg.select('#myClip').selectAll('rect').remove();
	defineSVGclip();

	//remove arrows and add them back
	d3.selectAll('.arrow').remove();
	addArrows();

	//remove all lines and add them back
	d3.selectAll('.line').remove();
	plotAnswers();

	//resize the paragraph
	resizePara();

	//resize the form
	var el = document.getElementById("form");
	el.height = window.innerHeight - el.getBoundingClientRect().top - 0.02*window.innerWidth; //not sure what to subtract here (or why it is needed!). I think this must be because of the margin, but I can't seem to get the browser to give me the current value (it always returns 0)
}