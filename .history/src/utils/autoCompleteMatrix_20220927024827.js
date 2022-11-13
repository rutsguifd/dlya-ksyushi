export const autoCompleteMatrix = (col) => {
  let res = Array(col).fill(0).map(() => new Array(col).fill(1));

  for (let i = 1; i <= col; i++) {
    for (let j = 1; j <= col; j++) {
      res[i][j] = 1 / (i + j - 1);
    }
  }
  return res;
};
