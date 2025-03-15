window.onload = initForm;

function initForm() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].readOnly) {
			allTags[i].onfocus = function() {
				this.blur();
			}
		}
	}
}
/* THE ONFOCUS EVENT 
Show how to use the onfocus event to bump users right back out of this field, on the off chance they made it to where they shouldn't be.

lines 8 - 10:
	When the user attemps to enter this field, the focus (in this case the active field) will automatically be kicked right back out again.
	This happens because the onfocus event handler is set to call an anonymous function (one without a name) that does just one thing:
	call blur() on the current field, bouncing the user out.

*/
