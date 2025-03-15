window.onload = writeMessage;

function writeMessage() {
	document.getElementById("helloMessage").innerHTML = "Hello, world!";
}

/*
	The first part of this line, window.onload, is an event handler
	After the equals sign there is the name of a function
	When the window finishes loading, tell the writeMessage function to run
*/

