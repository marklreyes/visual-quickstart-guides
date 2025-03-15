window.onload = initAll;
var usedNums = new Array(76);					//to update an array on the fly

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
	var newNum = colBasis + getNewNum() + 1;

	if (!usedNums[newNum]) {
		usedNums[newNum] = true;
		document.getElementById(currSquare).innerHTML = newNum;
	}
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}

/*
	line 2: creating usedNums, a new array with 76 objects
			those objects can be anything - in this case, they're booleans
			
	line 21: if the newNum slot in the usedNum array is false (represented by the ! before the statement),
			 then we set it to true and write it out to the card.
			 If it's true, we don't do anything at all, leaving us with no duplicates, but possible blank spaces in our card.
			 
	TIPS: The array contains 76 values because we want to use the values of 1 to 75. If we initialized it to contain 75 items
	      the numbering would go from 0 to 74. 76 lets us use 1 through 75, and we'll just ignore 0.
*/
