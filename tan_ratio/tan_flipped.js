function setup() {
  createCanvas(500, 500)
  background(255)
}

function draw() {
  background(255)
  CENTERX = 250;
  CENTERY = 250;
  RADIUS = 100;

  push()

  scale(1.0, -1.0)

  translate(250, -250)

  circle(0, 0, 100)

  pop()

  // let opposite = mouseY - CENTERY

  // let adjacent = mouseX - CENTERX

  // let hypoteneuse = Math.sqrt(
  //     (adjacent ** 2) + (opposite ** 2)
  // )

  // let theta = Math.asin( // inverse sin
  //     opposite / hypoteneuse
  // )

  // console.log(theta)

  // let gradient = Math.tan(theta)

  // let tan_gradient = -gradient

  // // scale down the triangle made by mouse with the center
  // let triangle_scalar = RADIUS / hypoteneuse

  // // get x and y coords for closest point on edge of circle
  // let circleX = CENTERX + adjacent * triangle_scalar
  // let circleY = CENTERY + opposite * triangle_scalar

  // // calculate y intercept
  // let intercept_y = (tan_gradient * -circleX) + circleY

  // // calculate x intercept
  // // 0 = tan_gradient * x + intercept_y
  // let intercept_x = (-circleY / tan_gradient)

  // // console.log(intercept_x)

  // noFill()

  // push()
  // // draw circle
  // circle(CENTERX, CENTERY, RADIUS * 2, RADIUS * 2)

  // // draw axes
  // line(CENTERX - 150, CENTERY, CENTERX + 150, CENTERY)
  // line(CENTERX, CENTERY - 150, CENTERX, CENTERY + 150)

  // // draw line from center to edge of circle nearest to mouse
  // line(CENTERX, CENTERY, circleX, circleY)

  // // draw line from edge of circle for tangent
  // line(circleX, circleY, intercept_x, 0)

  // stroke(0)
  // fill(0)
  // circle(circleX, circleY, 5, 5)
  // pop()
}