/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    function rottSurroundings(i, j, grid, counter) {
        let dirs = [1, 0, -1, 0, 1];
        let newlyRotten = false;
        for (let k = 0; k < 4; k++) {
            let ni = i + dirs[k];
            let nj = j + dirs[k + 1];
            if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length && grid[ni][nj] === 1) {
                grid[ni][nj] = counter;
                newlyRotten = true;
            }
        }
        return newlyRotten;
    }

    let counter = 2;
    let newlyRotten = false;
    let isGridFullyRotten = true;
    do {
        newlyRotten = false;
        isGridFullyRotten = true;
        counter++;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) isGridFullyRotten = false;
                if (grid[i][j] >= 2 && grid[i][j] < counter) {
                    let localNewlyRotten = rottSurroundings(i, j, grid, counter);
                    newlyRotten = localNewlyRotten ? true : newlyRotten;
                }
            }
        }
    } while (newlyRotten)

    return isGridFullyRotten ? counter - 2 - 1 : -1;
};

orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]);