class Ball {
    constructor() {
        this.minRadius = 25;
        this.maxRadius = 50;
        this.minSpeed = -15;
        this.maxSpeed = 15;
        this.minColor = 0;
        this.maxColor = 255;
        this.time = 2;
        this.gravity = 0.8;
    }

    // Creates the ball defaults
    create(e) {
        return {
            x: e.clientX,
            y: e.clientY,
            r: this.rangeRandomizer(this.minRadius, this.maxRadius),
            vx: this.rangeRandomizer(this.minSpeed, this.maxSpeed),
            vy: this.rangeRandomizer(this.minSpeed, this.maxSpeed),
            t: this.time,
            a: this.gravity,
            red: this.rangeRandomizer(this.minColor, this.maxColor),
            green: this.rangeRandomizer(this.minColor, this.maxColor),
            blue: this.rangeRandomizer(this.minColor, this.maxColor),
        }
    }

    // Draws the ball in the canvas
    draw(ball) {
        context.beginPath();
        context.fillStyle = 'rgb('+ ball.red +', '+ ball.green +', '+ ball.blue +')';
        context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
        context.fill()
        context.closePath();
    }

    rangeRandomizer(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
}