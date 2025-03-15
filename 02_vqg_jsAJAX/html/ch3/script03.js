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
	var newNum = Math.floor(Math.random() * 75) + 1;

	document.getElementById(currSquare).innerHTML = newNum;
}


/*
	line 5:
		This line begins the conditional. 
		If the object inside the parantheses exists, the test returns true, and the rest of this block in the initAll() function runs.
		
	line 9:
		If the test in step 1 returns false, this line pops up an alert, and the script ends.
*/