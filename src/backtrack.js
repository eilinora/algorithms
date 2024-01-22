function solveHelper(board, row, col) {
    if (col === 9) {
        row++;
        col = 0;
        if (row === 9) {
            return true; // the board is solved
        }
    }
    if (board[row][col] !== '.') {
        // move onto the next col since already "solved"
        return solveHelper(board, row, col + 1);
    }

    // cycle through values filling in cells
    for (let num = 1; num <= 9; num++) {

        // is valid set the cell, move forward
        if (isValid(board, row, col, num)) {
            
            board[row][col] = num.toString();
            
            if (solveHelper(board, row, col + 1)) {
                return true; // found a solution
            }
            
            board[row][col] = '.'; // backtrack
        }
    }
    return false; // no valid solution found
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num.toString() || board[i][col] === num.toString()) {
            return false; // the number already exists in the row or column
        }
    }
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;
    for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
            if (board[i][j] === num.toString()) {
                return false; // the number already exists in the 3x3 sub-box
            }
        }
    }
    return true;
}

function solveSudoku(board) {
    if (!board || board.length !== 9 || board[0].length !== 9) {
        console.error('Bad board');
        return;
    }
    solveHelper(board, 0, 0);
}


// /* A Backtracking program in
// Javascript to solve Sudoku problem */

// function isSafe(board, row, col, num)
// {
	
// 	// Row has the unique (row-clash)
// 	for(let d = 0; d < board.length; d++)
// 	{
		
// 		// Check if the number we are trying to
// 		// place is already present in
// 		// that row, return false;
// 		if (board[row][d] == num)
// 		{
// 			return false;
// 		}
// 	}

// 	// Column has the unique numbers (column-clash)
// 	for(let r = 0; r < board.length; r++)
// 	{
		
// 		// Check if the number
// 		// we are trying to
// 		// place is already present in
// 		// that column, return false;
// 		if (board[r][col] == num)
// 		{
// 			return false;
// 		}
// 	}

// 	// Corresponding square has
// 	// unique number (box-clash)
// 	let sqrt = Math.floor(Math.sqrt(board.length));
// 	let boxRowStart = row - row % sqrt;
// 	let boxColStart = col - col % sqrt;

// 	for(let r = boxRowStart;
// 			r < boxRowStart + sqrt; r++)
// 	{
// 		for(let d = boxColStart;
// 				d < boxColStart + sqrt; d++)
// 		{
// 			if (board[r][d] == num)
// 			{
// 				return false;
// 			}
// 		}
// 	}

// 	// If there is no clash, it's safe
// 	return true;
// }

// function solveSudoku(board, n)
// {
// 	let row = -1;
// 	let col = -1;
// 	let isEmpty = true;
// 	for(let i = 0; i < n; i++)
// 	{
// 		for(let j = 0; j < n; j++)
// 		{
// 			if (board[i][j] == 0)
// 			{
// 				row = i;
// 				col = j;

// 				// We still have some remaining
// 				// missing values in Sudoku
// 				isEmpty = false;
// 				break;
// 			}
// 		}
// 		if (!isEmpty)
// 		{
// 			break;
// 		}
// 	}

// 	// No empty space left
// 	if (isEmpty)
// 	{
// 		return true;
// 	}
//     console.log('WHAT TO FIND/FIX - row', row, 'col', col);
// 	// Else for each-row backtrack
// 	for(let num = 1; num <= n; num++)
// 	{
// 		if (isSafe(board, row, col, num))
// 		{
// 			board[row][col] = num;
//             console.log('good value row=', row, 'col=', col, 'num=', num, JSON.stringify(board));
// 			if (solveSudoku(board, n))
// 			{
				
// 				//print(board, n);
// 				return true;
// 			}
// 			else
// 			{
				
// 				// Replace it
//                 console.log('bad value row=', row, 'col=', col, JSON.stringify(board));
// 				board[row][col] = 0;
// 			}
// 		}
// 	}
// 	return false;
// }

function print(board, N) {
	
	// We got the answer, just print it
	for(let r = 0; r < N; r++)
	{
        let row = '';
		for(let d = 0; d < N; d++)
		{
			row += board[r][d] + ' ';
		}
        console.log(row);

		if ((r + 1) % Math.floor(Math.sqrt(N)) == 0)
		{
			// document.write("");
		}
	}
}

// // Driver Code
// let board = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
// 			[ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
// 			[ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
// 			[ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
// 			[ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
// 			[ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
// 			[ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
// 			[ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
// 			[ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
		
// let N = board.length;

// if (solveSudoku(board, N))
// {
	
// 	// Print solution
// 	print(board, N);
// }
// else
// {
// 	console.log("No solution");
// }


// Driver Code
let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]];
solveSudoku(board);

print(board, board.length);

// // This code is contributed by avanitrachhadiya2155
