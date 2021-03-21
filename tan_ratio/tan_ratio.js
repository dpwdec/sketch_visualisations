function setup() {
    createCanvas(500, 500)
    background(255)
}

function draw() {
    background(124)
    CENTERX = 250;
    CENTERY = 250;
    RADIUS = 100;

    let opposite = mouseY - CENTERY

    let adjacent = mouseX - CENTERX

    let hypoteneuse = Math.sqrt(
        (adjacent ** 2) + (opposite ** 2)
    )

    let theta = Math.asin( // inverse sin
        opposite / hypoteneuse
    )

    let gradient = Math.sin(theta) / Math.cos(theta)

    let tan_gradient = - (1.0 / gradient)

    // console.log(`Theta degrees: ${(180 / Math.PI) * theta}`)
    // console.log(gradient)
    // console.log(tan_gradient)

    // scale down the triangle made by mouse with the center
    let triangle_scalar = RADIUS / hypoteneuse

    // get x and y coords for closest point on edge of circle
    // let c_x = CENTERX + adjacent
    // let c_y = CENTERY + opposite
    let circleX = CENTERX + adjacent * triangle_scalar
    let circleY = CENTERY + opposite * triangle_scalar

    // calculate y intercept
    // let intercept_y = (tan_gradient * -circleX) + circleY
    let intercept_y = (tan_gradient * -circleX) + circleY


    // = c = y - m * x
    let c = circleY - tan_gradient * circleX

    // x = y - c / m where y = 0
    let intercept_x = (CENTERY - c) / tan_gradient 
    // calculate x intercept
    // 0 = tan_gradient * x + intercept_y
    // let intercept_x = (-opposite / tan_gradient) + adjacent
    // let intercept_x = (-circleY / -tan_gradient) + circleX
    // let intercept_x = (0 - circleY + (tan_gradient * circleX)) / tan_gradient
    // let intercept_x = (0 + (tan_gradient * circleX) - circleY) / tan_gradient

    // l_y_1 = ((tan_gradient * -5000) - (tan_gradient * circleX)) + circleY
    // l_y_2 = ((tan_gradient * 5000) - (tan_gradient * circleX)) + circleY

    let l_y_1 = tan_gradient * (-5000 - circleX) + circleY
    let l_y_2 = tan_gradient * (5000 - circleX) + circleY


    // console.log(intercept_x)

    // console.log(intercept_x)

    noFill()

    push()
    // draw circle
    circle(CENTERX, CENTERY, RADIUS * 2, RADIUS * 2)

    // draw axes
    line(CENTERX - 350, CENTERY, CENTERX + 350, CENTERY)
    line(CENTERX, CENTERY - 350, CENTERX, CENTERY + 350)

    // draw line from center to edge of circle nearest to mouse
    line(CENTERX, CENTERY, circleX, circleY)

    // draw line from edge of circle for tangent
    // if (mouseX < CENTERX) {
    //     intercept_x = -intercept_x
    // }
    line(circleX, circleY, intercept_x, CENTERY)

    // line(-5000, l_y_1, 5000, l_y_2);

    stroke(0)
    fill(0)
    circle(circleX, circleY, 5, 5)
    pop()
}