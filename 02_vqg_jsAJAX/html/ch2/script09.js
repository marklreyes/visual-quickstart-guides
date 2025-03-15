window.onload = initAll;												//when the page loads, call the initAll() function

function initAll() {													//in this function we set the onclick handler for each of the buttons on the page
	document.getElementById("Lincoln").onclick = saySomething;			//because we set the id attribute along with the value attribute in the HTML, we're able to use getElementById() to set the event handler
	document.getElementById("Kennedy").onclick = saySomething;
	document.getElementById("Nixon").onclick = saySomething;
}

function saySomething() {												//this begins the saySomething() function
	switch(this.id) {													//the id of the 'this' object is used as the parameter to switch(). Its value will decide which of the below case statements get executed.
		case "Lincoln":													//if the user clicked Lincoln, we end up with this case block
			alert("Four score and seven years ago...");
			break;														//when this block is executed you want to get out of switch and not run the other blocks of code
		case "Kennedy":
			alert("Ask not what your country can do for you...");
			break;
		case "Nixon":
			alert("I am not a crook!");
			break;
		default:														//this is where we end up if our switch value didn't match any of the case values
	}
}

/*
	When you need more than two choices in a conditional test-then and else are not enough.
	While you can have nested levels of if, it's often simpler to use switch/case statement instead.
	
	This script returns one of three quotes as alert dialogs.
	
	A switch statement can be passed other values besides strings. You can use it with a numeric value or even have 
	it evaluate a mathematical result. If its result should be numeric, be sure that case statements match. Your case 
	statements would then need to check for numbers, not strings (i.e. 5 not "5")
*/
