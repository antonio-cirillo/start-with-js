export function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.size + ball.position.y;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if(bottomOfBall >= topOfObject && 
            ball.position.x >= leftSideOfObject &&
            ball.position.x + ball.size <= rightSideOfObject &&
            topOfBall <= bottomOfObject) {
        return true;
    } else return false;

}