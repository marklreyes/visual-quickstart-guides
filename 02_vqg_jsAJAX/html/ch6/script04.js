window.onload = initWindows;

function initWindows() {
	if (document.getElementById("childField")) {
		document.getElementById("childField").onchange = updateParent;
	}
	else {
		newWindow = window.open("child.html","newWin","status=yes,width=300,height=300");
	}
}

function updateParent() {
	opener.document.getElementById("msgLine").value = "Hello " + this.value + "!";
}
/* 
UPDATING ONE WINDOW FROM ANOTHER 

line 1:
	When the window loads, call the initWindows() function
	
lines 4 - 5:
	The script is called by both HTML pages (parent and child pages) but it needs to do different thing for each file.
	The way it tells which one it's on is to check for the existence of the childField object, which only exists in the child window.
	If we're there, and the user changes the object, then we call the updateParent() function.

lines 7 - 9:
	If the childField object doesn't exist, it's time to open the child window, using child.html file
	The rest of the line specifies the child window's parameters.

line 12:
	Create the updateParent() function
	
line 13:
	This line introduces the opener property, which is how JavaScript refrences back to the parent document that opened the child window.
	This line tells the opener document (that is the parent) window to find the element named msgLine and set its value 
	to the word "Hello" and the contents of this.value, ending with an exclamation point.

TIPS:
	-	Forms, fields, and how to scrip tthem are covered in depth in Ch.7, Form Handling
	
	-	In script04.html, we've added the readonly="readonly" attrinute to the parent window's msgLine field.
		It just makes it clear that visitors to your site can't edit that themselves; it can only be set elsewhere.
	
*/