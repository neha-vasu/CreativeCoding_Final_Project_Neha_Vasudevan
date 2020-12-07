// I edited the code we learned in class, rewatched the lecture twice, took notes and went over the code with our TA Lilly until I understood it

class Vehicle{
	
	constructor(x, y, img){
		this.acc = createVector(0,0)
		this.vel = createVector (0,-1)
		this.pos = createVector(x,y)
		// this.r = 6;
		this.maxspeed = 4;
		this.maxForce = 0.2;
		this.img = img
		
	}
	
	update() {
		this.vel.add(this.acc)
		this.vel.limit(this.maxspeed)
		this.pos.add(this.vel)
		this.acc.mult(0)
		
	}
	
	applyForce(force) {
		this.acc.add(force)
		
	}
	
	seek(target) {
	var desired = p5.Vector.sub(target, this.pos)
	desired.setMag(this.maxspeed)
		var steer = p5.Vector.sub(desired, this.vel)
		steer.limit(this.maxForce)
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