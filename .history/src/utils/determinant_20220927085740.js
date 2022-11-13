// function delRnC(A, ind) {
//     let temp = []
//     for(let i = 0; i<A.length; i++) {
//         temp.push(A[i].slice(0))
//     }
//     temp.splice(0, 1)
//     for(let i = 0; i<temp.length; i++) {
//         temp[i].splice(ind, 1)
//     }
//     return temp
// }

// export const det = (A) => {
//   if (A.length === 2) {
//     const result = A[0][0] * A[1][1] - A[0][1] * A[1][0];
//     return result;
//   }
//   let ans = 0;
//   for(let i = 0; i<A.length; i++) {
//     ans += Math.pow(-1, i) * det(delRnC(A, i))
//   }
//   return ans
// };

export function det(A) {
  if (A.length === 2) {
    // this.determinant = M[0][0] * M[1][1] - M[0][1] * M[1][0];

    return A[0][0] * A[1][1] - A[0][1] * A[1][0];
  }
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer +=
      Math.pow(-1, i) * A[0][i] * det(deleteRowAndColumn(A, i));
  }
  console.log(answer);

  return answer;
}

function deleteRowAndColumn(M, index) {
  var temp = [];

  for (let i = 0; i < M.length; i++) {
    temp.push(M[i].slice(0));
  }
  temp.splice(0, 1);
  for (let i = 0; i < temp.length; i++) {
    temp[i].splice(index, 1);
  }
  return temp;
}
