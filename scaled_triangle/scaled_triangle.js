function setup() {
  createCanvas(500, 500)
  background(255)
}

function draw() {
  background(255)

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

  let tan_adjacent = RADIUS

  let tan_hypoteneuse = tan_adjacent / Math.cos(theta)

  let tan_opposite = tan_hypoteneuse * Math.sin(theta)

  push()

  // draw H
  line(CENTERX, CENTERY, CENTERX + tan_adjacent, CENTERY + tan_opposite)

  // draw A
  line(CENTERX, CENTERY, CENTERX + tan_adjacent, CENTERY)

  // draw O
  line(CENTERX + tan_adjacent, CENTERY, CENTERX + tan_adjacent, CENTERY + tan_opposite)

  pop()

  // let opposite = mouseY - CENTERY

  // let adjacent = mouseX - CENTERX

  // let hypoteneuse = Math.sqrt(
  //     (adjacent ** 2) + (opposite ** 2)
  // )

  // let theta = Math.asin( // inverse sin
  //     opposite / hypoteneuse
  // )

  // let tan_adjacent = 1.0

  // let tan_hypoteneuse = tan_adjacent / Math.cos(theta)

  // let tan_opposite

  // noFill()

  // push()
  // // draw circle
  // circle(CENTERX, CENTERY, RADIUS * 2, RADIUS * 2)

  // // draw axes
  // let triangle_scalar = RADIUS / hypoteneuse
  // line(CENTERX - 150, CENTERY, CENTERX + 150, CENTERY)
  // line(CENTERX, CENTERY - 150, CENTERX, CENTERY + 150)

  // // draw line from mouse to edge of circle
  // circleX = CENTERX + adjacent * triangle_scalar
  // circleY = CENTERY + opposite * triangle_scalar

  // line(CENTERX, CENTERY, circleX, circleY)

  // stroke(0)
  // fill(0)
  // circle(circleX, circleY, 5, 5)
  // pop()
}