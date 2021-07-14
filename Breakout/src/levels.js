import Brick from './brick.js'

export const level1 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {

            if(brick === 1) {
                bricks.push(new Brick(game, { 
                    x: brickIndex * 80, 
                    y: rowIndex * 24 + 80
                }));
            }

        });
    });

    return bricks;

}