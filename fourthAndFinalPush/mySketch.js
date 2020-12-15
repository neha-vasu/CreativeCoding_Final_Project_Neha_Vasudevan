// I have a lot of references in terms of reading and learning but I'll drop whatever I remember here. 







var sceneNum = 0;
// var curx = 0, cury = 0;
var speed = 50; //follow speed of word, higher number is slower
let menuPic, grain, water, arrow;
let myFont;
var keepingTime;
var tw = 0;

//marking where text usually starts
var margin = 150;

//scene with lake becoming darker and darker this is in scene 5 
var darker = 0;

//scene with words fading away 
var fade = 255;

//scene with aalia words in scene 7 
var incrementAalia = 60;

//fight scene in scene 10 
var angle = 0; 
var angleIncrement = 0.001;


//animated trial
//this is for the text bubbles during the lantern scene
let bubble;
let bubbleFlipped;

//I didn't end up using these variables
let x, y, message, letters, loc1;


//scene 0 

//this is for the vector controlling the starting image with the lantern, moon and sun
let moonStar;

//scene 1 
//setting the movement of the image (paisleyY) and the size of the text with paisleySize
let paisleyY, paisleySize;

//moving each word specifically
let hiX = 1200;
let imX =-400;
let paisleyX = 1200;

//moving the intro white rectangle that slides left 
let whiteRectX = 900;

//scene 2

//moving the blue rectangle to transition
let blueRectY = -1200;

//where text starts on the screen
var margin = 150;

//incrementing scale of the words "I was"
let increment = 1;
// these are the angles rotating the words
let angle0 = -0.5;
let angle1 = -0.5;
let angle2 = 0;
//for the particle systems
let systems;

//when scene 2 starts
//starting at scene 2 timing+Number variable marks where each scene starts so that if a change to time needs to be made you only need to change one part 
let timing2 = 18000

//scene 3 
scaleUp = 1;
let timing3 = 38000;


//scene 3 part 2
let timing3b = timing3 + 9500;

let wordsSailed = ["I", "sailed", "off", "without", "a", "map", "which  is reeeeeeeally  unlike  me"]
//moving the words either up down or left 
let offscreenMoveY1 = 100; 
let offscreenMoveY2 = 900;
let moveWithout = 0;
//transitioning yellow rectangle
let yellowRectX = 900;

//moving lake sign words
let lakeSignX = -100;
let lakeSignY = 200;

//moving the familiar word group
let familiarX = 1000;
let familiarY = 650;

//these are the rectangle variables that uncover the words "coral lake"
let rect1Y = 200;
let rectMove = 1;
let moveLake = 1;

//scene4
//these are the variables that move the words in the grid
let change1 = -100;
let change2 = 1000;
let timing4 = timing3b+20000


//scene 5 
let timing5 = timing4+ 20000


//scene 6 
//transitioning white rectangle scaling up
let scaleUp2 = 1
let timing6 = timing5 + 14000 

//the angle with which the squares rotate in the word Aalia
let angleAalia = 0;
// let aaliaPts;
//moving text left off of the screen
let moveLeft = 1;

//rearranging the text explaining paisley and aalia growing up together as the text arrives on the screen
let moveLeft2 = 1;


//scene 7
let timing7 = timing6 + 18000
let message1 = "of her freedom, of her fire"

//transitioning the yellow rectangle onto the screen 
let yellowRectY = 900;

//moving the words "of her freedom, of her fire" randomly 
let xMessage, yMessage;

// the variables intializing classes that show the scenes 
var scenes10, scenes20;

//scene 9/10
// let bubble;
// let bubbleFlipped;
let timing8 = timing7+22000;
let timing9 = timing8+8000;
// lantern sprite
let lantern;
//different speeds of lantern floating
let floating, floating1;
//reducing size of lanterns
let scaleDecrease =1;

//scene10
let timing10 = timing9+29000
let w; 

//scene 11
let timing11 = timing10+18000

// the opacity of the word decreases until you can't see the words anymore
let opacityWord = 255

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
	
	//lantern 
	
	textBub1 = loadImage ('speechBub.png')
	textBub2 = loadImage ('speechBub2.png')
	textBub1Flipped = loadImage ('speechBubFlipped.png')
	textBub2Flipped = loadImage ('speechBub2Flipped.png')
	lake = loadImage('dayLake.jpg')
	nightLake = loadImage('nightLake.jpg')
	
	lantern1 = loadImage("lantern.png")
	lantern2 = loadImage("lantern2.png")
	lantern3 = loadImage("lantern3.png")
	sky = loadImage("sky.jpg")
	
	bubble = loadAnimation(textBub1, textBub2);
	bubbleFlipped = loadAnimation(textBub1Flipped, textBub2Flipped);
	lantern = createSprite(250, 500, 1500, 1500);
	
	//p5 play library intializing lantern animation
var floatingAnimate = lantern.addAnimation('floating', lantern1, lantern2, lantern3);
	lanternNum1 = createSprite(500, 700, 1500, 1500);
