$(document).ready(function() {
	$("tr").mouseover(function() {
		$(this).addClass("over");
	});
	$("tr").mouseout(function() {
		$(this).removeClass("over");
	});
	$("tr:even").addClass("even");
});

/* STRIPPING TABLES 

Lines 2-4:
	This section of code acts as a rollover: whenever the mouse is over a row, the mouseover for that tr is triggered. That tells jQuery 
	to add a class of "over" to that row, and our CSS tells the browser that it should now display that row in a different color.	

Lines 5-7:
	Here's where that's turned off again: when the mouse moves off the row, its mouseout is triggered, and the class attribute of "over" is
	removed.
	
Line 8:
	We can tell it to just set all even rows to have a class attribute of "even". And because our CSS has a rule that applies to tr.even, every 
	other row is automatically colored, without us ever having to touch a bit of HTML.
	
TIP:
	It's worth pointing out that no special jQuery routines were needed to create this functionality. The only script that was brought in was
	the always-required jquery.js	
*/