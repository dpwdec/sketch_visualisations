function setup() {
  createCanvas(500, 500)
  background(255)
}

function draw() {
  background(255)

  push()


  scale(1.0, -1.0)

  translate(0, -500)


  CENTERX = 250;
  CENTERY = 250;
  RADIUS = 100;


  let theta = Math.PI / 6.0

  let opposite = RADIUS * Math.sin(theta)

  let adjacent = RADIUS * Math.cos(theta)

  // draw H
  line(CENTERX, CENTERY, CENTERX + adjacent, CENTERY + opposite)

  // draw A
  line(CENTERX, CENTERY, CENTERX + adjacent, CENTERY)

  // draw O
  line(CENTERX + adjacent, CENTERY, CENTERX + adjacent, CENTERY + opposite)

  // for(var i = 0; i < 500; i += 10) {
  //   for(var j = 0; j < 500; j += 10) {
  //     circle(i, j, 5, 5)
  //   }
  // }

  pop()
}