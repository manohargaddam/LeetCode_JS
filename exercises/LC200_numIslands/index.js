function numIslands(grid) {
    let marker = 0;
    let memo = Array(grid.length).fill(0).map(x => Array(grid[0].length).fill(0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '0' || memo[i][j]) {
                continue;
            }
            marker++;
            travelGrid(grid, i, j, marker, memo);
        }
    }

    function travelGrid(grid, i, j, marker, memo) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
        if (grid[i][j] === '0' || memo[i][j]) return;

        memo[i][j] = marker;

        travelGrid(grid, i, j + 1, marker, memo);
        travelGrid(grid, i + 1, j, marker, memo);
        travelGrid(grid, i, j - 1, marker, memo);
        travelGrid(grid, i - 1, j, marker, memo);
    }

    return marker;
}

module.exports = numIslands;
