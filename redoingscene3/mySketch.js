scaleUp = 1;
let timing3 = 0;
		let words = 'So I drove around randomly';
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

}
function draw() {
	
	if (millis() > timing3){
		push()
		scale (scaleUp)
		fill (255)
		rectMode (CENTER) 
		rect(0, 0, 20, 20)
	if (scaleUp < 100) {
			scaleUp+=1
			}
		pop()
		}
		if (millis() > timing3 + 3500)
		{	
		background (255)
		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
		textAlign (CENTER)
		textSize (100)
		fill (colors[0])
			textFont(myFont)
			
			text(words, width/2, 400)
		}
		 if (millis() > timing3 + 4000)
		{	
		background (255)
			textSize (45)
			textFont(myFont)
			for(let i = 0; i< words.length; i++){
				
				if (random(10) < 1) {
   text(words[i], random(width), random(height)); 
				}
  }
    
		}
	
// 	background (255)
// 		// appearsWordByWord("So I drove around randomly", 100, 250, 60, colors[1])
// 		textAlign (CENTER)
// 		textSize (60)
// 		fill (colors[0])
// 		text("So I drove around randomly", width/2, 200)
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
		

}