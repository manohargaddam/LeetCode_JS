function uniquePaths(m, n) {
    if(m == 1 || n == 1) return 1;

    var pathsAtMN = Array(m).fill(0).map(x => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        pathsAtMN[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        pathsAtMN[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            pathsAtMN[i][j] = pathsAtMN[i][j - 1] + pathsAtMN[i - 1][j];
        }
    }
    return pathsAtMN[m-1][n-1];
}

module.exports = uniquePaths;
