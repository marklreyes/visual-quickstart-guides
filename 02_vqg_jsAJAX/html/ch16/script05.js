$(document).ready(function() {
	$("tr").mouseover(function() {
		$(this).addClass("over");
	});
	$("tr").mouseout(function() {
		$(this).removeClass("over");
	});
	$("#theTable").tablesorter({
		sortList:[[1,0]],
		cssAsc: "sortUp",
		cssDesc: "sortDown",
		widgets: ["zebra"]
	});
});

/* SORTING TABLES 

Line 8:
	Telling jQuery that we want users to be able to sort the contents of the table. That's done by this step and the next. We select the 
	element with the id of 'theTable' (as mentioned in step 1), and run the tablesorter() method on it.		
	
Lines 9-12:
		- sortList:[[1,0]]
			We want the table to be sorted in a particular way when the page first loads, and here's where that's defined. Count your 
			columns starting with zero; the column you want is the first parameter. Here we want our table to be sorted by the second
			column, so we pass a 1 (remember, JavaScript is zero-relative). The second parameter is which way we want to sort, 0 is up,
			1 is down.
		- cssAsc: "sortUp"
			When the user chooses to sort up, we want a new CSS rule to apply to this th cell. This will automatically assign a class of
			"sortUp" when that's what the user wants, which will then show an upwards-pointing arrow to the right of the label.
		- cssDesc: "sortDown"
			We want the user to know when they're sorting downwards instead, and clicking on the th cell again changes the class to "sortDown",
			which displays a downwards-pointing arrow the right of the label. Because you might want to sort on any column, not just the one
			the web developer decided to make the default, all a user has to do is click on a different th cell, and the results immediately
			change without you having to add any more code.
		- widgets: ["zebra"]
			With tablesorter(), zebra-striping is a thrown-in freebie widget. Just say that you want to add the zebra widget, and you've got
			stripes.
*/
