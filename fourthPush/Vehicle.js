// I edited the code we learned in class, rewatched the lecture twice, took notes and went over the code with our TA Lilly until I understood it

class Vehicle{
	// constructor takes in location as well as image 
	constructor(x, y, img){
		this.acc = createVector(0,0)
		// the velocity only in the y direction
		this.vel = createVector (0,-1)
		this.pos = createVector(x,y)
		// this.r = 6;
		// controls maximum speed and force
		this.maxspeed = 4;
		this.maxForce = 0.2;
		this.img = img
		
	}
	
	update() {
		// the vel added to acc
		this.vel.add(this.acc)
		// the vel is limited to 4
		this.vel.limit(this.maxspeed)
		// vel added to pos
		this.pos.add(this.vel)
		// this sets vel back to 0 each time so it doesn't spiral out of control
		this.acc.mult(0)
		
	}
	
	applyForce(force) {
		// force is added to acc
		this.acc.add(force)
		
	}
	
	// the image follows the mouse
	seek(target) {
		// difference of location of target and position
	var desired = p5.Vector.sub(target, this.pos)
	desired.setMag(this.maxspeed)
		// difference of desired and vel
		var steer = p5.Vector.sub(desired, this.vel)
		// limiting steer to maxforce so it doesn't go too fast
		steer.limit(this.maxForce)
		// adding steer to acc
		this.applyForce(steer)
	
	}
	
	display() {
		
		// fill (127)
		// stroke(200)
		// strokeWeight(1)
		push()
		translate (this.pos.x, this.pos.y)
		image (this.img, 0, 0, 0.5 * this.img.width, 0.5* this.img.height)
		
		pop()
		
	}
	
	
		
}