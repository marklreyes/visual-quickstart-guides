window.onload = initAll;

function initAll() {	
	var ans = prompt("Enter a number","");								//prompt, which stores its returned value in the ans variable for later use. We want the user to enter a number. If done, square root shows.
	try {																//if they didn't enter a number, use the try command. Inside its block of code, we'll cehck to see if the entry was valid.
		if (!ans || isNaN(ans) || ans<0) {								//see line 19
			throw new Error("Not a valid number");
		}
		alert("The square root of " + ans + " is " + Math.sqrt(ans));
	}
	catch (errMsg) {													//see line 31
		alert(errMsg.message);
	}
}

/* 
	Use JavaScript's try/throw/catch commands to produce a friendly, useful error message. 
	
	There are 3 things we care about:
		1 - no entry at all
		2 - the user entered something but was non-numeric
		3 - the entry was numeric but a negative number
		
			If ans! is true, then the user didn't enter anything.
			The built-in isNaN() method checks to see if the parameter it was passed is "not a number". If isNaN() returns true, then we know that something invalid was entered.
			If ans is less than 0, it's a negative number.
			In any of those cases we want to throw an error - in this case it is, "Not a valid number"
			
			Once the error is thrown, JavaScript jumps out of the try block and looks for a corresponding catch statement. Line 9 is skipped over. Line 10 closes the try block.
			
			The error is passed in as a parameter, and the message part of the answer is displayed. If no error was thrown, the code inside the catch will never be executed.
		
	TIP:
		Optional part would be the finally{} block, which would go after the catch and would contain code that should be executed whether the try threw an error or not.
*/