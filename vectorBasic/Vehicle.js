class Vehicle{
	
	constructor(x, y, img){
		this.acc = createVector(0,0)
		this.vel = createVector (0,-2)
		this.pos = createVector(x,y)
		this.r = 6;
		this.maxspeed = 8;
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
		let theta = this.vel.heading() + PI/2
		fill (127)
		stroke(200)
		strokeWeight(1)
		push()
		translate (this.pos.x, this.pos.y)
		// rotate (theta)
		
		// vertex(0,-this.r *2)
		// vertex(-this.r, this.r*2)
		// vertex(this.r, this.r*2)
		image (this.img, 0, 0, 0.5 * logo.width, 0.5* logo.height)
		
		pop()
		
	}
	
	
		
}