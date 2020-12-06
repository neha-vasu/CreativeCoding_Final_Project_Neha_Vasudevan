class Numb {
constructor(){
}
 
  fall() {
		
x = random(900);
  y = 0;
    //speed of fall
    y = y + 10;
    mappedVal = map(y, 0, 900, 0, 60);
fade = map(y, 0,900, 255, 0) 
		textSize (mappedVal)
    fill(255, fade);
    text("NUMB", x, y);
		constrain (y, 0, 900)
		
  }
}
