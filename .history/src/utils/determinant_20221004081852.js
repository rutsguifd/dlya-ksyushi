export function det(A) {
  // if (A.length === 2) {
  //   return A[0][0] * A[1][1] - A[0][1] * A[1][0];
  // }
  // let answer = 0;
  // for (let i = 0; i < A.length; i++) {
  //   answer += Math.pow(-1, i) * A[0][i] * det(delRnC(A, i));
  // }
  // console.log(answer);

  // return answer;
  let i, k, j;

  let A_copy = [];
  let x_copy = [];
  let n = A_copy.length;
  let abs = Math.abs;

  for (i = 0; i < A_copy.length; i++) {
    A_copy[i].push(x_copy[i]);
  }

  for (i = 0; i < n; i++) {
    // Search for maximum in this column
    let maxEl = abs(A_copy[i][i]),
      maxRow = i;
    for (k = i + 1; k < n; k++) {
      if (abs(A_copy[k][i]) > maxEl) {
        maxEl = abs(A_copy[k][i]);
        maxRow = k;
      }
    }
    // Swap maximum row with current row (column by column)
    for (k = i; k < n + 1; k++) {
      let tmp = A_copy[maxRow][k];
      A_copy[maxRow][k] = A_copy[i][k];
      A_copy[i][k] = tmp;
    }
    // Make all rows below this one 0 in current column
    for (k = i + 1; k < n; k++) {
      let c = -A_copy[k][i] / A_copy[i][i];
      for (j = i; j < n + 1; j++) {
        if (i === j) {
          A_copy[k][j] = 0;
        } else {
          A_copy[k][j] += c * A_copy[i][j];
        }
      }
    }
  }
  let determinant = 1;
  for (let i = 0; i < A.length; i++) {
    determinant = determinant * A[i][i];
  }
  return determinant;
}

// function delRnC(M, index) {
//   let temp = [];

//   for (let i = 0; i < M.length; i++) {
//     temp.push(M[i].slice(0));
//   }
//   temp.splice(0, 1);
//   for (let i = 0; i < temp.length; i++) {
//     temp[i].splice(index, 1);
//   }
//   return temp;
// }
