let v;

function preload() {
	logo = loadImage("hellodonutsNoBackgd.png")
}
function setup() {
	createCanvas(900, 900);
	background(100);
	v = new Vehicle (width/2, height/2, logo)
}

function draw() {
	background(51);
	
	let mouse = createVector(mouseX, mouseY);
	fill (127);
	stroke(200);
	strokeWeight(2)
	ellipse(mouse.x, mouse.y, 48, 48)
	
	v.seek(mouse);
	v.update();
	v.display();
}