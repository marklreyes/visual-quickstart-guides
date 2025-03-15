var ans = prompt("Are you sure you want to do that?","");		//declaring a variable, prompt method is past two bits of information (parameters) - the question for the user, and the default answer
if (ans) {														//this conditional uses the variable that we just set
	alert("You said " + ans);
}
else {															//if ans is null b/c the user didn't enter anything or clicked the Cancel button in the prompt dialog, then the else block of the condition is run.
	alert("You refused to answer");
}

/*
This script allows you to ask a question (with a default answer)
and receive the reply in turn.

It returns the user's response or null.
	Null occurs when:
		the user hits cancel
		when there is no default
		the user hits OK
		when the user clears the default answer and hits OK

If ans exists (if the user typed in a response) then the script puts up an alert that says, "You said" and concatenates the value of ans.
If ans is null b/c the user didn't enter anything or clicked the Cancel button in the prompt dialog, then the else block of the condition is run.

Using var does two things:
	1 - Tells JavaScript to create a variable (set some space aside in memory for this new object)
	2 - Defines the scope of the variable, where JavaScript needs to know about this particular object.
	
		If a variable is created inside a function, then other functions don't have access to it - local.
		If a variable is created outside any function, every function has access to it - global.
		In this script we're creating the ans global variable.
*/
