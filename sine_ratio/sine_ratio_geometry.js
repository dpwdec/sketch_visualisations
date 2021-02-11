// CENTERX = 250;
// CENTERY = 250;
// RADIUS = 100;

scaleView = false;

function setup() {
    createCanvas(500, 500)
    background(255)
}

function draw() {
    background(255)
    CENTERX = 250;
    CENTERY = 250;
    RADIUS = 100;

    opposite = mouseY - CENTERY

    adjacent = mouseX - CENTERX

    distance = Math.sqrt(
        (adjacent ** 2) + (opposite ** 2)
    )

    theta = Math.asin( // inverse sin
        opposite / distance
    )

    noFill()

    push()
    if (true) {
        scale(4.0) 
        if (adjacent > 0) {
            translate(-265, -160)
        } else {
            translate(-100, -160)
        }
    }
    circle(CENTERX, CENTERY, RADIUS * 2, RADIUS * 2)
    line(CENTERX - 150, CENTERY, CENTERX + 150, CENTERY)
    line(CENTERX, CENTERY - 150, CENTERX, CENTERY + 150)

    // console.log(theta)
    circleX = adjacent > 0 ? CENTERX + (RADIUS * Math.cos(theta)) : CENTERX - (RADIUS * Math.cos(theta))
    circleY = CENTERY + (RADIUS * Math.sin(theta))

    line(CENTERX, CENTERY, circleX, circleY)
    
    cordX = adjacent > 0 ? CENTERX + RADIUS : CENTERX - RADIUS
    stroke(255, 0, 0)
    line(circleX, circleY, cordX, CENTERY)

    stroke(0)
    fill(0)
    circle(circleX, circleY, 5, 5)
    pop()

    stroke(255, 0, 0)
    strokeWeight(3.0)
    line(240, 25, 265, 25)
    fill(255, 0, 0)
    textSize(20)
    strokeWeight(1.0)
    text(`Sin(theta):`, 270, 33)
    text(`${Math.sin(theta)}`, 270, 60)
    stroke(0)
    fill(0)
    text("Theta:", 270, 90)
    text(`${theta}`, 270, 120)
}

function mousePressed() {
    scaleView = true
}

function mouseReleased() {
    scaleView = false
}