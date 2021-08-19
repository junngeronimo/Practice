/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    var n = matrix[0].length;
    console.log(matrix);
    for (var i = 0; i < matrix.length; i++) {
        for (var j = n - 1; j >= 0; j--) {
            matrix[j].unshift(matrix[i].pop());
            console.log(matrix);
        }
    }
}
;
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
var matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix);
