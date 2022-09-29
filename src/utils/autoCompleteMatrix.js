export const autoCompleteMatrix = (col) => {
  //створюю 2 вимірний масив
  let res = Array(col)
    .fill(0)
    .map(() => new Array(col).fill(1));
  
  //заповнюю його по тому як казала глебена (1 1/2 1/3 і тд)
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < col; j++) {
      res[i][j] = 1 / (i + 1 + j + 1 - 1);
    }
  }
  return res;
};

//ця залупа не працює думаю там треба через мар або редюс делати
export const autoCompleteMatrix2 = (col) => {
  let res = []
  let mat = autoCompleteMatrix(col)
  for (let i = 0; i < col; i++) {
    res.push(Math.pow(i+1, 2))
  }
  return mat.map(arr => arr.reduce((prev, curr, i) => curr*res[i]+prev))
};
