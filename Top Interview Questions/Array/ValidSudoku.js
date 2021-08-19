/**
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *  Each row must contain the digits 1-9 without repetition.
 *  Each column must contain the digits 1-9 without repetition.
 *  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 *  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 *
 */
function isValidSudoku(board) {
    var isValid = true;
    var gridRow = 0;
    var gridCol = 0;
    // Get and check rows
    for (var i = 0; i < board.length; i++) {
        var rowCheck = {};
        var colCheck = {};
        var gridCheck = {};
        for (var j = 0; j < board[i].length; j++) {
            // rowCheck
            if (board[i][j] !== '.') {
                if (rowCheck[board[i][j]] === true) {
                    // console.log("row");
                    return false;
                }
                rowCheck[board[i][j]] = true;
            }
            // colCheck
            if (board[j][i] !== '.') {
                // console.log(`j: ${j} - i: ${i} - board[j][i]: ${board[j][i]}`);
                // console.log(colCheck);
                if (colCheck[board[j][i]] === true) {
                    return false;
                }
                colCheck[board[j][i]] = true;
            }
            // rowCheck
            // console.log(board[Math.floor(i/3.0)][Math.floor(j/3.0)]);
            // console.log('j ' + j%3)
            console.log("i: " + i + ", j: " + j + " === gridRow: " + gridRow + ", gridCol: " + gridCol + " === board[" + i + "][" + j + "]: (" + ((i % 3) + gridRow - i) + "," + ((j % 3) + gridCol) + ")");
            if (j % 3 === 2) {
                gridRow++;
            }
        }
        gridCol += 3;
        if (i % 3 === 2) {
            gridCol = 0;
        }
        if (i / 3 % 0) {
            gridRow = 0;
        }
    }
    return isValid;
}
;
// first 2 rows
// board[0]
// board[1]
// ...
// board[9]
// col
// board[0][0]
// board[1][0]
// board[2][0]
// board[3][0]
// 1st gridRow       
// board[0][0]
// board[0][1]
// board[0][2]
// board[1][0]
// board[1][1]
// board[1][2]
// board[2][0]
// board[2][1]
// board[2][2]
// 2nd gridRow
// board[0][3]
// board[0][4]
// board[0][5]
// board[1][3]
// board[1][4]
// board[1][5]
// board[2][3]
// board[2][4]
// board[2][5]
// 4th gridRow
// board[3][0]
// board[3][1]
// board[3][2]
// board[4][0]
// board[4][1]
// board[4][2]
// board[5][0]
// board[5][1]
// board[5][2]
var board = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
var board2 = [["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board));
