const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const midIndex = Math.floor(arr.length/2);

    const lArr = arr.slice(0, midIndex);
    const rArr = arr.slice(midIndex);

    const lA = mergeSort(lArr);
    const rA = mergeSort(rArr);

    return merge(lA, rA);
}

const merge = (left, right) => {
    let lLen = 0, rLen = 0;
    const result = [];


    while (lLen < left.length && rLen < right.length) {
        if (left[lLen] < right[rLen]) {
            result.push(left[lLen]);
            lLen++;
        } else {
            result.push(right[rLen]);
            rLen++;
        }
    }

    return [...result, ...left.slice(lLen), ...right.slice(rLen)];
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums);
};