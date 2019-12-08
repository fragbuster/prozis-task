import { Canvas } from './classes/Canvas';
import { Ball } from './classes/Ball';

const canvasObj = new Canvas();
const ballObj = new Ball();

// Render the canvas in the DOM
canvasObj.initialize();

const canvas = document.getElementById(canvasObj.canvasId);
const context = canvas.getContext("2d");

const balls = [];

// Settup for the balls container

// Action to deal with all the phisics and animations
const action = () => {
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

// On click adds a new ball to the pool
canvas.addEventListener('click', (e) => {
    balls.push(ballObj.create(e));
});

// Loop the action
setInterval(action, 1000/canvasObj.FPS);