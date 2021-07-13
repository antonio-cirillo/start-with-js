export default class InputHandler {

    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch(event.keyCode) {
                case 37: // Move left
                    paddle.moveLeft();
                    break;
                case 39: // Move right
                    paddle.moveRight();
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
                case 37: 
                case 39:
                    paddle.stop();
                    break;
            }
        });
    }

}