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
	var newNum = colBasis + Math.floor(Math.random() * 15) + 1;

	document.getElementById(currSquare).innerHTML = newNum;
}

/* 
	lines 3-12:
		We begin by making sure the Bingo card is valid. 
	
	line 16:
		colPlace array keeps track of, for each square, which column it's in.
		It's the numbers 0-4 repeated five times (minus the free space; notice that the digit 2 is used only 4 times.)
		
	lines 17,18:
		Calculate the column basis: the number stored in colPlace[thisSquare] multiplied by 15.
		The newNum variable still generates the random numbers, but instead of coming up with a number from 1-75,
		it calculates a random number from 1-15, and then adds that to the column basis.
		
		So if our random number is 7, it would be 7 in the B column, 22 in the I column, 37 in the N column, 52 in the G column, and 67 in the 0 column.
*/
