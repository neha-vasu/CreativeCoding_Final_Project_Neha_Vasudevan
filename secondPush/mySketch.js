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
var incrementAalia = 60;

//fight scene
var angle = 0; 
var angleIncrement = 0.01;


//animated trial

let bubble;
let bubbleFlipped;
let x, y, message, letters, loc1;




//scene 1 
let paisleyY, paisleySize;
let hiX = 1200;
let imX =-400;
let paisleyX = 1200;
let whiteRectX = 900;

//scene 2
let blueRectY = -900;
var margin = 150;
let increment = 1;
let angle0 = -0.5;
let angle1 = -0.5;
let angle2 = 0;
let systems;

//when scene 2 starts
let timing2 = 14000

//scene 3 
scaleUp = 1;
let timing3 = 35000;

var scenes10, scenes20;
function preload() {
	myFont = loadFont('Staatliches Regular 400.ttf')
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
	
	
	//text bubble animation
	textBub1 = loadImage ('textbub1.png')
	textBub2 = loadImage ('textbub2.png')
	textBub1Flipped = loadImage ('textBub1Flipped.png')
	textBub2Flipped = loadImage ('textBub2Flipped.png')
	
// 	aaliaPhoneSad = 
// 	aaliaPhoneHappy = 
		
// 	paisleyPhoneWorried = 
// 	paisleyRunning = 
	
// 	bubble = loadAnimation(textBub1, textBub2);
// 	bubbleFlipped = loadAnimation(textBub1Flipped, textBub2Flipped);
}


function setup() {
	myFont = loadFont('Staatliches Regular 400.ttf')
	menuPic = loadImage('introMenuImage.png')
	createCanvas(900, 900);
	background('#17308d');
	
	colors = ['#877ef2', '#17308d', '#ffde00']
	

	scenes10 = new Scene0to10();
	scenes20 = new Scene11to20();
	systems = [];
	
	
	message = "I blew up";

  // Initialize Letters at the correct x location
  x = margin;
	y = 250;
	let letters = split(message, '');
	// for (let i = 0; i < message.length; i++ ) { 
	// 	x+=textWidth(message[i]);
	// loc1[i] = x;
	// }

  for (let i = 0; i < message.length; i ++ ) {
    // Letter objects are initialized with their location within the String as well as what character they should display.
    // letters[i] = message.charAt(i); 
    x += textWidth(message[i]);
	}



}

function draw() {
	if (millis(0)>= 0) {
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
	
	
	//scene 1 - paisley intro 
	if (millis() >=5000)
	{
			fill (255)
		rect (whiteRectX, 0, 1800, 900);
		whiteRectX-=10;
		// myFont = loadFont('Staatliches Regular 400.ttf')
		scenes10.sceneNum1();
	}
		

	//scene 2 - fired from work, cold day
	if (millis() >=13000) {
fill (colors[1])
		rect (0, blueRectY, 1800, 900);
		blueRectY+=15;

		scenes10.sceneNum2();
	}
	

	//scene 3 - drive randomly, sail off without a map, familiar sign 
	
if (millis() > 35000) {
	
	// 	scale (scaleUp)
	// 	rectMode (CENTER)
	// fill(255)
	// 	rect(0, 0, 20, 20)
	// if (scaleUp < 80) {
	// 		scaleUp+=0.001
	// 		}


		scenes10.sceneNum3();
		
}
	
	if (sceneNum == 4) {
// 		
		scenes10.sceneNum4();
	}
		
		if (sceneNum == 5) {

			scenes10.sceneNum5();
	
		}
			
			if (sceneNum == 6) {
				

					scenes10.sceneNum6();
			}
			
	
		if (sceneNum == 7) 
					{
// 					
						scenes10.sceneNum7();
					}	
			if (sceneNum == 8) {
				
				scenes10.sceneNum8();
			}
			if (sceneNum == 9) {
				
				scenes10.sceneNum9();
			}
	
	if (sceneNum == 10) {
				
				scenes10.sceneNum10();
			}
	
	if(sceneNum ==11) {
		
		scenes20.sceneNum11();
	}
		
		if(sceneNum ==12) {
		
		scenes20.sceneNum12();
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
			text (words [i] + "  ", x, y);
			// 	console.log("Thex is: " + thex);
			// 	//console.log(thex);
			// 	console.log("They is: " + they);
			// //console.log(they);
			tw = textWidth (words[i] + "  ");
					x += tw;
				}
			if(x+tw>width-margin) // if we are close to the edge
    {
      x=margin;
			x-=textWidth ("  ")
      y+=size+15;
    }
			
	}
	
	// this version has the words show up a bit faster, I might make the time increments a 
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