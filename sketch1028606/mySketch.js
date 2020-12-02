var sceneNum = 0;
var curx = 0, cury = 0;
var speed = 50; //follow speed of word, higher number is slower
let menuPic, grain, water, arrow;
let myFont;
var keepingTime;
var tw = 0;
var margin = 150;
//scene with lake becoming darker and darker
var darker = 0;

//scene with words fading away 
var fade = 255;

//scene with aalia words
var increment = 60;
function preload() {
	
	menuPic = loadImage('introMenuImage.png')
	grain = loadImage('grain.jpg');
	water = loadImage ('water.gif')
	arrowYellow = loadImage ('nextArrow.png')
	arrowBlue = loadImage ('arrowBlue.png')
	arrowWhite = loadImage ('arrowWhite.png')
	arrowPurple = loadImage ('arrowPurple.png')
	
	introPaisley = loadImage ('introPaisley.png')
	paisleyDriving = loadImage ('paisleyDriving.png')
	lake = loadImage('dayLake.jpg')
	paisleyByLakePresent = loadImage ('paisleyLakePresent.png')
	paisleyByLakePresent1 = loadImage ('paisleyLakePresent1.png')
	paisleyAalia = loadImage ('paisley&Aalia.png')
	
	introAalia = loadImage ('introAalia.png')
}


function setup() {
	createCanvas(900, 900);
	background('#17308d');
	
	colors = ['#877ef2', '#17308d', '#ffde00']
	myFont = loadFont('Staatliches Regular 400.ttf')

	
}

