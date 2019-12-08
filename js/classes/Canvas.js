export class Canvas {
    constructor() {
        this.windowWidth = Math.floor(window.innerWidth - 30);
        this.windowHeight = window.innerHeight;
        this.containerId = 'canvas';
        this.canvasId = 'prozis-canvas';
        this.canvasTemplate = '<canvas id="'+ this.canvasId +'" height="'+ this.windowHeight +'" width="'+ this.windowWidth +'"></canvas>';
        this.FPS = 30;
    }

    // Initializes the canvas with the setted defaults
    initialize() {
        document.getElementById(this.containerId).innerHTML = this.canvasTemplate;
    }
}