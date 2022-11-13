export const autoCompleteMatrix = (col) => {
  let res = new Array(col);

  for (let i = 1; i <= col; i++) {
    res[i] = new Array(col);
  }
  for (let i = 1; i <= col; i++) {
    for (let j = 1; j <= col; j++) {
      res[i][j] = 1 / (i + j - 1);
    }
  }
  return res;
};
