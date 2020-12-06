//scene 2
var margin = 150;
let increment = 1;
let angle0 = -0.5;
let angle1 = -0.5;
let angle2 = 0;
let systems;





let x;
  let y;
let words;
let numNumbs = 0;

let mappedVal;
let fade;
function preload() {
	myFont = loadFont('Staatliches Regular 400.ttf')
	
}


function setup() {
	
	createCanvas(900, 900);
	myFont = loadFont('Staatliches Regular 400.ttf')
	// menuPic = loadImage('introMenuImage.png')
	createCanvas(900, 900);
	background('#17308d');
	
	colors = ['#877ef2', '#17308d', '#ffde00']
	words = new Numb(); 
	words = [];
systems = [];
	// scenes10 = new Scene0to10();
	// scenes20 = new Scene11to20();
	
}

function draw() {
	textFont(myFont)
	ellipse(mouseX, mouseY, 20, 20);
			textAlign (LEFT)
	background (colors[1])
		var thex = 200;
		var they = 200;
		// var sourceText = "I was fired from work, \nit was a cold day \nin the middle of february and I felt numb.";
		textSize (75)
	push()
	scale (increment)
	fill (255)
	text ("I was", 0, 100)

	if (increment < 3) {
			increment+=0.05
			}
	pop()
	textSize(250)
	fill(colors[2])
let words1 = ["F", "I", "R", "E", "D"];
		if (millis() > 1600)
		{
			text(words1[2], textWidth("FI"), 500)
		}
	
	if (millis() > 1800)
		{
			text(words1[0], 0, 500)
		}
	
	
if (millis() > 2000)
		{
			text(words1[4], textWidth("FIRE"), 500)
		}
	if (millis() > 2200)
		{
			text(words1[3], textWidth("FIR"), 500)
		}
	if (millis() > 2400)
		{
			text(words1[4], textWidth("FIRE"), 500)
		}
	if (millis() > 2600)
		{
			text(words1[1], textWidth("F"), 500)
		}
	
	if (millis() >3000) 
	{
		background (colors[1])
		push() 
		rotate (angle2)
		push()
		textSize (75)
	scale (2.95)
	fill (255)
	text ("I was", 0, 100)
	pop()
		textSize (250)
		text("FIRED", 0, 500)
		angle2 += 0.02
		pop()
		
		
	}
	
	if (millis() > 6000) {
		background(colors[1])
	push() 
		rotate (angle0)
		appearsWordByWord1 ("it was a cold day", 100, 100, 80, 255, 3000)
		pop()
		angle0 += 0.02
	}
	

	
	if (millis() > 9000) {
		background(colors[1])
	push() 
		rotate (angle1)
		appearsWordByWord1 ("in the middle of february", 100, 100, 80, 255, 3000)
		pop()
		angle1 += 0.02
	}
	if (millis() > 12000) {
		background(colors[1])
	push() 
		rotate (angle1)
		appearsWordByWord1 ("and i felt", 100, 100, 80, 255, 3000)
		pop()
		angle1 += 0.02
	}
		
	
	if (millis () > 15000)
	{
		background(colors[1])
		if (random(40) < 1) {
		this.p = new DropSystem(createVector(random (0, 900), random (0, 900)));
  systems.push(p);
		}
		for (i = 0; i < systems.length; i++) {
      systems[i].run();
      systems[i].addParticle();
    }
	
}
}

function appearsWordByWord1(sourceText, x, y, size, color, time) {
	var words = sourceText.split(" ");
		for (i = 0; i < words.length; i++)
		{
			textSize (size)
			fill (color)
			textAlign(LEFT)
			if(millis() >= (time + (200 * i))){
				
				//console log time or millis here 
			text (words [i] + "  ", x, y);
			// 	console.log("Thex is: " + thex);
			// 	//console.log(thex);
			// 	console.log("They is: " + they);
			// //console.log(they);
			tw = textWidth (words[i] + "  ");
					x += tw;
				}
			if(x+tw>width) // if we are close to the edge
    {
      x=margin;
			x-=textWidth ("  ")
      y+=size+15;
    }
			
	}

}


// let fade = 255;

