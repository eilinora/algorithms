const qsort = (arr: number[]) => {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr.shift();
    const less = arr.reduce((acc, v) => {
        if (pivot >= v) {
            return [...acc, v];
        }
        return acc;
    }, [] as number[]);
    const more = arr.reduce((acc, v) => {
        if (v > pivot) {
            return [...acc, v];
        }

        return acc;
    }, [] as number[]);

    return [...qsort(less), pivot, ...qsort(more)];
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums: number[]) {
    return qsort(nums);
};