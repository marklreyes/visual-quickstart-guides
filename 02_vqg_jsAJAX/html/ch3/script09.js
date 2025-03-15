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
}

/* 
	Since our card can be used and re-used, ensure we start off on a clean slate.
	For every square that's set in setSquare() were going to,
	
	line 33: set the class attribute to an empty string, ""
	line 34: use the mousedown event handler to call the new toggleColor() function
	
	line 50: the user can now click any of the squares on the card, and that square's background
			 will change color to show that the number was called
			 
	line 51-56: figure out which square was clicked. Two ways to do this,
				1 - IE WAY
					need to look at the event property window object, 
					and then at its srcElement property
				
				2 - HOW EVERY OTHER BROWSER HANDLES EVENT
				    if a value called evt was passed into this function, 
				    we can look at its target
				    
				Either way, we end up with the thisSquare object, which we can then examine and modify.
				
	line 57-62: check to see if the class attribute of the clicked square has value.
				If it doesn't, we want to give it one: pickedBG, named because the background 
				of the square shows that the number has been picked.
				
	TIP: Instead of changing the class attribute on the square, we could change its style attribute,
	 	 and then we wouldn't have to worry about the CSS file. 
	 	 
	 	 That's the wrong approach though b/c we're leveraging the CSS file, it's simple to change 
	 	 the page's visual appearance w/o having to touch its behavior.

*/
