const colors = fetch('./modules/shuffleAndSort/squareColors.json')
	.then(response => response.json());

export default await colors;