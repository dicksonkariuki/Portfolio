var g = {};

onload = init;

function init() {
	g.counter = -1;
	g.likesimg = ["/static/images/likes/travel.png", "/static/portfolio/images/likes/science.png", "/static/portfolio/images/likes/books.png", 
				  "/static/images/likes/ai.png", "/static/portfolio/images/likes/linux.png", "/static/portfolio/images/likes/lotr.png",
				  "/static/images/likes/chip.png", "/static/portfolio/images/likes/matrix.png", "/static/portfolio/images/likes/graphics.png", 
				  "/static/images/likes/guitar.png", "/static/portfolio/images/likes/hiking.png", "/static/portfolio/images/likes/sherlock.png", 
				  "/static/images/likes/realtime.png", "/static/portfolio/images/likes/monty_python.png", "/static/portfolio/images/likes/dna.png", 
				  "/static/images/likes/sw.png", "/static/portfolio/images/likes/dw.png", "/static/portfolio/images/likes/blackadder.png", 
				  "/static/images/likes/dirkgently.png", "/static/portfolio/images/likes/code.png"];
	g.about = ["... Travelling", "... Quantum Mechanics", "... Reading", "... AI and Machine Learning", "... Linux", "... Lord of the Rings", 
				"... Microelectronics and Hardware","... The Matrix", "... Computer Graphics", "... Music", "... Hiking",
				"... Sherlock Holmes stories", "... Real Time Programming", "... Monty Python", "... Bioinformatics and Microbiology", 
				"... Star Wars",  "... Doctor Who", "... Blackadder", "... Dirk Gently's Holistic Detective Agency", "... Programming"];
	g.background = "/static/images/1.jpg";
	g.myimg = "/static/images/pic.png";
	g.projects = ["/static/images/battleship.png", "/static/portfolio/images/forum.png", "/static/portfolio/images/memory.png", 
				  "/static/images/tetris.png", "/static/portfolio/images/tictactoe.png"];
	cache();
	g.likes = document.getElementById("img-like");
	g.likesp = document.getElementById("p-like");
	setInterval(slideshow, 3000);
	
	g.nameAdd = "Dickson";
	g.jobAdd = "software developer";
	g.name1 = document.getElementById("name");
	g.job1 = document.getElementById("job");
	g.index = 0;
	loop();
}

//Caches the images.
function cache() {
	var image = new Image();
	var images = g.likesimg.concat(g.background).concat(g.myimg).concat(g.projects);
	for (var i=0; i<images.length; i++)
		image.src = images[i];
}

//Loop for index page to display text dynamically.
function loop(){
	setTimeout(function () {
		if(g.nameAdd.charAt(g.index) != "")
			g.name1.innerHTML += g.nameAdd.charAt(g.index);
		g.job1.innerHTML += g.jobAdd.charAt(g.index);
		g.index++;
		if (g.index < g.jobAdd.length)
			loop();
   }, 200);
}

//Create a popup window for the given link.
function popup(url){
	window.open(url,'name',
		'height=500, width=1300,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=0,top=0');
    return false;
}

//Create a popup window for the given link from java website.
function popupJava(url){
	window.open(url,'name',
		'height=900, width=1500,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=0,top=0');
    return false;
}

//Show the slideshow in about page.
function slideshow() {
	g.counter++;
	if(g.counter >= g.likesimg.length) 
		g.counter = 0;	
	g.likes.src = g.likesimg[g.counter];
	g.likesp.innerHTML = g.about[g.counter];
	
}

//Adds the event.
function addEvent(obj,type,fn){
	if(obj.addEventListener)
		obj.addEventListener(type,fn,false);
	else if(obj.attachEvent)
			obj.attachEvent("on"+type,fn);
}

//Remove event listeners from objects using the appropriate listeners for the browser in use
function removeEvent(obj, type, fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type, fn, false);
	}
	else if(obj.detachEvent){
		obj.detachEvent("on"+type, fn);
	}
}
