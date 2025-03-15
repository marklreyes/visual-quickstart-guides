window.onload = initAll;

function initAll() {
	var radioButtons = document.getElementsByTagName("input");
	
	for (var i=0; i<radioButtons.length; i++) {
		if (radioButtons[i].type == "radio") {
			radioButtons[i].onclick = chgChart;
		}
	}
	chgChart();
}

function chgChart() {
	var bChart = new Object();
	bChart.name = "Browser usage by year";
	bChart.years = new Array("1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008");
	bChart.fieldnames = new Array("Netscape","MSIE","Other");
	bChart.field1 = new Array(38.9,31.9,21.2,12.4,6.6,5.1,3,1,6,11,14);
	bChart.field2 = new Array(60.6,67.4,78.3,85.6,92.5,94.0,92,89,90,84,79);
	bChart.field3 = new Array(0.5,0.5,0.5,2.1,0.9,1.0,4,9,3,5,5);
	bChart.fields = new Array(bChart.field1,bChart.field2,bChart.field3);
	
	var jsChart = new Object();
	jsChart.name = "JavaScript usage by year";
	jsChart.years = new Array("1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008");
	jsChart.fieldnames = new Array("1.2 or later","1.0 - 1.1","No JavaScript");
	jsChart.field1 = new Array(63.4,66.5,78.4,80.2,88.1,89.1,94,89,96,95,94);
	jsChart.field2 = new Array(18.7,12.6,2.8,0.8,0.3,0.3,0,0,0,0,0);
	jsChart.field3 = new Array(17.9,21.0,18.8,19.0,11.6,10.6,4,9,3,4,5);
	jsChart.fields = new Array(jsChart.field1,jsChart.field2,jsChart.field3);
	
	var radioButtons = document.getElementsByTagName("input");
	var currDirection = getButton("direction");
	var imgSrc = "images/" + getButton("color");
	
	if (getButton("type")=="browser") {	
		var thisChart = bChart;
	}
	else {
		var thisChart = jsChart;
	}
	
	var chartBody = "<h2>"+thisChart.name+"</h2><table>";
	
	for (var i=0; i<thisChart.years.length; i++) {
		if (currDirection=="horizontal") {
			chartBody += "<tr><th rowspan='4' class='horiz'>"+thisChart.years[i];
			chartBody += "</th><td colspan='2'></td></tr>";
			for (var j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<tr><td class='horiz'>"+thisChart.fieldnames[j];
				chartBody += "</td><td><img src='"+imgSrc+"' height='15' width='";
				chartBody += thisChart.fields[j][i]*3 + "' alt='horiz bar' />";
				chartBody += "&nbsp;&nbsp;"+thisChart.fields[j][i]+"</td></tr>";
			}
		}
		else {
			chartBody += "<tr><th rowspan='2' class='vert'>"+thisChart.years[i]+"</th>";
			for (var j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<td class='vert'><img src='" + imgSrc;
				chartBody += "' alt='vert bar' hspace='10' width='15' height='";
				chartBody += thisChart.fields[j][i]*3 +"' /></td>";
			}
			chartBody += "</tr><tr>";
			for (j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<td class='vert'>" + thisChart.fields[j][i] + "<br />";
				chartBody += thisChart.fieldnames[j] + "<br /><br /></td>";
			}
			chartBody += "</tr>";
		}
	}

	chartBody += "</table>";
	document.getElementById("chartArea").innerHTML = chartBody;

	function getButton(buttonSet) {
		for (var i=0; i<radioButtons.length; i++) {
			if (radioButtons[i].name == buttonSet && radioButtons[i].checked) {
				return radioButtons[i].value;
			}
		}
		return -1;
	}
}

