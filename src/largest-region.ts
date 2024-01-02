// https://www.geeksforgeeks.org/find-length-largest-region-boolean-matrix/?ref=lbp
/*
Consider a matrix, where each cell contains either a ‘0’ or a ‘1’, and any cell containing 
a 1 is called a filled cell. Two cells are said to be connected if they are adjacent to each 
other horizontally, vertically, or diagonally. If one or more filled cells are also connected, 
they form a region. find the size of the largest region.
*/

const input: number[][] = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,0,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,1,0,0,1,1,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]];
// Output: 11

const input2: number[][] = [
    [0, 0, 1, 1, 0], 
    [1, 0, 1, 1, 0], 
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1]
];
// Output: 6