var floatingAnimate1 = lanternNum1.addAnimation('floating', lantern1, lantern2, lantern3);
	// lantern.addAnimation('floating1', floating1);
	floatingAnimate1.offY = 15
	floatingAnimate.offY = 15
	aaliaCrouch = loadImage("aaliaCrouchingPast.png")
	paisleyCrouch = loadImage("paisleyCrouchingPast.png")
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
	
	// scene 10 words drifting 
w = new Drift(100, 450, "we drifted apart", 255);
	
	// initializing classes
	scenes10 = new Scene0to10();
	scenes20 = new Scene11to20();
	
	//initializing particle systems for the word "numb"
	systems = [];
	moonStar = new Vehicle (width/2, height/2, menuPic)
	
	message = "I blew up";

  // Initialize Letters at the correct x location
  xMessage = margin;
	yMessage = 250;
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
	if (millis()>= 0) {
		background (colors[1])
			let mouse = createVector(mouseX, mouseY);
// 	push()
// 	tint(135,126,242,200)
	
// 	image (water, 0, 0, 2 * water.width, 2 * water.height)
// 	pop()
textFont(myFont)
var nextLine = 60;

	
	fill (255)
	textSize (nextLine)
	textAlign (CENTER)
	// image (arrowYellow, 650, 650, 0.25 * arrowYellow.width, 0.25* arrowYellow.height)
	text('years ago,', width/2, 555);
	text('by the lake', width/2, 555 + nextLine + nextLine/3);
		
		// this part makes the image seek out the mouse
		moonStar.seek(mouse);
	moonStar.update();
	moonStar.display();
	// image (menuPic, 140, height/2 - 300, 0.4 * menuPic.width, 0.4 * menuPic.height)
	
	
  // mposx = mouseX;//library function to find the co-ords of the mouse
  // mposy = mouseY;
  // vec = createVectorDirection(mposx, mposy, curx, cury);//find the vector between the cursor and current text position
  // moveCurrent(curx, cury, mposx, mposy, vec, speed); // move the text in the direction of the cursor and apply a speed variable
  // drawImage(curx, cury);//curx&cury are updated by moveCurrent then drawn to the canvas
	}
	
	
	//scene 1 - paisley intro 
	if (millis() >=8000)
	{
			fill (255)
		rect (whiteRectX, 0, 1800, 900);
		whiteRectX-=10;
		// myFont = loadFont('Staatliches Regular 400.ttf')
		scenes10.sceneNum1();
	}
		

	//scene 2 - fired from work, cold day
	if (millis() >=17000) {
fill (colors[1])
		rect (0, blueRectY, 1800, 1200);
		blueRectY+=15;

		scenes10.sceneNum2();
	}
	

	//scene 3 - drive randomly, sail off without a map, familiar sign 
	
if (millis() > 38000) {
	
	// 	scale (scaleUp)
	// 	rectMode (CENTER)
	// fill(255)
	// 	rect(0, 0, 20, 20)
	// if (scaleUp < 80) {
	// 		scaleUp+=0.001
	// 		}


		scenes10.sceneNum3();
		
}
	//scene 4 - I remembered something
	if (millis() > timing4) {
// 		
		scenes10.sceneNum4();
	}
	
	//scene 5 - paisley by the lake, people drift away scene
		if (millis() > timing5) {

			scenes10.sceneNum5();
	
		}
		//scene 6 - 	i remember aalia and paisley explaining aalia and paisley growing up together
			if (millis() > timing6) {
				

					scenes10.sceneNum6();
			}
			
	// scene 7 - introducing aalia
		if (millis() > timing7) 
					{
// 					
						scenes10.sceneNum7();
					}	
// 			if (millis() > timing8)  {
				
// 				scenes10.sceneNum8();
// 			}
	
	// scene 9 - lantern scene
			if (millis() > timing8) {
				
				scenes10.sceneNum9();
			}
	
	//scene 10 - this is the fight scene and where they move apart 
	if (millis() > timing10) {
				
				scenes10.sceneNum10();
			}
	//scene 11 - this is the scene where paisley realizes she misses aalia
	if(millis() > timing11) {
		
		scenes20.sceneNum11();
	}
		
		if(sceneNum ==12) {
		
		scenes20.sceneNum12();
	}
		
		
}

// initially I had the scenes go to next scene using keyPressed
// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     sceneNum--;
//     keepingTime = millis()
//     }
//    if (keyCode === RIGHT_ARROW) {
//     sceneNum++;
// 		 keepingTime = millis()
//     //same thing here as above
    
// 	 }
// }


// function drawImage(x, y) {
//   image (menuPic, x, y, 0.4 * menuPic.width, 0.4 * menuPic.height)
// }

// function createVectorDirection(mx, my, cx, cy){
//     return createVector((mx-cx),(my-cy));
// }

// function moveCurrent(cx, cy, mx, my, v, s){
//     curx +=  (v.x * 1/s);
//     cury +=  (v.y * 1/s);
// }

// this function makes the words show up one by one
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