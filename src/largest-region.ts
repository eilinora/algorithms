// https://www.geeksforgeeks.org/find-length-largest-region-boolean-matrix/?ref=lbp
/*
Consider a matrix, where each cell contains either a ‘0’ or a ‘1’, and any cell containing 
a 1 is called a filled cell. Two cells are said to be connected if they are adjacent to each 
other horizontally, vertically, or diagonally. If one or more filled cells are also connected, 
they form a region. find the size of the largest region.
*/
const vertices = [
// row, col,
    [-1,  -1],
    [-1,   0],
    [-1,   1],
    [0,  -1],
    // [0,   0], // ignoring cause this is wehre we are starting
    [0,   1],
    [1,  -1],
    [1,   0],
    [1,   1],
];
const dfs = (matrix: number[][], r: number, c: number, rEdge: number, cEdge: number, visited: string[], count: number): number => {
    // console.log ('dig in', r, c, 'count', count);
    for (let i = 0; i < vertices.length; i++) {
        const rr = r+vertices[i][0];
        const cc = c+vertices[i][1];
        const isValidPosition = rr >= 0 && rr < rEdge && cc >= 0 && cc < cEdge;

        if (visited.includes(`${rr},${cc}`)) {
            // console.log('eject', `${rr},${cc}`);
            continue;
        }
        visited.push(`${rr},${cc}`);

        if (!isValidPosition) {
            // console.log('invalid', `${rr},${cc}`);
            continue;
        }

        // console.log('visited', `${rr},${cc}`, matrix[rr][cc]);
        if (matrix[rr][cc] === 1) {
            // console.log('r', r, 'c', c, 'vertices[i]', vertices[i], 'rr', rr, 'cc', cc, 'value', matrix[rr][cc], visited);
            count = dfs(matrix, rr, cc, rEdge, cEdge, visited, count+1);
        }
    }
    return count;
}


const findLargestRegion = (matrix: number[][]): number => {
    let highest = 0;
    const rEdge = matrix.length;
    const cEdge = matrix[0].length;

    for (let i = 0; i < rEdge; i++) {
        for (let j = 0; j < cEdge; j++) {
            if (matrix[i][j] === 1) {
                // console.log('--- next cell');
                // console.log('position ', 'row', i, 'col', j, 'value', matrix[i][j]);
                const regionSize = dfs(matrix, i, j, rEdge, cEdge, [`${i},${j}`], 1);
                if (regionSize > highest) {
                    highest = regionSize;
                }
                // console.log('regionSize', regionSize);
            }
        }
    }

    return highest;
}

const input: number[][] = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0], // 0
    [0,0,0,0,0,0,0,1,1,1,0,0,0], // 1
    [0,0,0,0,0,0,0,0,0,0,0,0,0], // 2
    [0,1,1,0,1,0,0,0,1,0,1,0,0], // 3
    [0,1,0,0,1,1,0,0,1,1,1,0,0], // 4
    [0,1,0,0,1,1,0,0,0,0,1,0,0], // 5
    [0,0,0,0,0,0,0,1,1,1,0,0,0], // 6
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]; // 7
// Output: 11

// const output1 = findLargestRegion(input);
// console.log('output 1', output1);


const input2: number[][] = [
    [0, 0, 1, 1, 0], 
    [1, 0, 1, 1, 0], 
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1]
];
// Output: 6
const output2 = findLargestRegion(input2);
console.log('output 2', output2);
