window.onload = initAll;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = addNode;
	document.getElementById("deleteNode").onclick = delNode;
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

function delNode() {
	var allGrafs = document.getElementsByTagName("p");
	
	if (allGrafs.length > 1) {
		var lastGraf = allGrafs.item(allGrafs.length-1);
		var docBody = document.getElementsByTagName("body")[0];
		docBody.removeChild(lastGraf);
	}
	else {
		alert("Nothing to remove!");
	}

	return false;
}
/* DELETING NODES 

line 22:
	This line uses the getElementByTagName method to collect all the paragraph tags in our page and store them in the allGrafs array.

line 24:
	Check first that the allGrafs array has a length greater than one. We don't want to try to delete something that doesn't exist,
	and the length will always be at least one.

line 25:
	If there are paragraphs, get the last one on the page by subtracing one from length and using that as our index array. Remember,
	that length is one-relative while arrays are zero-relative, so subtracing one from the length gives us the last paragraph
	on the page.
	
lines 26-27:
	In order to modify the document, we need to get the contents of the body. Once we've got that, it's simply a matter of calling the
	docBody.removeChild() method and passing it lastGraf, which tells JavaScript which paragraph we want to delete. Our page should
	immediately show one less paragraph.
	
TIP:
	* Remember that you can delete element nodes other than paragraphs. To do this, you need to change the script so that
	  getElementsByTagName() is passed something other than a p.

*/
