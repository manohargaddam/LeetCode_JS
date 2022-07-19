function maxArea(height) {
    let maxArea = 0;
    let left = 0, right = height.length -1;
    while (left < right) {
        let area = (right - left) * Math.min(height[right], height[left]);
        maxArea = Math.max(maxArea, area);
        height[right] > height[left] ? left++: right--;
    }
    return maxArea;
}

module.exports = maxArea;
