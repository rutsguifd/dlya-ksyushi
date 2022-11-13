function delRnC(A, ind) {
    let temp = []
    for(let i = 0; i<A.length; i++) {
        temp.push(A[i].slice(0))
    }
    temp.splice(0, 1)
    for(let i = 0; i<temp.length; i++) {
        temp[i].splice(ind, 1)
    }
    return temp
}

export const det = (A) => {
  if (A.length === 2) {
    const result = A[0][0] * A[1][1] - A[0][1] * A[1][0];
    return result;
  }
  let ans = 0;
  for(let i = 0; i<A.length; i++) {
    ans += Math.pow(-1, i) * det(delRnC(A, i))
  }
  return ans
};
