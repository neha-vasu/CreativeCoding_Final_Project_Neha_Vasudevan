let timing3b = 0;
colors = ['#877ef2', '#17308d', '#ffde00']
let wordsSailed = ["I", "sailed", "off", "without", "a", "map", "which  is reeeeeeeally  unlike  me"]
let offscreenMoveY1 = 100; 
let offscreenMoveY2 = 900;
let moveWithout = 0;
let yellowRectX = 900;

let lakeSignX = -100;
let lakeSignY = 200;

let familiarX = 1000;
let familiarY = 650;

let rect1Y = 200;
let rectMove = 1;
let moveLake = 1;

let change1 = -100;
let change2 = 1000;

function preload() {
	myFont = loadFont('Staatliches Regular 400.ttf')
	
}


function setup() {
	
	createCanvas(900, 900);
	myFont = loadFont('Staatliches Regular 400.ttf')
	// menuPic = loadImage('introMenuImage.png')
	
	background('#17308d');
	
}

function draw() {
	
	textFont(myFont)
	if (millis() > timing3b) {
		noStroke()
		fill (colors[0])
rect (random (0, 900), random (0, 900), 250, 250)
	
	}
	
	//I
	if (millis() > timing3b + 2000) 
		
	{
		textAlign (CENTER)
		textSize (80)
		background (colors[0])
		fill (255)
		text(wordsSailed[0], width/2, offscreenMoveY1)
	}
	
	//sailed
	if (millis() > timing3b + 2200) 
		
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[1], width/2, offscreenMoveY1 + 100)
	}
	
	
	//off
	if (millis() > timing3b + 2400) 
		
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[2], width/2, offscreenMoveY1 + 200)
	}
	
		//without 
	if (millis() > timing3b + 2600) 
		
	{
		textAlign (CENTER)
		textSize (100)
			fill (colors[1])
		text(wordsSailed[3], width/2 - moveWithout,420)
	}
	
	//a
	if (millis() > timing3b + 2800) 	
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[4], width/2, offscreenMoveY2 - 370)
	}
	
	//map
	if (millis() > timing3b + 3000) 	
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[5], width/2, offscreenMoveY2 - 270)
	}
	
	//which is really unlike me
	if (millis() > timing3b + 3000) 	
	{
		textAlign (CENTER)
		textSize (40)
			fill (colors[2])
		text(wordsSailed[6], width/2, offscreenMoveY2 - 200)
	}
	
	if (millis() > timing3b + 6000) 	
	{
		textAlign (CENTER)
		textSize (80)
		background (colors[0])
		fill (255)
		text(wordsSailed[0], width/2, offscreenMoveY1)
		text(wordsSailed[1], width/2, offscreenMoveY1 + 100)
		text(wordsSailed[2], width/2, offscreenMoveY1 + 200)
		
		textSize (100)
			fill (colors[1])
		text(wordsSailed[3], width/2 - moveWithout,420)
		
		textSize (80)
			fill (255)
		text(wordsSailed[4], width/2, offscreenMoveY2 - 370)
		text(wordsSailed[5], width/2, offscreenMoveY2 - 270)
		
		
		textSize (40)
			fill (colors[2])
		text(wordsSailed[6], width/2, offscreenMoveY2 - 200)
		
		
		offscreenMoveY1 -=5
		offscreenMoveY2 +=5
		moveWithout+=5
		
		fill(colors[2])
		rect(yellowRectX, 0, 900, 900)
		yellowRectX-=5;
	}
	
	if (millis() > timing3b + 9000)
	{
		background(colors[2])
	}
	
	
	
	if (millis() > timing3b + 11000){
		textAlign(CENTER)
		fill(colors[1])
		textSize(200)
		text("CORAL LAKE", width/2, 500)
			
		fill(colors[2])
rect(480, 320, 540, rect1Y)
		if (rect1Y > 0) {
			
			rect1Y -=5
		}
		
	
	
	fill(colors[2])
	rect(0, 320 + rectMove, 480, 480) 	
		if (320 + rectMove < 800) {
			
			rectMove+=5;
		}
		
		
	// 	textSize (80)
	// 	fill(colors[0])
	// 	text("I saw a \nlake sign", lakeSignX, lakeSignY)
	// textSize(60)
	// 	fill (colors[0])
	// 	text("that looked familiar, \nso I quickly stopped by.", familiarX, familiarY)
	}
	
	if (millis() > timing3b + 14000){
		textAlign(LEFT)
		textSize (80)
		fill(colors[0])
		text("I saw a \nlake sign", lakeSignX, lakeSignY)
		if (lakeSignX <100) {
			lakeSignX+=3;
		}
			
		textAlign(RIGHT)
		textSize(60)
		fill (colors[0])
		text("that looked familiar, \nso I quickly stopped by.", familiarX, familiarY)
		if (familiarX >800) {
			familiarX-=3;
		}	
	
		
			
		}
	
	if (millis() > timing3b + 16000){
		textAlign(LEFT)
		textSize (80)
		fill(colors[0])
		text("I saw a \nlake sign", lakeSignX, lakeSignY)
		if (lakeSignY <1000) {
			lakeSignY+=3;
		}
			
		textAlign(RIGHT)
		textSize(60)
		fill (colors[0])
		text("that looked familiar, \nso I quickly stopped by.", familiarX, familiarY)
		if (familiarY >-200) {
			familiarY-=3;
		}	
		
		if (millis() >timing3b + 20000) 
	{
  background(colors [2]);
  fill(colors[1]);
	textSize(40)
	
		textFont (myFont)
  text ("no \nactually ",change1, 450);
 
	text ("who used",change2, 450)
  text ("remembered",450, change1);
  text ("important", 450, change2);
	  text ("to be ",change1, change2);
	text ("something",change2, change1);
 text ("to me.",change2, change2);
 text ("I",change1, change1);
  

	if (change1 <250 && change2 >650)
	{
	change1+=3;
	change2-=3;
	}
	}
	
	if (millis() >timing3b + 20000 + 5000) {
		fill(colors[0]);
	textSize(40)
		text("someone", 450, 450)
		
		
	}
	if (millis() >timing3b + 20000 + 8000) {
		
		change1+=3;
	change2-=3;
		
	}
	
// 		fill(colors[1])
// 		textSize(200)
// 		text("CORAL LAKE", width/2+moveLake, 500)
// 		if (width/2 + moveLake > 1500) {
			
// 			moveLake++
			
// 		}
	}
}