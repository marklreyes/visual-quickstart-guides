window.onload = initAll;

function initAll() {
	for (var i=0; i<24; i++) {
		setSquare(i);												//passing a value of i into the setSquare() function
	}
}

function setSquare(thisSquare) {									//this defines the setSquare() function. it's being passed the current square number that we want to update.
	var currSquare = "square" + thisSquare;							//in order to make the getElementById() call later in the script clearer, we're creating and setting a new variable: currSquare.
	var newNum = Math.floor(Math.random() * 75) + 1;

	document.getElementById(currSquare).innerHTML = newNum;			//this line gets the element with name specified by currSquare and changes it to display newNum
}

/*
	line 9:
		When we pass the current square number in, it's the loop variable i.
		When the function receives it, it's the parameter thisSquare.
		setSquare() function is passed i, does stuff with that value, but doesn't actually see i itself.
		Inside the function, all it knows about is the thisSquare variable.
		
	line 10:
		currSquare is the current square we are working on.
		It takes the text string "square" and concatenates it with the thisSquare variable.
*/
	
	