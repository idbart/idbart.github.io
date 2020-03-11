Vue.component('page-header', {
	template: `
		<div class="header" ref="headWrapper">

		</div>
	`,
	data: function() {
		return {
			particles: [],
			possibleParticleChars: ['}', '{', '@', '$', ';', '#'],
			titleImg: null
		};
	},
	methods: {
		sketch: function(p) {
			p.preload = () => {
				this.titleImg = p.loadImage('assets/photos/websitetitle.png');
			}
			p.setup = () => {
				p.createCanvas(window.innerWidth, window.innerHeight);
				
				var numberOfPartilcles = 0;
				if(window.innerWidth <= 1200)
				{
					numberOfPartilcles = 15;
				}
				else
				{
					numberOfPartilcles = Math.floor(window.innerHeight / 15);
				}

				for(var i = 0; i < numberOfPartilcles; i++)
				{
					var part = new Particle(p, this.possibleParticleChars);
					this.particles.push(part);
				}
			};
			p.draw = () => {
				p.background(74, 124, 142);
				for(particle of this.particles)
				{
					particle.update();
					particle.draw();
					particle.connect(this.particles);
				}

				var imageSizeFactor = (p.width / 2000);
				p.image(this.titleImg, 0, Math.floor(p.height / 3), (this.titleImg.width * imageSizeFactor), (this.titleImg.height * imageSizeFactor));
			};
			p.windowResized = () => { 
				p.resizeCanvas(window.innerWidth, window.innerHeight);
			}
		}
	},
	computed: {

	},
	mounted: function() {
		var drawer = new p5(this.sketch, this.$refs.headWrapper);
	}
});

class Particle 
{
	constructor(p, charList) {
		this.p = p;
		this.position = this.p.createVector(this.p.random(this.p.width), this.p.random(this.p.height));
		this.velocity = this.p.createVector(this.p.random(-5, 5), this.p.random(-4, 4));
		this.char = this._generateChar(charList);
	}
	_generateChar(possibleChars) {
		var index = Math.round(this.p.random(0, possibleChars.length - 1));
		return possibleChars[index];
	}
	draw() {
		this.p.fill(93, 168, 195);
		this.p.textSize(35);
		this.p.text(this.char, this.position.x, this.position.y);
	}
	update() {
		this.detectEdges();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	detectEdges() {
		if(this.position.x < 0 || this.position.x > this.p.width)
		{
			this.velocity.x *= -1;
		}
		if(this.position.y < 0 || this.position.y > this.p.height)
		{
			this.velocity.y *= -1;
		}
	}

	connect(particles) {
		for(particle of particles)
		{
			var distance = this.p.dist(this.position.x, this.position.y, particle.position.x, particle.position.y);
			if(distance < 200)
			{
				this.p.stroke(93, 168, 195);
				this.p.line(this.position.x, this.position.y, particle.position.x, particle.position.y);
			}
		}

		var distanceToMouse = this.p.dist(this.position.x, this.position.y, this.p.mouseX, this.p.mouseY);
		if(distanceToMouse < 300)
		{
			this.p.stroke(93, 168, 195);
			this.p.line(this.position.x, this.position.y, this.p.mouseX, this.p.mouseY);
		}
	}
}
