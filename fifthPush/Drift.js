// I went over this code with our TA, Lilly, until I understood it completely
//reference: https://www.openprocessing.org/sketch/1008429
class Drift {
	constructor(x, y, words, opacity){
		// setting the x and y of where the words are before they split apart
		this.x = x
		this.y = y
		// this is to create a fading effect
		this.opacity = opacity
		
		// this.size = size
		// textSize (this.size)
		
		
		textSize (100)
		// these are the words displayed on screen
		this.words= words;
		
		//this is the array of separate letter the words array wil be translate to
		this.letters = [];
		
		// as the letters drift apart, this array wil hold their positions and velocity will be added to it
		this.letterPos = [];
		
		//these are the random velocities to be added to the position
		this.letterVel = [];
		//vector
		
		//this is where the words start, later the word will be translated so the word shows up where we want it to
		this.pos = createVector(0,0);
		
		// when this is true the letters drift apart
		this.apart = false;
		
		//this initializes each letter in the array
		for(let i = 0; i < this.words.length;i++)
		{
			
			this.letters.push(this.words[i]);
			
			//temporary position is to store the previous position before velocity and textWidth are added to it
			this.tempPos = createVector(this.pos.x,this.pos.y);
			
			// this part is to make the temporary position the actual letter position
			this.letterPos.push(this.tempPos);
			
			//this is to initialize a random velocity
			this.tempVel = createVector(random(-2,2),random(-2,2));
			
			// this is to store the temporary velocity as the actual velocirty
			this.letterVel.push(this.tempVel);
			
			//this is to make sure that the letters show up one after the other
			this.pos.x+=textWidth(this.letters[i]);
		
		}
		//array
	
	//	console.log(this.letterPositions);
	}
	driftApart(){
	
		push();
		translate(this.x,this.y);
		for(let i = 0; i < this.words.length;i++)
		{
			if(this.apart == true)
			{
				// this adds letter velocity to the letter position
			this.letterPos[i].add(this.letterVel[i]);
			}
		
		fill (255, this.opacity)
			// textSize(this.size)
			textFont (myFont)
			// placing the text on the screen 
			text(this.letters[i], this.letterPos[i].x,this.letterPos[i].y);
		}
		pop();
		
		// this is to make sure opacity only decreases when the word starts to drift apart
		if (millis() > timing10 +14000+2000) 
		{
		this.opacity--;
		}
		// if (this.size > 20)
		// {
		// this.size-= 1;
		// }
	}
	
}




