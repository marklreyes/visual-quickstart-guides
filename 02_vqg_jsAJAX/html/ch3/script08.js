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

/* 
	The script still runs when the page loads but also allow the user to click the link at the bottom of 
	the page to rerun the scrip that generates the Bingo card entirely on their browser, without needing to reload the page from the server.

	line 6: set the link on the HTML page (the one with the ID of reload) to call
			anotherCard() when it's clicked
	
	line 14: all the calculations that used to be in anotherCard() have been moved
			 to newCard() function
			 
	line 39: anotherCard() function is called when link is clicked.
			 It does 3 things:
			 	1 - sets all the items in the usedNums[] array to false (so we can reuse the numbers again)
			 	2 - calls the newCard() function (generating another card)
			 	3 - returns a value of false so that the browser won't try to reload the page in the href in the link
	
	TIP: AJAX, using JavaScript to reload part of a page instead of hitting the server and requesting an entirely new page.
*/