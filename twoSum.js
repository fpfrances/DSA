nums = [2, 7, 10, 20];

// One way of solving it
/*
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
*/

// Another way of solving, but using hash
function twoSum(nums, target) {
    const numMap = {}

    for ( i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]
        if ( compliment in numMap && numMap[compliment] != i) {
            return [numMap[compliment], i]
        }
        numMap[nums[i]] = i
    }
    return []
}

console.log(twoSum(nums, 9)); // Output: [0, 1]
console.log(twoSum(nums, 30)); // Output: [2, 3]
