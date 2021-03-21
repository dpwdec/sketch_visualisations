function setup() {
  createCanvas(500, 500)
  background(255)
}

function draw() {
  background(255)
  stroke(0)
  fill(0)

  center_x = 250
  center_y = 250

  // draw line based on cursor
  gradient = (center_y -  mouseY) / (center_x - mouseX)

  point_1_y = gradient * (-500 - center_x) + center_y
  point_2_y = gradient * (500 - center_x) + center_y

  line(-500, point_1_y, 500, point_2_y)

  // draw tangent line to cursor line
  tangent_gradient = -(1 / gradient)

  point_1_y = tangent_gradient * (-500 - center_x) + center_y
  point_2_y = tangent_gradient * (500 - center_x) + center_y

  stroke(255, 0, 0)
  line(-500, point_1_y, 500, point_2_y)

  stroke(0, 0, 0)
  text(`Gradient: ${gradient}`, 20, 20)
  stroke(125, 0, 0)
  fill(125, 0, 0)
  text(`Tangent: ${tangent_gradient}`, 20, 40)
}