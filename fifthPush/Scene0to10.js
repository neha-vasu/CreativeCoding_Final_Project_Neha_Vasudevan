
let words1 = ["F", "I", "R", "E", "D"];
		let words = 'So  I  drove  around  randomly';
class Scene0to10 {
	constructor() {
		myFont = loadFont('Staatliches Regular 400.ttf')
		let words1 = ["F", "I", "R", "E", "D"];
		let words = 'So I drove around randomly';
	}
// 	sceneNum0() {
// 		background (colors[1])
// // 	push()
// // 	tint(135,126,242,200)
	
// // 	image (water, 0, 0, 2 * water.width, 2 * water.height)
// // 	pop()
// textFont(myFont)
// var nextLine = 60;
	
	
// 	fill (255)
// 	textSize (nextLine)
// 	textAlign (CENTER)
// 	image (arrowYellow, 650, 650, 0.25 * arrowYellow.width, 0.25* arrowYellow.height)
// 	text('years ago,', width/2, 555);
// 	text('by the lake', width/2, 555 + nextLine + nextLine/3);
// 	// image (menuPic, 140, height/2 - 300, 0.4 * menuPic.width, 0.4 * menuPic.height)
	
	
//   mposx = mouseX;//library function to find the co-ords of the mouse
//   mposy = mouseY;
//   vec = createVectorDirection(mposx, mposy, curx, cury);//find the vector between the cursor and current text position
//   moveCurrent(curx, cury, mposx, mposy, vec, speed); // move the text in the direction of the cursor and apply a speed variable
//   drawImage(curx, cury);//curx&cury are updated by moveCurrent then drawn to the canvas
// 	}
	
	//intro paisley scene
	sceneNum1()
	{
		if (millis() >10000) {
			
		
		background (255)
		
		
		textAlign (LEFT)
		paisleySize = 200
		textSize (paisleySize)
		fill(colors [2])
					

			
			image (introPaisley, 100, 200, 0.5 * introPaisley.width, 0.5*introPaisley.height)
		
		text ("Hi,", hiX, 150)
			text ("I'm", imX, 350)
	text ("Paisley", paisleyX, 550)
			// while (hiX > margin) {
				hiX-=3;
			
				// while (imX < margin) {
				imX+=2;
			
			// while (paisleyX > margin) {
				paisleyX-=3;
			
			
// 		if(millis() >= 12000){
			
// 			image (introPaisley, 100, 200, 0.5 * introPaisley.width, 0.5*introPaisley.height)
// 		}
		
// 		if(millis() >= 16000){
			
// 				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}
		}
		
}
	
