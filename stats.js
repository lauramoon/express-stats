/** functions for stats operations
 * given a string of numbers separated by commas
 */

 const ExpressError = require('./expressError');

function notNums(numString) {
    const nums = numString.split(',');
    for (num of nums) {
        if (isNaN(num)) {
            return num;
        }
    }
    return false;
}

function checkNums(numString) {
    if (!numString) throw new ExpressError("nums are required", 400);
    const notNum = notNums(numString);
    if (notNum) throw new ExpressError(`${notNum} is not a number`);
}

function mean(numString) {
    const nums = numString.split(',');
    const total = nums.reduce((acc, num) => acc + parseFloat(num), 0);
    return total/nums.length;
}

// for an even number of numbers, the higher of the middle two is returned
function median(numString) {
    let nums = numString.split(',');
    nums = nums.map((num) => parseFloat(num));
    nums.sort(function(a, b){return a-b});
    const middle = Math.floor(nums.length/2);
    return nums[middle];
}

// If more than one number have the same highest number of instances,
// the lowest of those numbers is returned
function mode(numString) {
    let nums = numString.split(',');
    nums = nums.map((num) => parseFloat(num));
    nums.sort(function(a, b){return a-b});
    let currNum = nums[0];
    let currAmt = 0;
    let maxAmt = 0;
    let maxNum = nums[0];
    for (num of nums) {
        currAmt = (num === currNum) ? currAmt + 1 : 1;
        if (currAmt > maxAmt) {
            maxAmt = currAmt;
            maxNum = num;
        }
        currNum = num;
    }
    return maxNum;
}

module.exports = { checkNums, mean, median, mode }