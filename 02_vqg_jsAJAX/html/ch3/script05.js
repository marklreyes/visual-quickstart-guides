window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		for (var i=0; i<24; i++) {
			setSquare(i);
		}
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis = colPlace[thisSquare] * 15;
	var newNum = colBasis + getNewNum() + 1;										//this line is setting the newNum variable to our desired number, we've moved that random number generator into a function, getNewNum()

	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {																//this code calculates a random number between 0-14 and returns it. This function can be used anywhere a variable or a number can be used.
	return Math.floor(Math.random() * 15);
}

/*
	This makes the script more understandable by 
	breaking out some of the calculations in previous 
	examples into a function which returns the random 
	numbers for the cells on the Bingo card. Another 
	function then uses this result.
*/
