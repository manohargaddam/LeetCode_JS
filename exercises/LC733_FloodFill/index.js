/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    let toFill = [[sr, sc]];
    let dp = Array(image.length).fill(false).map(v => Array(image[0].length).fill(false));
    let pixelToFlood = image[sr][sc];

    while (toFill.length) {
        let xy = toFill.pop();
        let x = xy[0];
        let y = xy[1];

        if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) continue;
        if (dp[x][y]) continue;
        if (image[x][y] !== pixelToFlood) continue;

        image[x][y] = color;
        dp[x][y] = true;

        toFill.push([x - 1, y]);
        toFill.push([x, y - 1]);
        toFill.push([x + 1, y]);
        toFill.push([x, y + 1]);
    }

    return image;
};