window.onload = initAll;
var usedNums = new Array(76);

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
	var newNum;

	do {
		newNum = colBasis + getNewNum() + 1;
	}
	while (usedNums[newNum]);

	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}

/* 
	do/while loop: you want to do something while some value us true 
	
	This script writes out each row of numbers as always but this time it checks first to see if a number
	has been used already before putting it in a cell. If it has the script generates a new random number
	and repeats the process until it fids one that's unique.
	
	line 19: we're going to be setting it multiple times, we create newNum just once before we get into the loop
	
	line 21: the code inside the do block will always be executed at least once.
	
	line 22: this line inside the loop sets the newNum variable to our desired number
	
	line 24: the while check causes the do block of code to repeat until the check evaluates to false
	         in this case we're checking newNum against the usedNums array, to see if the newNum has already been used.
	         if it has, control is passed back to the top of the do block and the whole process starts again.
	         eventually, we'll find a number that hasn't been used.
	         when we do, we drop out of the loop, set the usedNums item to true, and write it out to the card.
	         
	TIP: common use for a do/while loop would be to strip blanks or invalid characaters off data entered by a user.
		 but remember, the do block of code always gets executed at least once, whether the while check evaluates to true/false.
*/