/* A BAR GRAPH GENERATOR 
	
Lines 4-11:
	initAll() function starts. Get all the radio buttons and loop through them, setting each to call chgChart() when they're clicked. When
	that's done, we call chgChart() manually to display the default view of the page.
	
Line 15:
	Inside chgChart() we create our first custom object, bChart (short for browser chart).
	
Lines 16-21:
	The properties for a custom object are created and initialized simply by assigning values to them. Here, we set up the name, years,
	fieldnames, field1, field2, and field3 properties of bChart. Those fields are the name of the chart, the years covered by the chart,
	the three labels for the chart values, and the sets of values for each year and each label.
	
	Note, that we're not using the var keyword before each of these; that's because they aren't new variables. Instead, they're new
	properties that we're adding to an existing variable (albeit one we just created).
	
Line 22:
	Create the 'fields' property. It's actually an array of arrays and will make it easier to get at the data inside.
	
Lines 24-31:
	Create the jsChart object and assign its properties. For the JavaScript chart, we again have the years, but this time we're displaying
	what percentage of browsers had which version of JavaScript.
	
Lines 33-35:
	Before we draw our chart, we need to know which radio buttons have been selected. The radioButtons array contains all the input elements
	on the page, and once we've got that, we can call the getButton() function. The getButton() function is passed a string (the name of the
	radio set), and it returns a string (the current value of that set).

Lines 37-42:
	When the user clicks any of the radio buttons to change the chart, the chgChart() function is called. When that happens, if the browser
	chart is the one that's wanted, the entire bChart object gets stored in 'thisChart'. Otherwise, it's the JavaScript chart for us, so 
	'thisChart' is assigned the jsChart object.
	
Line 44:
	Here's the start of the actual drawing code. First, we write out the name of the chart (stored in thisChart.name and displayed inside an
	<h2> tag), and then we open up a <table> tag. From here on out, we're adding to the chartBody variable, and when we're done, we'll write
	it out to the page.
	
Line 46:
	Here's the first of two loops that we'll be going through (remember that pseudo two-dimensional array from step line 22?). This external
	loop uses i as the index variable, and how many times it loops around is based on the number of years covered by the chart.

Line 47:
	If the user wants to see the horizontal version of the chart run the following code.
	
Lines 48-49:
	The first row of each horizontal chart contains the ith year label.
	
Line 50:
	Here's the horizontal version of the second of the two loops. This internal loop uses j as its index, and how many times it loops around
	is based on the number of fieldbames that we stored.
	
Line 51:
	The detail rw of the table is started here, and we first write out the value label (either the browser type or the JavaScript version),
	which is stored in the jth element of fieldnames.
	
Lines 52-53:
	Next, we close the previous cell and calculate the bar image. The color of the bar is based on imgSrc, the height is always 15 pixels,
	and the width is the value of the jth by the ith index on the array, multiplied by 3. For example, if imgSrc is lilBlue.gif and
	thisChart.fields[3][4] is 30, this would write out an image tag to draw a blue rectangle, 15 pixels high by 90 pixels wide.

Line 54:
	A couple of blank characters (the &nbsp;) are written out, followed by the actual data value to the right of the bar to finish off this
	row. This is the end of the interior loop for the horizontal section of the code.
	
Line 58:
	If the user wants to see the chart drawn vertically, we start by writing the initial row of the chart. The vertical version of the chart
	is somewhat more complex and requires two internal (but separate) j loops. Here we write out the label for the chart.
	
Line 59:
	Here's the first internal loop. This one writes out each vertical bar on the graph in a row.
	
Lines 60-62:
	And here's the image tag being written on the fly. This time, the width is fixed at 15 pixels, but the height varies based on the value
	found in the array of arrays. For example, if imgSrc is lilGreen.gif and thisChart.fields[3][4] is 30, this would write out an image
	tag to draw a green rectangle, 90 pixels high by 15 pixels wide.
	
Line 64:
	When all the bars on the graph have been written out, close that table row and start the next row.

Line 65:
	Here's the second internal loop. This one writes the value of each data point, under its corresponding bar, followed by the y-axis label.
	
Line 66-67:
	Here's the information being written out for each bar. The variable thisChart.fields[j][i] is the value of that bar, and 
	thisChart.fieldnames[j] is the data label for that bar.
	
Line 69:
	After the last internal loop is complete, we need to write out a final end row tag.
	
Lines 73-74:
	At this point, both the horizontal and vertical sections are done, and the external loop has completed, so we weite out the final table
	tag to end our scropt and then put the entire thing into the innerHTML property of the chartArea section of the page.
	
TIPS:
	This code uses three images: lilRed.gif, lilBlue.gif, and lilGreen.gif. Each of these is a single-pixel GIF in its corresponding color.
	HTML allows you to set the height and width regardless of the image's actual physical dimensions, so a single pixel allows us to create
	bars of any size and shape.
	
	This chart can be changed to graph almost anything simply by changing the array values in steps 3 and 5. No matter what you set the arrays
	to, you shouldn't have to change the loops that create the graphs.
	
	The statistics on these chart are based on those found at The Counter's Global Statistics, www.thecounter.com/stats/
	
*/