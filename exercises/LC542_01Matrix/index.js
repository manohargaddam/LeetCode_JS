
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) continue;

            let d1 = i >= 1 ? mat[i - 1][j] : Infinity;
            let d2 = j >= 1 ? mat[i][j - 1] : Infinity;

            mat[i][j] = Math.min(d1, d2) + 1;
        }
    }

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j] <= 1) continue;

            let d1 = i < mat.length - 1 ? mat[i + 1][j] : Infinity;
            let d2 = j < mat[0].length - 1 ? mat[i][j + 1] : Infinity;

            mat[i][j] = Math.min(mat[i][j] - 1, d1, d2) + 1;
        }
    }

    return mat;
};


var updateMatrixBFS = function (mat) {
    const Queue = require('../data-strctures/Queue');
    let q = new Queue();
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                q.enq([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }

    let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    while (!q.isEmpty()) {
        let [currenti, currentj] = q.deq();
        let cost = mat[currenti][currentj];

        for (let [i, j] of dir) {
            i += currenti;
            j += currentj;
            if (i < 0 || j < 0 || i == mat.length || j == mat[0].length || mat[i][j] != -1) {
                continue;
            }
            mat[i][j] = cost + 1;
            q.enq([i,j]);
        }
    }

    return mat;
}


console.log(updateMatrixBFS([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));