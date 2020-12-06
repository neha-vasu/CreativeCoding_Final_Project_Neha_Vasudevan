class Drop {
  constructor (position)
  {
    this.position = position.copy()
    // this.positionx = x_;
    // this.positiony = y_;
this.lightPink = color('#f4bae5')
     this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random (-1, 1), random (-1, 1));
  
  this.lifespan = 255;
  }


// updating and displaying all the particles
run() {
  this.update();
  this.display();
}


// Method to update position
update () {
  

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 10;
}

// Method to display
display(){
  

  // stroke('#f4bae5', this.lifespan);
  // strokeWeight(2)
  noStroke();
  fill(255, 255, 255, this.lifespan );
	// fill (255)
  text("NUMB", parseInt (this.position.x), parseInt(this.position.y));
 
}

isDead(){
  return this.lifespan < 0;
}

}
