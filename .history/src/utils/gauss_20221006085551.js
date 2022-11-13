// let abs = Math.abs;

// function array_fill(i, n, v) {
//   let a = [];
//   for (; i < n; i++) {
//     a.push(v);
//   }
//   return a;
// }

// export function gauss(A, x) {
//   let i, k, j;

//   // робимо одину матрицю
//   for (i = 0; i < A.length; i++) {
//     A[i].push(x[i]);
//   }
//   let n = A.length;

//   for (i = 0; i < n; i++) {
//     // шукаємо максимальну колонку
//     let maxEl = abs(A[i][i]),
//       maxRow = i;
//     for (k = i + 1; k < n; k++) {
//       if (abs(A[k][i]) > maxEl) {
//         maxEl = abs(A[k][i]);
//         maxRow = k;
//       }
//     }

//     // міняємо максимальний рядок з настоящим
//     for (k = i; k < n + 1; k++) {
//       let tmp = A[maxRow][k];
//       A[maxRow][k] = A[i][k];
//       A[i][k] = tmp;
//     }

//     // робимо всі рядки нижче даного 0 у даній колонці
//     for (k = i + 1; k < n; k++) {
//       let c = -A[k][i] / A[i][i];
//       for (j = i; j < n + 1; j++) {
//         if (i === j) {
//           A[k][j] = 0;
//         } else {
//           A[k][j] += c * A[i][j];
//         }
//       }
//     }
//   }

//   // рішаємо рівняння Ax=b для верхньої трикутної матриці A
//   x = array_fill(0, n, 0);
//   for (i = n - 1; i > -1; i--) {
//     x[i] = A[i][n] / A[i][i];
//     for (k = i - 1; k > -1; k--) {
//       A[k][n] -= A[k][i] * x[i];
//     }
//   }

//   return x;
// }

var abs = Math.abs;

function array_fill(i, n, v) {
  var K = [];
  for (; i < n; i++) {
    K.push(v);
  }
  return K;
}

export function gauss(A, x) {
  // //Index variables
  // var i, k, j;

  // var A_copy = [];
  // var x_copy = [];

  // //Copy A
  // for (i = 0; i < A.length; ++i) {
  //   A_copy[i] = A[i].slice();
  // }

  // //Copy b
  // for (i = 0; i < x.length; ++i) {
  //   x_copy[i] = x[i];
  // }
  // // Just make a single matrix
  // for (i = 0; i < A_copy.length; i++) {
  //   A_copy[i].push(x_copy[i]);
  // }
  // var n = A_copy.length;

  // for (i = 0; i < n; i++) {
  //   // Search for maximum in this column
  //   var maxEl = abs(A_copy[i][i]),
  //     maxRow = i;
  //   for (k = i + 1; k < n; k++) {
  //     if (abs(A_copy[k][i]) > maxEl) {
  //       maxEl = abs(A_copy[k][i]);
  //       maxRow = k;
  //     }
  //   }
  //   // Swap maximum row with current row (column by column)
  //   for (k = i; k < n + 1; k++) {
  //     var tmp = A_copy[maxRow][k];
  //     A_copy[maxRow][k] = A_copy[i][k];
  //     A_copy[i][k] = tmp;
  //   }
  //   // Make all rows below this one 0 in current column
  //   for (k = i + 1; k < n; k++) {
  //     var c = -A_copy[k][i] / A_copy[i][i];
  //     for (j = i; j < n + 1; j++) {
  //       if (i === j) {
  //         A_copy[k][j] = 0;
  //       } else {
  //         A_copy[k][j] += c * A_copy[i][j];
  //       }
  //     }
  //   }
  // }
  // //determinant
  // let determinant = 1;
  // for (i = 0; i < A_copy.length; i++) {
  //   determinant = determinant * A_copy[i][i];
  // }
  // if (determinant === 0) {
  //   return ["matrica me sumisna"];
  // } else {
  //   alert(-1 * determinant);
  //   // Solve equation Ax=b for an upper triangular matrix A
  //   console.log(A_copy);
  //   x_copy = array_fill(0, n, 0);
  //   for (i = n - 1; i > -1; i--) {
  //     x_copy[i] = A_copy[i][n] / A_copy[i][i];
  //     for (k = i - 1; k > -1; k--) {
  //       A_copy[k][n] -= A_copy[k][i] * x_copy[i];
  //     }
  //   }
  //   return x_copy;
  // }
  let i,
    j,
    k = 0,
    c,
    flag = 0,
    m = 0;
  let pro = 0;
  let a = array_fill(A, x);
  let n = A.length;
  // Performing elementary operations
  for (i = 0; i < n; i++) {
    if (a[i][i] == 0) {
      c = 1;
      while (i + c < n && a[i + c][i] == 0) c++;
      if (i + c == n) {
        flag = 1;
        break;
      }
      for (j = i, k = 0; k <= n; k++) {
        let temp = a[j][k];
        a[j][k] = a[j + c][k];
        a[j + c][k] = temp;
      }
    }

    for (j = 0; j < n; j++) {
      // Excluding all i == j
      if (i != j) {
        // Converting Matrix to reduced row
        // echelon form(diagonal matrix)
        let p = a[j][i] / a[i][i];

        for (k = 0; k <= n; k++) a[j][k] = a[j][k] - a[i][k] * p;
      }
    }
  }
  return 1;
}
