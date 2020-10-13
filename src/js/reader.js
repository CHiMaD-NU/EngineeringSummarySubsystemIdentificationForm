//I will work with a static csv file for the answers
function loadAnswers() {
	Promise.all([
		d3.csv('src/data/answers.csv'),
		//d3.csv('src/data/responses.csv'),
	]).then(function(d) {
		params.answers = d[0];
		plotAnswers();
		resizer();
		//params.responses = d[1];
		//plotResponses();
	})
	.catch(function(error){
		console.log('ERROR:', error)
	})
}
