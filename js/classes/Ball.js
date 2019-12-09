export class Ball {
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
    draw(context, ball) {
        context.beginPath();
        context.fillStyle = 'rgb('+ ball.red +', '+ ball.green +', '+ ball.blue +')';
        context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
        context.fill()
        context.closePath();
    }

    action(balls, context, canvasObj) {
        // Initializes the ball container
        canvasObj.initializeContext(context);
        
        // Loop to deal with the fisics of each ball in the pool
        balls.map(ball => {
            ballObj.draw(context, ball);

            ball.x += ball.vx * ball.t;
            ball.y += ball.vy * (ball.t - 0.5) * ball.a * (ball.t * ball.t);

            ball.vy += ball.a;

            if (ball.x - ball.r + ball.vx < 0 || ball.x + ball.r + ball.vx > 0 + canvasObj.windowWidth) {
                ball.vx = -ball.vx / 1.1;
                ball.vx = ball.vx / 1.1;
            }

            if (ball.y + ball.r + ball.vy > 0 + canvasObj.windowHeight || ball.y - ball.r + ball.vy < 0) {
                ball.vy = -ball.vy / 1.1;
                ball.vy = ball.vy / 1.1;
            }
        });
    } 

    // Abstract function to generate a random in a range
    rangeRandomizer(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
}