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
const container = {
    x: 0,
    y: 0,
    width: canvasObj.windowWidth,
    height: canvasObj.windowHeight,
    initialize: () => {
        context.fillStyle = "#fff";
        context.fillRect(0, 0, container.width, container.height);
    }
};

// Action to deal with all the phisics and animations
const action = () => {
    // Initializes the ball container
    container.initialize();
    
    // Loop to deal with the fisics of each ball in the pool
    balls.map(ball => {
        ballObj.draw(context, ball);

        ball.x += ball.vx * ball.t;
        ball.y += ball.vy * (ball.t - 0.5) * ball.a * (ball.t * ball.t);

        ball.vy += ball.a;

        if (ball.x - ball.r + ball.vx < container.x || ball.x + ball.r + ball.vx > container.x + container.width) {
            ball.vx = -ball.vx / 1.1;
            ball.vx = ball.vx / 1.1;
        }

        if (ball.y + ball.r + ball.vy > container.y + container.height || ball.y - ball.r + ball.vy < container.y) {
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