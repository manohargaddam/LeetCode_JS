function setZeroes(matrix) {
    let rows = Array(matrix.length).fill(false);
    let columns = Array(matrix[0].length).fill(false);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = columns[j] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rows[i] || columns[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

module.exports = setZeroes;
