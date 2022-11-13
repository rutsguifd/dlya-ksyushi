export const autoCompleteMatrix = (col) => {
  let res = Array(col).fill(0).map(() => new Array(col).fill(1));

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < col; j++) {
      res[i][j] = 1 / (i+1 + j+1 - 1);
    }
  }
  return res;
};
