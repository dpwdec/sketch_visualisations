function setup() {
    createCanvas(500, 500)
    background(255)
}

function draw() {
    background(255)
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

    noFill()

    push()
    // draw circle
    circle(CENTERX, CENTERY, RADIUS * 2, RADIUS * 2)

    // draw axes
    let triangle_scalar = RADIUS / hypoteneuse
    line(CENTERX - 150, CENTERY, CENTERX + 150, CENTERY)
    line(CENTERX, CENTERY - 150, CENTERX, CENTERY + 150)

    // draw line from mouse to edge of circle
    circleX = CENTERX + adjacent * triangle_scalar
    circleY = CENTERY + opposite * triangle_scalar

    line(CENTERX, CENTERY, circleX, circleY)

    stroke(0)
    fill(0)
    circle(circleX, circleY, 5, 5)
    pop()
}