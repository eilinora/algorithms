function isValid(row, col, n, board){
    // check if there is a queen above the head.
    for (let i=0; i<row; i++){
        if (board[i][col] == 'Q') return false;
    }
    //check if there is a queen on the right-top corner.
    for (let i=row-1, j=col+1; i>=0&&j<n; i--, j++){
        if (board[i][j] == 'Q') return false;        
    }
    // check if there is a queen on the left-top corner.
    for (let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
        if (board[i][j] == 'Q') return false;        
    }
    return true;
}

var solveNQueens = function(n) {
    let result = [];
    // Initiate board. the initial value should be "."
    let board = new Array(n)
    for (let i=0; i< n; i++){
        board[i]= new Array(n).fill('.');
    }
    console.log('board', board);
    

    
    function solve(row) {
        // when we reached the last row of the board. end the track.
        if (row == n){
            // rearrange the result as requested.
            result.push([...board].map(row => row.join('')));
            console.log('done...');
            return;
        }

        // track from left to right.
        for (let col = 0; col < n; col++){
            console.log('evaluating... row=', row, 'col=', col);
            if (!isValid(row, col, n, board)) {
                continue;
            }

            board[row][col] = "Q";
            console.log('valid... row=', row, 'col=', col, board);

            // go into the next row.
            solve(row+1);
            
            console.log('-- back tracking... row=', row, 'col=', col, board);
            board[row][col] = ".";
        }
    } // end solve

    // track from top to bottom.
    solve(0);
    return result;
}

console.log(solveNQueens(4));