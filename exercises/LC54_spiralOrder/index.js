function spiralOrder(matrix) {

    let rows = matrix.length;
    let columns = matrix[0].length;
    
    let i = 0;
    let j = 0;

    let result = [];

    while (rows > 0 && columns > 0) {
        let firstEndj = j + columns - 1;
        let secondEndi = i + rows - 1;
        let thirdEndj = j;
        let forthEndi = i + 1;
        
        while (j <= firstEndj) {
            result.push(matrix[i][j]);
            if(j == firstEndj) break;
            j++;
        }

        i++; // move down
        if(i > secondEndi) break;
        while (i <= secondEndi) {
            result.push(matrix[i][j]);
            if (i == secondEndi) break;
            i++;
        }
        
        j--;//move left
        if(j < thirdEndj) break;
        while (j >= thirdEndj) {
            result.push(matrix[i][j]);
            if (j == thirdEndj) break;
            j--;
        }

        i--; // move up
        if(i < forthEndi) break;
        while (i >= forthEndi) {
            result.push(matrix[i][j]);
            if (i == forthEndi) break;
            i--;
        }

        j++; // move right
        rows -= 2; 
        columns -= 2;
    }

    return result;
}

module.exports = spiralOrder;
