window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function newCard() {
	for (var i=0; i<24; i++) {
		setSquare(i);
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
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}

function anotherCard() {
	for (var i=1; i<usedNums.length; i++) {
		usedNums[i] = false;
	}

	newCard();
	return false;
}

function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}
	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}
	
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}

/* 
	Check to see if the squares form a winning pattern.
	
	line 66: checkWin(), anytime the user toggles a square, it's possible that the winning status has changed, 
			 so here's a call to checkWin() at the end of toggleColor().
			 
	lines 67-69: three new variables are created at the beginning of checkWin(),
				 1 - winningOption, which stores which of the possible winning options the user has hit (if any)
				 2 - setSquares, which stores which squares have been clicked
				 3 - winners, an array of numbers, each of which is the encoded value of a possible winning line.

	lines 71-73: for each square on the card, we need to check to see whether or not its number has already been called.
				 use the square's class attribute as a flag - if it's empty, then it hasn't been clicked. If there is
				 a class attribute, do the following lines, 74-75.
				
	lines 74-75: first line sets class attribute to pickedBG
				 second line uses bitwise arithmetic to set setSquares to a number based on each possible state of the card
				 the single bar (|) does a bitwise 'or' of two values:
				 	1 - setSquares 
				 	2 - 2toThei, which is the result of Math.pow(2,i) - that is 2toThe0, 2toThe1, 2toThe2, and so on
				 	
				 	Or'ing each of these numbers together results in a unique variable storing which of the 16-some million possible states wer're in
				 	
	lines 79-83: now that we know just what state the card is currently in, we want to know if it's a winning state
				 in a common Bingo game, there are 12 winning states, and this section compares our card's current state to each.
				 
				 do a bitwise 'and' between each winning state and the current state, which results in 
				 a new state that only has true values for each square that is in both of the two.
				 
				 comparing that back to the same winning state allows us to see if we've fully hit this pattern - the result 
				 will have no hits outside the winning state and so long as everything found in the winning pattern is also in 
				 the current pattern, we've got ourselves a winner. 
				 
				 in that case, set winningOption to i, the pattern we matched.
				 
	lines 85-93: if winningOption is a number grater than -1, we've got a winner.
				 in that case, we want to loop through each square and check to see if it's found in the winning pattern.
				 if it is, set the class attribute to winningBG, and we're done.
				 
	TIPS: Again, just setting the class attribute of the winning squares to match a particular CSS style is enough to change the card's appearance.
	
		  There are a number of different Bingo games, each with different winning patterns. By modifying the single line of code that initializes 
		  the winners array, your script can fit any result someone might want.
		  
		  Why conditionals use: && and || (for 'and' and 'or'): the single version of thsoe operators tells JavaScript that you're doing binary math, not decimal math.

*/