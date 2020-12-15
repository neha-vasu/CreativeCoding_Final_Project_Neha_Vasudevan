let x, y, message, letters;
let margin = 150;

function setup() {
	createCanvas(900, 900);
	background('#17308d');
	
	message = "I blew up";

  // Initialize Letters at the correct x location
  x = margin;
	y = 250;
	// let letters = split(message, '');
	// for (let i = 0; i < message.length; i++ ) { 
	// 	x+=textWidth(message[i]);
	// loc1[i] = x;
	// }

  // for (let i = 0; i < message.length; i ++ ) {
    // Letter objects are initialized with their location within the String as well as what character they should display.
    // letters[i] = message.charAt(i); 
	// x += textWidth(message[i]);
	// }
}


function draw() {

			background (0)
			// angle = 0.01;
		textSize (150)
    // Display all letters
for (let i = 0; i < message.length; i++ ) {

    // Display all letters
    fill (255)
		text (message[i], x+=random(-10,10), y+=random(-10,10))
	 x += textWidth(message[i]);
	
		// x += random(-2,2);
		// y += random(-2,2);
  }
	
	x = margin;
}
