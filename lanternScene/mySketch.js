let bubble;
let bubbleFlipped;
let timing9 = 0;
let lantern;
let floating, floating1;

let scaleDecrease =1;
function preload() {
	myFont = loadFont('Staatliches Regular 400.ttf')
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
	
// 	floating = loadAnimation(lantern1, lantern2, lantern3);
// 	floating1 = loadAnimation(lantern2, lantern1, lantern3);
	
	lantern = createSprite(250, 500, 1500, 1500);
var floatingAnimate = lantern.addAnimation('floating', lantern1, lantern2, lantern3);
	lanternNum1 = createSprite(500, 700, 1500, 1500);
var floatingAnimate1 = lanternNum1.addAnimation('floating', lantern1, lantern2, lantern3);
	// lantern.addAnimation('floating1', floating1);
	floatingAnimate1.offY = 15
	floatingAnimate.offY = 15
	aaliaCrouch = loadImage("aaliaCrouchingPast.png")
	paisleyCrouch = loadImage("paisleyCrouchingPast.png")
}
	
// animation(bubbleFlipped, 600, 300, 0.5*textBub1.width, 0.5*textBub1.height);
function setup() {
	
	createCanvas(900, 900);
	colors = ['#877ef2', '#17308d', '#ffde00']
	background(100);
}

function draw() {
	
	if (millis() > timing9){
		// lantern.animation.stop()
			background(colors[1])
			
			image (nightLake, -100, 0, 1.9 * nightLake.width, 1.9* nightLake.height)
		
			// image (paisleyByLakePresent, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			
			}
	
	if (millis() > timing9+ 1000 && millis() < timing9 +4000){
	
		 animation(bubbleFlipped, 800, 130, 0.2*textBub1Flipped.width, 0.2*textBub1Flipped.height);
		image (aaliaCrouch, 320, 450, 0.25* aaliaCrouch.width, 0.25* aaliaCrouch.height)
		
		
		push()
// 		translate (300, 300)
// 		lantern.scale = 0.1
// 		// animation (lantern, 800, 400)
		
// 			lantern.changeAnimation('floating');
// 		// lantern.position.y = -2;
	
		pop()
		
		
		image (paisleyCrouch, 520, 450, 0.25* paisleyCrouch.width, 0.25* paisleyCrouch.height)
	textSize (25)
	textFont(myFont)
	fill(colors [0])
	text ("i know you really \nliked tangled",490, 340)
	}
	
	
	if (millis() > timing9+ 4000 && millis() < timing9 +7000){
	background(colors[1])
		image (nightLake, -100, 0, 1.9 * nightLake.width, 1.9* nightLake.height)
		 animation(bubbleFlipped, 800, 130, 0.2*textBub1Flipped.width, 0.2*textBub1Flipped.height);
		image (aaliaCrouch, 320, 450, 0.25* aaliaCrouch.width, 0.25* aaliaCrouch.height)
		
		image (paisleyCrouch, 520, 450, 0.25* paisleyCrouch.width, 0.25* paisleyCrouch.height)
	textSize (25)
	textFont(myFont)
	fill(colors [0])
	text ("I’m not into \ncheesy shit but I \nknow you are",490, 320)
	}
	
	if (millis() > timing9+ 7000 && millis() < timing9 +10000){
	background(colors[1])
		image (nightLake, -100, 0, 1.9 * nightLake.width, 1.9* nightLake.height)
		 animation(bubbleFlipped, 800, 130, 0.2*textBub1Flipped.width, 0.2*textBub1Flipped.height);
		image (aaliaCrouch, 320, 450, 0.25* aaliaCrouch.width, 0.25* aaliaCrouch.height)
		
		image (paisleyCrouch, 520, 450, 0.25* paisleyCrouch.width, 0.25* paisleyCrouch.height)
	textSize (22)
	textFont(myFont)
	fill(colors [0])
	text ("So I thought we could \nlaunch lanterns \ninto the sky!",490, 320)
	}
	
	if (millis() > timing9+ 10000 && millis() < timing9 +15000){
	background(colors[1])
		image (nightLake, -100, 0, 1.9 * nightLake.width, 1.9* nightLake.height)
		 animation(bubble, 830, 130, 0.2*textBub1Flipped.width, 0.2*textBub1Flipped.height);
		image (aaliaCrouch, 320, 450, 0.25* aaliaCrouch.width, 0.25* aaliaCrouch.height)
		
		image (paisleyCrouch, 520, 450, 0.25* paisleyCrouch.width, 0.25* paisleyCrouch.height)
	textSize (25)
	textFont(myFont)
	fill(colors [1])
	text ("That's so sweet! \nCan we write \nwishes on it?",510, 320)
	}
	
	if (millis() > timing9+ 15000 && millis() < timing9 +19000){
	background(colors[1])
		image (nightLake, -100, 0, 1.9 * nightLake.width, 1.9* nightLake.height)
		 animation(bubbleFlipped, 800, 130, 0.2*textBub1Flipped.width, 0.2*textBub1Flipped.height);
		image (aaliaCrouch, 320, 450, 0.25* aaliaCrouch.width, 0.25* aaliaCrouch.height)
		
		image (paisleyCrouch, 520, 450, 0.25* paisleyCrouch.width, 0.25* paisleyCrouch.height)
	textSize (20)
	textFont(myFont)
	fill(colors [0])
	text ("I’m not sure \nthat’s how wishes \neven work but okay \nlet’s do it.",490, 310)
	}
	
	if (millis() > timing9 +19000)
	{
		image (sky, 0, 0, 2*sky.width, 2*sky.height)
			lantern.scale = scaleDecrease;
			lanternNum1.scale = scaleDecrease;
		lantern.changeAnimation('floating');
lanternNum1.changeAnimation('floating');
    lantern.velocity.y = -2;
		lanternNum1.velocity.y = -2;
			drawSprites()
		if (scaleDecrease > 0){
		scaleDecrease-=0.003;
		}
	}
	
	
}