	//scene where she talks about being fired
	sceneNum2() {
		if (millis() > 18000 && millis() < timing3 + 2000)
		{
			// timing2 = 14000
		textFont(myFont)
	
			textAlign (LEFT)
	background (colors[1])
		var thex = 200;
		var they = 200;
		// var sourceText = "I was fired from work, \nit was a cold day \nin the middle of february and I felt numb.";
		textSize (75)
	push()
			//the text grows in size and is scaled up slowly until scale(3) 
	scale (increment)
	fill (255)
	textFont(myFont)
			
	text ("I was", 0, 100)

			//this increments scale
	if (increment < 3) {
			increment+=0.05
			}
	pop()
		}
		
		//this is where each letter of the word "fired" shows up spread apart in time
		if (millis() > timing2 +1600 && millis() < timing3 + 2000)
		{
			textFont(myFont)
			textSize(250)
	fill(colors[2])
			text(words1[2], textWidth("FI"), 500)
		}
	
	if (millis() > timing2 +1800)
		{
			textSize(250)
	fill(colors[2])
			text(words1[0], 0, 500)
		}
	
	
if (millis() > timing2 +2000 && millis() < timing3 + 2000)
		{
			textSize(250)
	fill(colors[2])
			text(words1[4], textWidth("FIRE"), 500)
		}
	if (millis() > timing2 +2200)
		{
			textSize(250)
	fill(colors[2])
			text(words1[3], textWidth("FIR"), 500)
		}
	if (millis() > timing2 +2400)
		{
			textSize(250)
	fill(colors[2])
			text(words1[4], textWidth("FIRE"), 500)
		}
	if (millis() > timing2 +2600)
		{
			textSize(250)
	fill(colors[2])
			text(words1[1], textWidth("F"), 500)
		}
	
	if (millis() >timing2 +3000&& millis() < timing3 + 2000) 
	{
		//this part rotates the letters off of the screen through the use of push and pop so that all the text objects and be rotated
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
		angle2 += 0.015
		pop()
		
		
	}
	
		// this part is rotated across the screen
	if (millis() > timing2 +6000 && millis() < timing3 + 2000) {
		background(colors[1])
	push() 
		rotate (angle0)
		appearsWordByWord1 ("it was a cold day", 100, 100, 80, 255, 3000)
		pop()
		angle0 += 0.015
	}
	

		// this part is rotated across the screen
	if (millis() > timing2 +9000 && millis() < timing3 + 2000) {
		background(colors[1])
	push() 
		rotate (angle1)
		appearsWordByWord1 ("in the middle of february", 100, 100, 80, 255, 3000)
		pop()
		angle1 += 0.015
	}
			// this part is rotated across the screen
	if (millis() > timing2 +12000 && millis() < timing3 + 2000) {
		background(colors[1])
	push() 
		rotate (angle1)
		appearsWordByWord1 ("and i felt", 100, 100, 80, 255, 3000)
		pop()
		angle1 += 0.015
	}
		
	// this part is the particle system for the word "numb" that pops up
	if (millis () > timing2 +15000 && millis() < timing3 + 2000)
	{
		push()
		background(colors[1])
		
		//I have finally found a way to make sure that random doesn't show up crazy fast by putting in this if statement that will work with time in between
		if (random(40) < 1) {
			// this is the particle system
		let p = new DropSystem(createVector(random (0, 900), random (0, 900)));
  systems.push(p);
		}
		//running and updating the particle system
		for (i = 0; i < systems.length; i++) {
      systems[i].run();
      systems[i].addParticle();
    }
		pop()
	
}//end
		
		
	}
	
// 	sceneNum3(){
// 		background (255)
// 		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
// 		textAlign (CENTER)
// 		textSize (60)
// 		fill (colors[0])
// 		text("So I drove around randomly", width/2, 200)
// 		if(millis() >= keepingTime + 1000){
			
// 			image (paisleyDriving, 100, 250, 0.5 * paisleyDriving.width, 0.5*paisleyDriving.height)
// 		}
		
// 		if(millis() >= keepingTime + 1500){
			
// 				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}
		
		
// 	}
	
	
	//long scene from driving around randomly to the part where she sees a lake sign called Coral Lake
	sceneNum3(){
		
		if (millis() > timing3 && millis() < timing5 + 2000){
			push()
			//this part scales up the white rectangle that helps transition into the next scene
		scale (scaleUp)
		fill (255)
		rectMode (CENTER) 
	  noStroke()
		rect(0, 0, 20, 20)
	if (scaleUp < 100) {
			scaleUp+=1.75
			}
			pop()
		}
		
		// so i drove around randomly
		if (millis() > timing3 + 3500 && millis() < timing5 + 2000)
		{	
			
		background (255)
		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
		textAlign (CENTER)
		textSize (65)
		fill (colors[0])
			textFont(myFont)
			// the words string is linked above in the constructor
			text(words, width/2, 400)
		}
		
		// this part has paisley driving and all of the text and rectangles splashing on the screen
		 if (millis() > timing3 + 6500 && millis() < timing5 + 2000)
		{	
			push()
		background (255)
			//this part is why there is a jittering effect of paisleyy driving 
			image (paisleyDriving, 100 + random(-2, 2), 150+ random(-2, 2), 0.5 * paisleyDriving.width, 0.5*paisleyDriving.height)
			textSize (60)
			textFont(myFont)
			
			// the letters from the "so i drove around randomly" are splashes randomly on the screen
			for(let i = 0; i< words.length; i++){
				
				if (random(35) < 1) {
   text(words[i], random(width), random(height)); 
				}
  }
    
			pop()
		}
		
	if (millis() > timing3b && millis() < timing5 + 2000) {
		textFont(myFont)
		noStroke()
		fill (colors[0])
rect (random (0, 900), random (0, 900), 400, 400)
	
	}
	
	//I have the words sailing of screen here. They pop up on the screen the "I sailed off the map part"
		
	//I
	if (millis() > timing3b + 2000 && millis() < timing5 + 2000) 
		
	{
		textAlign (CENTER)
		textSize (80)
		background (colors[0])
		fill (255)
		text(wordsSailed[0], width/2, offscreenMoveY1)
	}
	
	//sailed
	if (millis() > timing3b + 2200 && millis() < timing5 + 2000) 
		
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[1], width/2, offscreenMoveY1 + 100)
	}
	
	
	//off
	if (millis() > timing3b + 2400 && millis() < timing5 + 2000) 
		
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[2], width/2, offscreenMoveY1 + 200)
	}
	
		//without 
	if (millis() > timing3b + 2600 && millis() < timing5 + 2000) 
		
	{
		textAlign (CENTER)
		textSize (100)
			fill (colors[1])
		text(wordsSailed[3], width/2 - moveWithout,420)
	}
	
	//a
	if (millis() > timing3b + 2800 && millis() < timing5 + 2000) 	
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[4], width/2, offscreenMoveY2 - 370)
	}
	
	//map
	if (millis() > timing3b + 3000 && millis() < timing5 + 2000) 	
	{
		textAlign (CENTER)
		textSize (80)
			fill (255)
		text(wordsSailed[5], width/2, offscreenMoveY2 - 270)
	}
	
	//which is really unlike me
	if (millis() > timing3b + 3000 && millis() < timing5 + 2000) 	
	{
		textAlign (CENTER)
		textSize (40)
			fill (colors[2])
		text(wordsSailed[6], width/2, offscreenMoveY2 - 200)
	}
	
	if (millis() > timing3b + 6000 && millis() < timing5 + 2000) 	
	{
		// this part separately moves each of the words off the screen in separate directions
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
		moveWithout+=7
	
		//transitioning the screen to yellow
		fill(colors[2])
		rect(yellowRectX, 0, 2700, 900)
		yellowRectX-=7;
	}
	
		//setting the background to yellow
	if (millis() > timing3b + 10000 && millis() < timing5 + 2000)
	{
		background(colors[2])
	}
		

	if (millis() > timing3b + 11000 && millis() < timing5 + 2000){
		textAlign(CENTER)
		fill(colors[1])
		textSize(200)
		text("CORAL LAKE", width/2, 500)
			
		//moving the rectangles to uncover the words coral lake
		fill(colors[2])
rect(480, 320, 540, rect1Y)
		if (rect1Y > 0) {
			
			rect1Y -=3
		}
		
	
	//moving the rectangles to uncover the words coral lake
	fill(colors[2])
	rect(0, 320 + rectMove, 480, 480) 	
		if (320 + rectMove < 800) {
			
			rectMove+=3;
		}
		
		
	// 	textSize (80)
	// 	fill(colors[0])
	// 	text("I saw a \nlake sign", lakeSignX, lakeSignY)
	// textSize(60)
	// 	fill (colors[0])
	// 	text("that looked familiar, \nso I quickly stopped by.", familiarX, familiarY)
	}
	
		//moving the words right and onto the screen for the first part
	if (millis() > timing3b + 14000 && millis() < timing5 + 2000){
		textAlign(LEFT)
		textSize (80)
		fill(colors[0])
		text("I saw a \nlake sign", lakeSignX, lakeSignY)
		if (lakeSignX <100) {
			lakeSignX+=3;
		}
			
		//moving the words left and onto the screen for the first part
		textAlign(RIGHT)
		textSize(60)
		fill (colors[0])
		text("that looked familiar, \nso I quickly stopped by.", familiarX, familiarY)
		if (familiarX >800) {
			familiarX-=3;
		}	
	
		
			
		}
	//moving the words downwards
	if (millis() > timing3b + 16000 && millis() < timing5 + 2000){
		textAlign(LEFT)
		textSize (80)
		fill(colors[0])
		text("I saw a \nlake sign", lakeSignX, lakeSignY)
		if (lakeSignY <1000) {
			lakeSignY+=3;
		}
			
	//moving the words upwards
		textAlign(RIGHT)
		textSize(60)
		fill (colors[0])
		text("that looked familiar, \nso I quickly stopped by.", familiarX, familiarY)
		if (familiarY >-200) {
			familiarY-=3;
		}	
// 		if(millis() >= keepingTime + 1000){
			
// 			image (paisleyDriving, 100, 250, 0.5 * paisleyDriving.width, 0.5*paisleyDriving.height)
// 		}
		
// 		if(millis() >= keepingTime + 4000){
// 			background (colors[0])
// 			appearsWordByWord("I sailed off without a map which is reeeeeeally unlike me.", 100, 250, 60, 255, keepingTime + 4000)
// 			// appearsWordByWord("which is reeeeeeally", 100, 325, 60, 330, keepingTime + 5000)
// 			// appearsWordByWord("unlike me.", 100, 400, 60, 405, keepingTime + 6000)
// 		}
// 		if(millis() >= keepingTime + 10000){
// 			background (colors[0])
// 			appearsWordByWord("I saw a lake sign, \"Coral Lake\" that looked familiar, so I quickly stopped by.", 100, 250, 60, 255, keepingTime + 7000)

// 		}
		
		
// 		if(millis() >= keepingTime + 10000){
			
// 				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}
		
	}
	}
	
	// this is the scene where the words switch and exchange places 
	sceneNum4() {
		
		
			if (millis() >timing3b + 22000 && millis() < timing5 + 2000) 
	{
		
  background(colors [2]);
  fill(colors[1]);
	textSize(40)
	
		//initializing the positions of the words so that they can swap with one another in a moment
		textFont (myFont)
  text ("no \nactually ",change1, 450);
 
	text ("who used",change2, 450)
  text ("remembered",450, change1);
  text ("important", 450, change2);
	  text ("to be ",change1, change2);
	text ("something",change2, change1);
 text ("to me.",change2, change2);
 text ("I",change1, change1);
  
//moving the words onto the screen
	if (change1 <250 && change2 >650)
	{
	change1+=1.5;
	change2-=1.5;
	}
	}
	
		//making ths word stay on the screen for impact and having it in a different color
		//having it in the center
	if (millis() >timing3b + 22000 + 5000 && millis() < timing5 + 2000) {
		fill(colors[0]);
	textSize(40)
		text("someone", 450, 450)
		
		
	}
	
		//having the words move off the screen faster than they came
	if (millis() >timing3b + 22000 + 8000 && millis() < timing5 + 2000) {
		
		change1+=3;
	change2-=3;
		
	}
// 		appearsWordByWord("I remembered something, no actually,  \nsomeone ", 100, 250, 60, colors[1], keepingTime)
// 		appearsWordByWord("who used to be important to me.", 100, 475, 60, colors[1], keepingTime+3000)
// 		if(millis() >= keepingTime + 3000){
			
// 				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}
	}
		
	//scene with paisley by the lake
		sceneNum5() {
			if (millis() > timing5 && millis() < timing6 + 2000){
			background(colors[1])
			
			image (lake, -600, 0, 1.9 * lake.width, 1.9* lake.height)
		
			image (paisleyByLakePresent, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			
			}
			
			// the tint of the image becoming darker and darker
			if(millis() > timing5 + 2000 && millis() < timing6 + 2000){
			
			tint(23, 48, 141, darker)
			image (lake, -600, 0, 1.9 * lake.width, 1.9* lake.height)
			noTint()
			image (paisleyByLakePresent, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			darker+= 2
			}
			
			// the words popping up on the screen 
			if(millis() > timing5 + 5000 && millis() < timing6 + 2000){
			
			appearsWordByWord("It’s funny how those people who we thought would be around forever drift away.", 100, 250, 60, colors[2], timing5+5000)
				image (paisleyByLakePresent1, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			}
			
// 			if(millis() >= keepingTime + 12000){
			
// 				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}	
				
		}
	
		// this is the scene with " I remember her and the textToPoints work	
			sceneNum6() {
				// this is the transition of the white rectangle coming onto the screen
				if (millis() > timing6 && millis() < timing7 + 2000)
	{
	push()
		scale (scaleUp2)
		fill (255)
		rectMode (CENTER) 
	  noStroke()
		rect(0, 0, 20, 20)
	if (scaleUp2 < 100) {
			scaleUp2+=1
			}
			pop()
}
				// this is when the word "aalia" starts to appear onto the screen 
	if (millis() > timing6 + 4000 && millis() < timing7 + 2000)
	{
		textFont(myFont)
		background(255)
	textAlign (CENTER)
		textSize (60)
		fill (colors[2])
		text("I remember her...", width/2, 300)
		// this is when an array for the points of the word "Aalia" shows up on the screen 
	let aaliaPts = myFont.textToPoints('AALIA', 200, 650, 300, {
		//sample many points but not as many as I could be sampling 
		//this is what determines how many squares make up the word if I reduce this number I could have many more squares 
	sampleFactor: 0.2
	});
		// background(255)
		
		// this is the part that has squares with random widths come in at every point of the word "aalia"
		// I am also making them rotate around
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
		//moving the text off of the screen
		if (millis() > timing6 + 7000 && millis() < timing7 + 2000)
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

    push()
    translate(aaliaPts[i].x, aaliaPts[i].y);
    rotate(angleAalia);
    angleAalia+=0.001;
			 
  stroke(colors[0]);
  strokeWeight(random(1, 3));
			noFill()
    // arc(0, 0, 20+ random (-5, 5), 20+random (-5, 5), HALF_PI, PI);
			square(0, 0, random(0,8))
    pop()

  }
		//moving everything left
		moveLeft+=20

	}
		
		//this is the part where the text is moved left ONTO the screen
		//this part is the part that explains paisley and aalia growing up together
		if (millis() > timing6 + 11000 && millis() < timing7 + 2000)
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

				
				
// 				if(millis () >= keepingTime) {
// 				background (255)

// 		textAlign (CENTER)
// 		textSize (60)
// 		fill (colors[2])
// 		text("I remember her...", width/2, 300)
				
							
// 		let words1 = ["A", "A", "L", "I", "A"];
// 		var x1 = margin;
// 		var y1 = 500;
// 		for (i = 0; i < words1.length; i++)
// 		{
// 			textSize (185)
// 			fill (colors[0])
// 			textAlign(LEFT)
// 			if(millis() >= ((keepingTime+1000) + (300 * i))){
		 
// 			text (words1 [i] + " ", x1, y1);
	
// 			tw = textWidth (words1[i] + "  ");
// 					x1 += tw;
// 				}
			
// 			if(x1+tw>width-margin) // if we are close to the edge
//     {
//       x1=margin;
// 			x1-=textWidth (" ")
//       y1+=115;
//     }
			
// 	}
					
					
// 				}
				
				
				
// 				if(millis () >= keepingTime + 4000) {
// 					background (255) 
			
// 				appearsWordByWord("We grew up together.", 100, 100, 45, colors[0], keepingTime+4000)	
					
// 			}
// 				if(millis () >= keepingTime + 5000) {
		
			
// 				appearsWordByWord("She moved into a house down my street when I was 10.", 100, 160, 45, colors[0], keepingTime+5000)	
					
// 			}
// 				if(millis () >= keepingTime + 9000) {
		
			
// 				appearsWordByWord("We did everything together!", 100, 290, 45, colors[0], keepingTime+6000)	
// 					image(paisleyAalia, 275, 275, 0.5 * paisleyAalia.width, 0.5*paisleyAalia.height)
					
// 			}
				
// 					if(millis() >= keepingTime + 10000){
			
// 				image (arrowBlue, 0, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}	
					
			}
			
	//this is aalia's official introduction explaining her personality
		sceneNum7() 
					{
						if (millis() > timing7 && millis() < timing8 + 2000)
						{
							//moving the yellow rectangle up to transition to this scene
							
							push() 
							fill(colors[2])
							noStroke()
		rect(0, yellowRectY, 12000, 7000)
		yellowRectY-=15;
							pop()
						}
						if (millis() > timing7 + 5000 && millis() < timing8 + 2000)
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
			//this part has words show up staggered like a staircase
		{
			textSize (75)
			fill (colors[0])
			textAlign(LEFT)
			if(millis() >= ((timing7+5000+1000) + (300 * i))){
		 
			text (words1 [i] + " ", x1, y1);
	
			tw = textWidth (words1[i] + "  ");
					x1 += incrementAalia;
					y1+= 90
				
				if (x1 > 700)
				{
					incrementAalia = -75;
				}
				
			}
		}}
						
			if (millis() >= timing7 + 5000 +5000 && millis() < timing8 + 2000)
			{
				//all the things that I was not appears here
				
// fill (255) 
// 		textSize (60)
// 			text("All the things that I was not.", x1, 750)
				appearsWordByWord("All the things that I was not.", x1-150, 780, 35, 255, timing7 + 5000+5000)	
			}
			
						//this is where a pic of aalia shows up along with some type that shakes symbolizing her fire
			if (millis() >= timing7 + 5000 +9000 && millis() < timing8 + 2000)
			{
				background (colors[2])
				appearsWordByWord("I think part of me was jealous", margin, 150, 50, 255, timing7 + 5000+5000)
				// appearsWordByWord("of her freedom, her fire", margin, 225, 50, colors[0], timing7 + 3000+5000)
				
				// this is the part that has words randoming moving around
				// each letter moves separately technically 
				// I did this part with some help from our TA Lilly 
				
				for (let i = 0; i < message1.length; i++ ) {

    // Display all letters
    fill (colors[0])
		text (message1[i], xMessage+=random(-1.5,1.5), yMessage+=random(-1.5,1.5))
	 xMessage += textWidth(message1[i]);
	
		// x += random(-2,2);
		// y += random(-2,2);
  }
	//setting each letter back at margin so it doesn't go flying off the screen 
	xMessage = margin;
				
				image (introAalia, 130, 210, 0.5 * introAalia.width, 0.5*introAalia.height)
				
			}
// 						if(millis() >= keepingTime + 11000){
			
// 				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}	
	
						
						// She was wild, bold, hot-headed impulsive, blunt, playful, and charismatic. All the things that I was not.
						
								
					}

	//this scene is not used
sceneNum8() {
	
	background (255)
	appearsWordByWord("She used to play", margin, 200, 70, colors[0], keepingTime)	 
appearsWordByWord("pranks", margin, 400, 200, colors[2], keepingTime + 1000)	
	appearsWordByWord("on me whenever she wanted to hang out (since I studied a lot).", margin, 485, 50, colors[0], keepingTime+ 2000)
	appearsWordByWord("after this scene, scenes are incomplete", margin, 750, 50, colors[2], keepingTime+ 2000)
	
	if(millis() >= keepingTime + 2500){
			
				image (arrowBlue, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}	
}
	
// 	sceneNum8() {
// 	background (255)
// 	appearsWordByWord("She used to play", margin, 200, 70, colors[0], keepingTime)	 
// appearsWordByWord("pranks", margin, 400, 200, colors[2], keepingTime + 1000)	
// 	appearsWordByWord("on me whenever she wanted to hang out (since I studied a lot).", margin, 485, 50, colors[0], keepingTime+ 2000)
	
// }
	
	// the text before introducing the lantern scene
	sceneNum9() {
		if (millis() > timing8 && millis() < timing9 + 2000)
		{
	background (colors [1])
	appearsWordByWord("One day, we went to", margin, 200, 60, 255, timing8)	
		appearsWordByWord("Coral Lake.", margin, 275, 60, colors [2], timing8 + 2000)	
appearsWordByWord("She took", margin, 400, 60, 255, timing8 + 4000)	
	appearsWordByWord("two lanterns", margin, 525, 120, colors[2], timing8+ 5000)
	appearsWordByWord("out from the back of her car.", margin, 600, 50, 255, timing8+ 6000)
		}
		
		// the lantern scene 
		
		if (millis() > timing9){
		// lantern.animation.stop()
			background(colors[1])
			
			image (nightLake, -100, 0, 1.9 * nightLake.width, 1.9* nightLake.height)
		
			// image (paisleyByLakePresent, 80, 500, 0.3* paisleyByLakePresent.width, 0.3* paisleyByLakePresent.height)
			
			}
	
		if (millis() > timing9+ 2000){
		image (aaliaCrouch, 320, 450, 0.25* aaliaCrouch.width, 0.25* aaliaCrouch.height)
			image (paisleyCrouch, 520, 450, 0.25* paisleyCrouch.width, 0.25* paisleyCrouch.height)
			}
		// this is the part with the conversation back and forth between aalia and paisley
		// p5 playlibrary used to animate text bubbles
	if (millis() > timing9+ 2000 && millis() < timing9 +4000){
	
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
	
	
	if (millis() > timing9+ 5000 && millis() < timing9 +7000){
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
	
	if (millis() > timing9+ 8000 && millis() < timing9 +10000){
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
	
	if (millis() > timing9+ 11000 && millis() < timing9 +15000){
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
	
	if (millis() > timing9+ 16000 && millis() < timing9 +19000){
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
	
		//this is the part with the lanterns decreasing in size and moving the lanterns mocing upwards
	if (millis() > timing9 +20000 && millis() < timing10 + 2000)
	{
		image (sky, 0, 0, 2*sky.width, 2*sky.height)
			lantern.scale = scaleDecrease;
			lanternNum1.scale = scaleDecrease;
		lantern.changeAnimation('floating');
lanternNum1.changeAnimation('floating');
    lantern.velocity.y = -1.5;
		lanternNum1.velocity.y = -1.5;
			drawSprites()
		if (scaleDecrease > 0){
		scaleDecrease-=0.003;
		}
	}
	
// 		if(millis() >= timing8 + 8000){
			
// 				image (arrowPurple, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}	
}
	
	//fight scene 
	sceneNum10() {
		
		if(millis() > timing10 && millis() < timing11 + 2000)
		{
		background (colors[0])
		appearsWordByWord("A few weeks later we got into a", margin, 200, 60, colors [1], timing10)
		push() 
		textAlign(CENTER)
		translate (width/2, height/2)
		rotate (angle)
			// big fight words rotate faster and faster
		appearsWordByWord("Big Fight", 0, 0, 150, colors [2],  timing10 + 1000)
		pop()
		angle += angleIncrement;
		angleIncrement +=0.0003;
		}
		
		if (millis() >= timing10 +7000 && millis() < timing11 + 2000)
		{
			background (colors[0])
			angle = 0.01;
			appearsWordByWord("And then she", margin, 175, 150, colors [1],  timing10 + 7000)
			appearsWordByWord("Moved Away", margin, 825, 100, colors [2],  timing10 + 9000)
		}
		
		if (millis() >= timing10 +12000 && millis() < timing11 + 2000)
		{
			background (colors[0])
			// angle = 0.01;
		
    // Display all letters
// for (let i = 0; i < message.length; i++ ) {

//     // Display all letters
//     fill (255)
// 		text (message[i], x, y)
	
// 	x+= textWidth(message[i])
// 		// x += random(-2,2);
// 		// y += random(-2,2);
//   }
// textSize (50)
// 			textAlign (CENTER)
// text ("We drifted apart", width/2, 800)
    // If the mouse is pressed the letters shake
    // If not, they return to their original location
  
			
			//word drifts apart
			w.driftApart();
	//only after 2 seconds will it drift apart
	if (millis() > timing10 +14000+2000)
	{
		w.apart = true;
	}
  
		}
		
		
		
// 		if (millis() >= keepingTime +15000)
// 		{
// 			background (colors[0])
// 			textAlign (CENTER)
// 			appearsWordByWord("We both did.", width/2, 800, 100, colors [2], keepingTime + 15000)
// 		}
// 		if(millis() >= keepingTime + 19000){
			
// 				image (arrowYellow, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
// 		}	
		

}
	
	
	
	
	
	
	
}


// drawImage(x, y) {
//   image (menuPic, x, y, 0.4 * menuPic.width, 0.4 * menuPic.height)
// }

// createVectorDirection(mx, my, cx, cy){
//     return createVector((mx-cx),(my-cy));
// }

// moveCurrent(cx, cy, mx, my, v, s){
//     curx +=  (v.x * 1/s);
//     cury +=  (v.y * 1/s);
// }
	
	
	
// }
	