/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;

        
        if (area > maxArea) {
            maxArea = area;
        }

        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7])); 
console.log(maxArea([1,1]));               