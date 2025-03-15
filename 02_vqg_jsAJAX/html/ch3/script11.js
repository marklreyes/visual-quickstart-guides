var buzzwords = new Array ("Aggregate",	//initialize string array
	"Ajax",
	"API",
	"Bandwidth",
	"Beta",
	"Bleeding edge",
	"Convergence",
	"Design pattern",
	"Disruptive",
	"DRM",
	"Enterprise",
	"Facilitate",
	"Folksonomy",
	"Framework",
	"Impact",
	"Innovate",
	"Long tail",
	"Mashup",
	"Microformats",
	"Mobile",
	"Monetize",
	"Open social",
	"Paradigm",
	"Podcast",
	"Proactive",
	"Rails",
	"Scalable",
	"Social bookmarks",
	"Social graph",
	"Social software",
	"Spam",
	"Synergy",
	"Tagging",
	"Tipping point",
	"Truthiness",
	"User-generated",
	"Vlog",
	"Webinar",
	"Wiki",
	"Workflow"
);

var usedWords = new Array(buzzwords.length); //initialize the usedWords array of Booleans
window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function newCard() {
	for (var i=0; i<24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	do { // making sure that we're getting an as-yet-unused word, marking it as used, and then writing it into the square, lines 63-70
		var randomWord = Math.floor((Math.random() * buzzwords.length));
	}
	while (usedWords[randomWord]);

	usedWords[randomWord] = true;
	var currSquare = "square" + thisSquare;
	document.getElementById(currSquare).innerHTML = buzzwords[randomWord];
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function anotherCard() {
	for (var i=0; i<buzzwords.length; i++) { //when a new card is generated, set all the flags in usedWords back to false so they're available, lines 76-78
		usedWords[i] = false;
	}

	newCard();
	return false;
}

function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}
	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}
	
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}

