
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
	
	sceneNum1()
	{
		if (millis() >7000) {
			
		
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
	
	sceneNum2() {
		if (millis() > 14000)
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
	scale (increment)
	fill (255)
	textFont(myFont)
	text ("I was", 0, 100)

	if (increment < 3) {
			increment+=0.05
			}
	pop()
		}
		if (millis() > timing2 +1600)
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
	
	
if (millis() > timing2 +2000)
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
	
	if (millis() >timing2 +3000) 
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
	
	if (millis() > timing2 +6000) {
		background(colors[1])
	push() 
		rotate (angle0)
		appearsWordByWord1 ("it was a cold day", 100, 100, 80, 255, 3000)
		pop()
		angle0 += 0.02
	}
	

	
	if (millis() > timing2 +9000) {
		background(colors[1])
	push() 
		rotate (angle1)
		appearsWordByWord1 ("in the middle of february", 100, 100, 80, 255, 3000)
		pop()
		angle1 += 0.02
	}
	if (millis() > timing2 +12000) {
		background(colors[1])
	push() 
		rotate (angle1)
		appearsWordByWord1 ("and i felt", 100, 100, 80, 255, 3000)
		pop()
		angle1 += 0.02
	}
		
	
	if (millis () > timing2 +15000)
	{
		push()
		background(colors[1])
		if (random(40) < 1) {
		let p = new DropSystem(createVector(random (0, 900), random (0, 900)));
  systems.push(p);
		}
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
	
	sceneNum3(){
		
		if (millis() > timing3){
			push()
		scale (scaleUp)
		fill (255)
		rectMode (CENTER) 
		rect(0, 0, 20, 20)
	if (scaleUp < 100) {
			scaleUp+=2
			}
			pop()
		}
		if (millis() > timing3 + 3500)
		{	
		background (255)
		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
		textAlign (CENTER)
		textSize (65)
		fill (colors[0])
			textFont(myFont)
			
			text(words, width/2, 400)
		}
		 if (millis() > timing3 + 6500)
		{	
		background (255)
			image (paisleyDriving, 150, 150, 0.5 * paisleyDriving.width, 0.5*paisleyDriving.height)
			textSize (60)
			textFont(myFont)
			
			for(let i = 0; i< words.length; i++){
				
				if (random(10) < 1) {
   text(words[i], random(width), random(height)); 
				}
  }
    
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
	
	sceneNum4() {
		background (colors [2])
		appearsWordByWord("I remembered something, no actually,  \nsomeone ", 100, 250, 60, colors[1], keepingTime)
		appearsWordByWord("who used to be important to me.", 100, 475, 60, colors[1], keepingTime+3000)
		if(millis() >= keepingTime + 3000){
			
				image (arrowWhite, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}
	}
		
		sceneNum5() {
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
			
			sceneNum6() {
				
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
			
	
		sceneNum7() 
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
					x1 += incrementAalia;
					y1+= 90
				
				if (x1 > 700)
				{
					incrementAalia = -75;
				}
				
			}
		}
			if (millis() >= keepingTime +5000)
			{
				
// fill (255) 
// 		textSize (60)
// 			text("All the things that I was not.", x1, 750)
				appearsWordByWord("All the things that I was not.", x1-150, 780, 35, 255, keepingTime+5000)	
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
	
	sceneNum9() {
	background (colors [1])
	appearsWordByWord("One day, we went to", margin, 200, 60, 255, keepingTime)	
		appearsWordByWord("Coral Lake.", margin, 275, 60, colors [2], keepingTime + 2000)	
appearsWordByWord("She took", margin, 400, 60, 255, keepingTime + 4000)	
	appearsWordByWord("two lanterns", margin, 525, 120, colors[2], keepingTime+ 5000)
	appearsWordByWord("out from the back of her car.", margin, 600, 50, 255, keepingTime+ 6000)
		if(millis() >= keepingTime + 8000){
			
				image (arrowPurple, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}	
}
	
	sceneNum10() {
		background (colors[0])
		appearsWordByWord("A few weeks later we got into a", margin, 200, 60, colors [1], keepingTime)	
		push() 
		textAlign(CENTER)
		translate (width/2, height/2)
		rotate (angle)
		appearsWordByWord("Big Fight", 0, 0, 150, colors [2], keepingTime + 1000)
		pop()
		angle += angleIncrement;
		angleIncrement +=0.0003;
		
		if (millis() >= keepingTime +7000)
		{
			background (colors[0])
			angle = 0.01;
			appearsWordByWord("I felt like I was being taken", margin, 175, 150, colors [1], keepingTime + 7000)
			appearsWordByWord("for granted", margin, 825, 150, colors [2], keepingTime + 9000)
		}
		
		if (millis() >= keepingTime +10000)
		{
			background (colors[0])
			// angle = 0.01;
		
    // Display all letters
for (let i = 0; i < message.length; i++ ) {

    // Display all letters
    fill (255)
		text (message[i], x, y)
	
	x+= textWidth(message[i])
		// x += random(-2,2);
		// y += random(-2,2);
  }
textSize (50)
			textAlign (CENTER)
text ("like  a  soda  bottle", width/2, 800)
    // If the mouse is pressed the letters shake
    // If not, they return to their original location
  
  
		}
		
		
		
		if (millis() >= keepingTime +15000)
		{
			background (colors[0])
			textAlign (CENTER)
			appearsWordByWord("We both did.", width/2, 800, 100, colors [2], keepingTime + 15000)
		}
		if(millis() >= keepingTime + 19000){
			
				image (arrowYellow, 650, 650, 0.25 * arrowBlue.width, 0.25* arrowBlue.height)
		}	
		

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
	