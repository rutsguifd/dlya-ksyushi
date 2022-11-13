// export function inverse(_A) {
//   let temp,
//     N = _A.length,
//     E = [];

import matrixInverse from "matrix-inverse";

//   for (let i = 0; i < N; i++) E[i] = [];

//   for (let i = 0; i < N; i++)
//     for (let j = 0; j < N; j++) {
//       E[i][j] = 0;
//       if (i === j) E[i][j] = 1;
//     }

//   for (let k = 0; k < N; k++) {
//     temp = _A[k][k];

//     for (let j = 0; j < N; j++) {
//       _A[k][j] /= temp;
//       E[k][j] /= temp;
//     }

//     for (let i = k + 1; i < N; i++) {
//       temp = _A[i][k];

//       for (let j = 0; j < N; j++) {
//         _A[i][j] -= _A[k][j] * temp;
//         E[i][j] -= E[k][j] * temp;
//       }
//     }
//   }

//   for (let k = N - 1; k > 0; k--) {
//     for (let i = k - 1; i >= 0; i--) {
//       temp = _A[i][k];

//       for (let j = 0; j < N; j++) {
//         _A[i][j] -= _A[k][j] * temp;
//         E[i][j] -= E[k][j] * temp;
//       }
//     }
//   }

//   for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) _A[i][j] = E[i][j];
//   return _A;
// }

export function inverse(A) {
  return matrixInverse(A);
}
