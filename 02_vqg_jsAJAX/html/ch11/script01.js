window.onload = initAll;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = addNode;
}

function addNode() {
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);
	
	return false;
}
/* ADDING NODES 

line 9:
	Create a new text node called newText using the createTextNode() method, which will contain whatever text was found in the textArea

line 11:
	Create a new element node using the createElement() method. While the node we're creating here is a paragraph tag, it could be anY
	HTML container (div, span, etc.). The name of the new element is newGraf.

line 12:
	In order to put the text in the new paragraph, we have to call appendChild(). That's a method of newGraf, which when passed newText
	puts the tet node in the paragraph.	

line 14:
	In order to add a new node into the body of our document, we need to figure out where the body is. The getElementsByTagName() method
	gives us ever body tag on our page. If our page is standards-compliant, there should only be one. The [0] property is that first
	body tag, and we store that in docBody.
	
line 15:
	Appending newGraf onto docBody (using appendChild() again) puts the user's text node onto the page.
	
TIP:
	* Why do all this when you could have used an assignment to innerHTML?
		- With the Adding Nodes approach you cannot make your page invalid.
				EX: Every <p> or <div> tag that's added is automatically closed.
		- With innerHTML, it's very easy to create tag soup-and once you do, your page's DOM becomes difficult to work with.
		  You can't read the contents of an element if it has a beginning but no ending tag, for instance.
*/		
