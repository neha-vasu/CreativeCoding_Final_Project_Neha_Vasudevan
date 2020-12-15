let words2 = ["N", "O", "W"];
class Scene11to20 {
	constructor() {
		let words2 = ["N", "O", "W"];
	}
	
	sceneNum11(){
		// this makes the words "i realize" show up then the letters in the word "Now" show up slowly
		if (millis() > timing11)
		{
			
			background (colors[1])
		appearsWordByWord("I realize", 0, 300, 250, colors [0], timing11)	
		}
		
			if (millis() > timing11 +1600)
		{
			textFont(myFont)
			textSize(250)
	fill(colors[2])
			text(words2[2], textWidth("NO"), 500)
		}
	
	if (millis() > timing11 +1800)
		{
			textSize(250)
	fill(colors[2])
			text(words2[0], 0, 500)
		}
	
	
if (millis() > timing11 +2000)
		{
			textSize(250)
	fill(colors[2])
			text(words2[1], textWidth("N"), 500)
		}
	
		
		
		if (millis() > timing11 + 7000)
		{
			background (colors[1])
			textSize (60)
			fill(colors[2])
  text('that I miss her ', 400, 600);
		}
		
		
		}
// 		background (colors[1]) 
			
// 				appearsWordByWord("Aalia tried to call to apologize but I didn’t pick up. ", margin, 100, 45, colors[0], keepingTime)
// 		   appearsWordByWord("One day she called", margin, 220, 45, colors[0], keepingTime+2500)
// 		if (millis() >= keepingTime +4000)
// 		{
// 			background (colors[1])
// 			// put images here 
			
// 		}
// 		if (millis() >= keepingTime +6000)
// 		{
// 			background (colors[1])
// 			 appearsWordByWord("I was done with her games though so I said I wouldn’t come. ", margin, 160, 45, colors[2], keepingTime+6000)
// 		}
		
		
		
	
	
	sceneNum12() {
		// background (255)
		//  animation(bubble, 300, 300, 0.5*textBub1.width, 0.5*textBub1.height);
		// animation(bubbleFlipped, 600, 300, 0.5*textBub1.width, 0.5*textBub1.height);
	}
	
	

	
	
	
	
	
	
	
	
	
	
	
}