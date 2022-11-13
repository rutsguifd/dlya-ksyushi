export const autoCompleteMatrix = (col) => {
  let res = Array(col)
    .fill(0)
    .map(() => new Array(col).fill(1));

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < col; j++) {
      res[i][j] = 1 / (i + 1 + j + 1 - 1);
    }
  }
  return res;
};


export const autoCompleteMatrix2 = (col) => {
  let res = []
  let mat = autoCompleteMatrix(col)
  for (let i = 0; i < col; i++) {
    res.push(Math.pow(i+1, 2))
  }
  for(let i =0; i< col; i++) {
    for(let j =0; j< col; j++) {
      res[i] += mat[i][j] * res[i]
    } 
  }
  return mat
};
