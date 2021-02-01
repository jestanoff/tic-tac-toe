/* eslint-disable */
import Stats from '../vendors/stats';

export default function () {
  (function (window) {
    const Particle = function (x, y, speed, direction) {
      this.initialize(x, y, speed, direction);
    };

    const p = Particle.prototype;

    p.initialize = function (x, y, speed, direction) {
      this.position = new Vector(x, y);
      this.velocity = new Vector(0, 0);
      this.velocity.set(speed, direction);
      this.gravity = new Vector(0, 0);
      this.friction = 1;

      return this;
    };

    p.setGravity = function (gravity) {
      this.gravity = new Vector(0, gravity);
    };

    p.setFriction = function (friction) {
      this.friction = friction;
    };

    p.accelerate = function (accel) {
      this.velocity.add(accel);
    };

    p.update = function () {
      // add gravity
      this.velocity.add(this.gravity);

      // multiply friction
      this.velocity.multiply(this.friction);

      // position
      this.position.add(this.velocity);
    };

    window.Particle = Particle;
  })(window);

  (function (window) {
    const Vector = function (x, y) {
      this.initialize(x, y);
    };

    const p = Vector.prototype;

    p.initialize = function (x, y) {
      this.x = x || 0;
      this.y = y || 0;

      return this;
    };

    p.set = function (length, angle) {
      this.x = length * Math.cos(angle);
      this.y = length * Math.sin(angle);
    };

    p.set2 = function (x, y) {
      this.x = x;
      this.y = y;
    };

    p.getAngle = function () {
      return Math.atan2(this.y, this.x);
    };

    p.getLength = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    p.add = function (vector) {
      this.x += vector.x;
      this.y += vector.y;
    };

    p.multiply = function (value) {
      this.x *= value;
      this.y *= value;
    };

    window.Vector = Vector;
  })(window);

  const canvas = document.getElementById('canvas');
  const mainContainer = document.getElementById('main-container');
  let context = canvas.getContext('2d');
  canvas.width = mainContainer.offsetWidth;
  canvas.height = mainContainer.offsetHeight;
  const width = canvas.width;
  const height = canvas.height;
  let particles = [];
  let fireforks = [];
  let mouseX = 0;
  let mouseY = 0;
  const size = 3;
  let hue = 0;
  let count = 0;
  const dense = 2;

  const stats = new Stats();

  document.body.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function createParticle() {
    const p = new Particle(width / 2, height, 10 + 5 * Math.random(), (1.4 + Math.random() * 0.2) * Math.PI);
    p.size = size / 2;
    p.hue = hue;
    p.lightness = 100;
    p.setGravity(0.1);
    p.setFriction(0.98);

    particles.push(p);
  }

  function createFirefork(x, y, _size, _hue) {
    const p = new Particle(x, y, 6 + 4 * Math.random(), Math.random() * 2 * Math.PI);
    p.size = _size;
    p.hue = _hue;
    p.lightness = 40 + 40 * Math.random();
    p.setGravity(0.1);
    p.setFriction(0.95);

    fireforks.push(p);
  }

  const timer = window.setInterval(() => {
    let i;

    if (count % 2 === 0) {
      for (i = 1; i <= dense; i += 1) {
        createParticle();
      }
    }

    if (count % 3 === 0) {
      for (i = 1; i <= dense; i += 1) {
        createParticle();
      }
    }

    if (count % 5 === 0) {
      for (i = 1; i <= dense; i += 1) {
        createParticle();
      }
    }

    count += 1;
  }, 500);

  function update() {
    stats.begin();

    context.clearRect(0, 0, canvas.width, canvas.height);

    let i;
    let p;
    let length;
    let j;
    let f;
    const reducedParticles = [];
    const reducedFireworks = [];

    hue += 0.5;

    for (i = 0, length = particles.length; i < length; i += 1) {
      p = particles[i];

      p.update();

      if (p.position.x > 0 && p.position.x < width && p.position.y < height && !p.explode) {
        reducedParticles.push(p);
      }
    }

    particles = reducedParticles;

    for (i = 0, length = particles.length; i < length; i += 1) {
      p = particles[i];

      p.size += 0.015;
      p.lightness -= 0.3;
      p.hue += 1;

      if (
        Math.random() < 0.001 ||
        Math.sqrt(Math.pow(mouseX - p.position.x, 2) + Math.pow(mouseY - p.position.y, 2)) < 3 * p.size
      ) {
        p.explode = true;

        for (j = 0; j < 50; j += 1) {
          createFirefork(p.position.x, p.position.y, p.size, p.hue);
        }
      }

      context.beginPath();
      context.arc(p.position.x, p.position.y, p.size, 0, Math.PI * 2, false);
      context.fillStyle = `hsl(${p.hue},100%, ${p.lightness}%)`;
      context.fill();
    }

    for (i = 0; i < fireforks.length; i += 1) {
      f = fireforks[i];

      if (f.lightness > 0) {
        reducedFireworks.push(f);
      }
    }

    fireforks = reducedFireworks;

    for (i = 0; i < fireforks.length; i += 1) {
      f = fireforks[i];

      f.update();

      f.lightness -= 0.5;

      context.beginPath();
      context.arc(f.position.x, f.position.y, f.size, 0, Math.PI * 2, false);
      context.fillStyle = `hsl(${f.hue},100%, ${f.lightness}%)`;
      context.fill();
    }

    stats.end();

    requestAnimationFrame(update);
  }

  update();

  setTimeout(() => {
    clearInterval(timer);
  }, 30000);
}