function draw() {
	if (sceneNum == 0) {
		background (colors[1])
// 	push()
// 	tint(135,126,242,200)
	
// 	image (water, 0, 0, 2 * water.width, 2 * water.height)
// 	pop()
textFont(myFont)
var nextLine = 60;
	
	
	fill (255)
	textSize (nextLine)
	textAlign (CENTER)
	image (arrowYellow, 650, 650, 0.25 * arrowYellow.width, 0.25* arrowYellow.height)
	text('years ago,', width/2, 555);
	text('by the lake', width/2, 555 + nextLine + nextLine/3);
	// image (menuPic, 140, height/2 - 300, 0.4 * menuPic.width, 0.4 * menuPic.height)
	
	
  mposx = mouseX;//library function to find the co-ords of the mouse
  mposy = mouseY;
  vec = createVectorDirection(mposx, mposy, curx, cury);//find the vector between the cursor and current text position
  moveCurrent(curx, cury, mposx, mposy, vec, speed); // move the text in the direction of the cursor and apply a speed variable
  drawImage(curx, cury);//curx&cury are updated by moveCurrent then drawn to the canvas
	}
	
	if (sceneNum == 1)
	{
		background (255)
		textAlign (LEFT)
		var paisleySize = 200
		textSize (paisleySize)
		fill(colors [2])
		text ("Hi!", 100, 250)

		text ("\nI'm\nPaisley", 100, 250)
		if(millis() >= keepingTime + 1000){
			
			image (introPaisley, 250, 0, 0.5 * introPaisley.width, 0.5*introPaisley.height)
		}
		
		if(millis() >= keepingTime + 1500){
			
				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}
		
		
		
}
	
	if (sceneNum == 2) {
		textAlign (LEFT)
	background (colors[1])
		var thex = 200;
		var they = 200;
		var sourceText = "I was fired from work, it was a cold day in the middle of february and I felt numb.";
		textSize (75)
var words = sourceText.split(" ");
		for (i = 0; i < words.length; i++)
		{
			fill (255, 255, 255, fade)
			if(millis() >= (keepingTime + (300 * i))){
				
				//console log time or millis here 
			text (words [i] + " ", thex, they);
			// 	console.log("Thex is: " + thex);
			// 	//console.log(thex);
			// 	console.log("They is: " + they);
			// //console.log(they);
			tw = textWidth (words[i] + " ");
					thex += tw;
				}
			if(thex+tw>width-margin) // if we are close to the edge
    {
      thex=margin;
      they+=75;
    }
			fade -= 0.025
	}
		
		if (fade < 0)
		{
			image (arrowWhite, 650, 650, 0.25 * arrowWhite.width, 0.25* arrowWhite.height)
		}
	}
	
	if (sceneNum == 3){
		background (255)
		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
		textAlign (CENTER)
		textSize (60)
		fill (colors[0])
		text("So I drove around randomly", width/2, 200)
		if(millis() >= keepingTime + 1000){
			
			image (paisleyDriving, 100, 250, 0.5 * paisleyDriving.width, 0.5*paisleyDriving.height)
		}
		
		if(millis() >= keepingTime + 1500){
			
				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}
		
		
	}
	
	if (sceneNum == 3){
		background (255)
		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
		textAlign (CENTER)
		textSize (60)
		fill (colors[0])
		text("So I drove around randomly", width/2, 200)
		if(millis() >= keepingTime + 1000){
			
			image (paisleyDriving, 100, 250, 0.5 * paisleyDriving.width, 0.5*paisleyDriving.height)
		}
		
		if(millis() >= keepingTime + 4000){
			background (colors[0])
			appearsWordByWord("I sailed off without a map", 100, 250, 60, 255, keepingTime + 4000)
			appearsWordByWord("which is reeeeeeally", 100, 325, 60, 255, keepingTime + 4000)
			appearsWordByWord("unlike me.", 100, 400, 60, 255, keepingTime + 4000)
		}
		if(millis() >= keepingTime + 7000){
			background (colors[0])
			appearsWordByWord("I saw a lake sign that looked familiar, so I quickly stopped by.", 100, 250, 60, 255, keepingTime + 7000)

		}
		
		
		if(millis() >= keepingTime + 7500){
			
				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}
		
	}
	
	if (sceneNum == 4) {
		background (colors [2])
		appearsWordByWord("I remembered something, no actually,  someone who used to be so important to me.", 100, 250, 60, colors[1], keepingTime)
		if(millis() >= keepingTime + 3000){
			
				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}
	}
		
		if (sceneNum == 5) {
			background(255)
			
			image (lake, -600, 0, 1.9 * lake.width, 1.9* lake.height)
		
			image (paisleyByLakePresent, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			
			
			if(millis() >= keepingTime + 2000){
			
			tint(23, 48, 141, darker)
			image (lake, -600, 0, 1.9 * lake.width, 1.9* lake.height)
			noTint()
			image (paisleyByLakePresent, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			darker+= 1
			}
			
			if(millis() >= keepingTime + 7000){
			
			appearsWordByWord("It’s funny how those people who we thought would be around forever drift away.", 100, 250, 60, colors[2], keepingTime+7000)
				image (paisleyByLakePresent1, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			}
			
			if(millis() >= keepingTime + 12000){
			
				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}	
		}
			
			if (sceneNum == 6) {
				
				if(millis () >= keepingTime) {
				background (255)

		textAlign (CENTER)
		textSize (60)
		fill (colors[2])
		text("I remember her...", width/2, 300)
				
							
		let words1 = ["A", "A", "L", "I", "A"];
		var x1 = margin;
		var y1 = 500;
		for (i = 0; i < words1.length; i++)
		{
			textSize (185)
			fill (colors[0])
			textAlign(LEFT)
			if(millis() >= ((keepingTime+1000) + (300 * i))){
		 
			text (words1 [i] + " ", x1, y1);
	
			tw = textWidth (words1[i] + "  ");
					x1 += tw;
				}
			
			if(x1+tw>width-margin) // if we are close to the edge
    {
      x1=margin;
			x1-=textWidth (" ")
      y1+=115;
    }
			
	}
					
					
				}
				
				
				
				if(millis () >= keepingTime + 4000) {
					background (255) 
			
				appearsWordByWord("We grew up together.", 100, 100, 45, colors[0], keepingTime+4000)	
					
			}
				if(millis () >= keepingTime + 5000) {
		
			
				appearsWordByWord("She moved into a house down my street when I was 10.", 100, 160, 45, colors[0], keepingTime+5000)	
					
			}
				if(millis () >= keepingTime + 9000) {
		
			
				appearsWordByWord("We did everything together!", 100, 290, 45, colors[0], keepingTime+6000)	
					image(paisleyAalia, 275, 275, 0.5 * paisleyAalia.width, 0.5*paisleyAalia.height)
					
			}
				
					if(millis() >= keepingTime + 10000){
			
				image (arrowBlue, 0, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}	
					
			}
			
	
		if (sceneNum == 7) 
					{
						background (colors[2])
						textAlign(LEFT)
		textSize (60)
		fill (255)
		text("She is", 50, 100)
						let words1 = ["wild", "blunt", "hot-headed", "impulsive", "charismatic", "playful", "and bold"];
		var x1 = 50;
		var y1 = 175;
		for (i = 0; i < words1.length; i++)
		{
			textSize (75)
			fill (colors[0])
			textAlign(LEFT)
			if(millis() >= ((keepingTime+1000) + (300 * i))){
		 
			text (words1 [i] + " ", x1, y1);
	
			tw = textWidth (words1[i] + "  ");
					x1 += increment;
					y1+= 90
				
				if (x1 > 700)
				{
					increment = -75;
				}
				
			}
		}
			if (millis() >= keepingTime +5000)
			{
				
// fill (255) 
// 		textSize (60)
// 			text("All the things that I was not.", x1, 750)
				appearsWordByWord("All the things that I was not.", x1-95, 780, 35, 255, keepingTime+5000)	
			}
			
			if (millis() >= keepingTime +9000)
			{
				background (colors[2])
				appearsWordByWord("I think part of me was jealous", margin, 150, 50, 255, keepingTime+5000)
				appearsWordByWord("of her freedom, her fire", margin, 225, 50, colors[0], keepingTime+5000)	
				image (introAalia, 130, 210, 0.5 * introAalia.width, 0.5*introAalia.height)
				
			}
						if(millis() >= keepingTime + 11000){
			
				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}	
	
						
						// She was wild, bold, hot-headed impulsive, blunt, playful, and charismatic. All the things that I was not.
					}	
			
			
		
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sceneNum--;
    keepingTime = millis()
    }
   if (keyCode === RIGHT_ARROW) {
    sceneNum++;
		 keepingTime = millis()
    //same thing here as above
    
	 }
}


function drawImage(x, y) {
  image (menuPic, x, y, 0.4 * menuPic.width, 0.4 * menuPic.height)
}

function createVectorDirection(mx, my, cx, cy){
    return createVector((mx-cx),(my-cy));
}

function moveCurrent(cx, cy, mx, my, v, s){
    curx +=  (v.x * 1/s);
    cury +=  (v.y * 1/s);
}

function appearsWordByWord(sourceText, x, y, size, color, time) {
	var words = sourceText.split(" ");
		for (i = 0; i < words.length; i++)
		{
			textSize (size)
			fill (color)
			textAlign(LEFT)
			if(millis() >= (time + (300 * i))){
				
				//console log time or millis here 
			text (words [i] + " ", x, y);
			// 	console.log("Thex is: " + thex);
			// 	//console.log(thex);
			// 	console.log("They is: " + they);
			// //console.log(they);
			tw = textWidth (words[i] + " ");
					x += tw;
				}
			if(x+tw>width-margin) // if we are close to the edge
    {
      x=margin;
			x-=textWidth (" ")
      y+=size+15;
    }
			
	}

}