let scaleUp2 = 1
let timing6 = 0; 
let angleAalia = 0;
// let aaliaPts;
let moveLeft = 1;
let moveLeft2 = 1;
let margin = 150;
function preload() {
	paisleyAalia = loadImage ('paisley&Aalia.png')
		myFont = loadFont('Staatliches Regular 400.ttf')
}
function setup() {
	createCanvas(900, 900);
	colors = ['#877ef2', '#17308d', '#ffde00']
	background(100);

	
	
// aaliaPts = myFont.textToPoints("AALIA", width/2, height/2, 100{
// 					sampleFactor:0.1													 
																		 
//  });
}

function draw() {
	if (millis() > timing6)
	{
	push()
		scale (scaleUp2)
		fill (255)
		rectMode (CENTER) 
	  noStroke()
		rect(0, 0, 20, 20)
	if (scaleUp2 < 100) {
			scaleUp2+=2
			}
			pop()
}
	if (millis() > timing6 + 3000)
	{
		textFont(myFont)
		background(255)
	textAlign (CENTER)
		textSize (60)
		fill (colors[2])
		text("I remember her...", width/2, 300)
	let aaliaPts = myFont.textToPoints('AALIA', 200, 650, 300, {
	sampleFactor: 0.2
	});
		// background(255)
		for (let i = 0; i < aaliaPts.length; i++) {

    push();
    translate(aaliaPts[i].x, aaliaPts[i].y);
    rotate(angleAalia);
    angleAalia+=0.001;
			 
  stroke(colors[0]);
  strokeWeight(random(1, 3));
			noFill()
    // arc(0, 0, 20+ random (-5, 5), 20+random (-5, 5), HALF_PI, PI);
			square(0, 0, random(0,8))
    pop();

  }
		
		if (millis() > timing6 + 6000)
	{
		textFont(myFont)
		background(255)
	textAlign (CENTER)
		textSize (60)
		fill (colors[2])
		text("I remember her...", width/2-moveLeft, 300)
	let aaliaPts = myFont.textToPoints('AALIA', 200- moveLeft, 650, 300, {
	sampleFactor: 0.2
	});
		// background(255)
		for (let i = 0; i < aaliaPts.length; i++) {

    push();
    translate(aaliaPts[i].x, aaliaPts[i].y);
    rotate(angleAalia);
    angleAalia+=0.001;
			 
  stroke(colors[0]);
  strokeWeight(random(1, 3));
			noFill()
    // arc(0, 0, 20+ random (-5, 5), 20+random (-5, 5), HALF_PI, PI);
			square(0, 0, random(0,8))
    pop();

  }
		moveLeft+=10

	}
		
		
		if (millis() > timing6 + 9000)
	{
	appearsWordByWord("She moved into a house down my street when I was 10.", 1000 - moveLeft2, 160, 45, colors[0], timing6+9000)
	appearsWordByWord("We did everything together!", 1000- moveLeft2, 290, 45, colors[0], timing6+9000)	
					image(paisleyAalia, 1300 - moveLeft2, 285, 0.4 * paisleyAalia.width, 0.4*paisleyAalia.height)
		
		if (moveLeft2 <900)
		{
			moveLeft2+=10;
		}
		
		
	}
		
	}
}
	


	
	
// 	let grotesk;
// const fontSize = 200;
// let sample = 0.1;
// let r = 0;

// function preload() {

//   grotesk = loadFont('Grotesk_Bold.otf');

// }

// function setup() {
//   createCanvas(400, 400);
//   textFont(grotesk);
//   textSize(fontSize);
//   fill(255,0,255);
//   stroke(255,0,255);
//   strokeWeight(5);
// }




  // text('hi', width / 2 - 80, height / 2 + 65);

  

	function appearsWordByWord(sourceText, x, y, size, color, time) {
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

	
	
	
	
	
	
	
