window.onload = initAll;												//this line calls the initAll() function when the window finishes loading

function initAll() {													//this line begins the function
	for (var i=0; i<24; i++) {											//this line begins the loop
		var newNum = Math.floor(Math.random() * 75) + 1;				//inside the loop we create a new variable, newNum, and fill it with the result of the calculation on the right side of the equals sign

		document.getElementById("square" + i).innerHTML = newNum;		//this is where we write into the table the value of the random number we got
	}
}


/*
	line 4:
		The loop will repeat 24 times and the code inside the loop will execute 24 times.
		On the first go-through i will be 0
		On the last go-through i will be 23
		
	line 5:
		The built-in JavaScript command Math.radnom() gives us a number between 0 and 1
		Multiplying Math.random() by the maximum value gives us a result between 0 and one less than the max value.
		The floor of that result gives us the integer portion, an integer between 0 (and one less than the max value).
		Add one, and we have a number between 1 and our maximum value.
		
	line 7:
		Get the element by the id of square with the current value of i concatenated to it.erst
*/
