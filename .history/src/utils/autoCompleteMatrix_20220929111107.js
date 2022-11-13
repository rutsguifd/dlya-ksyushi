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

const multiplyMatrices = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
     throw new Error('arguments should be in 2-dimensional array format');
  }
  let x = a.length,
  z = a[0].length,
  y = b[0].length;
  if (b.length !== z) {
     // XxZ & ZxY => XxY
     return 1;
  }
  let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
  let product = new Array(x);
  for (let p = 0; p < x; p++) {
     product[p] = productRow.slice();
  }
  for (let i = 0; i < x; i++) {
     for (let j = 0; j < y; j++) {
        for (let k = 0; k < z; k++) {
           product[i][j] += a[i][k] * b[k][j];
        }
     }
  }
  return product;
}

export const autoCompleteMatrix2 = (col) => {
  let res = []
  let mat = autoCompleteMatrix(col)
  for (let i = 0; i < col; i++) {
    res.push(Math.pow(i+1, 2))
  }
  return mat.map(arr => arr.reduce((prev, curr, i) => curr*res[i]+prev))
};
