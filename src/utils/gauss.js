let abs = Math.abs;

function array_fill(i, n, v) {
  let a = [];
  for (; i < n; i++) {
    a.push(v);
  }
  return a;
}

export function gauss(A, x) {
  let i, k, j;

  // робимо одину матрицю
  for (i = 0; i < A.length; i++) {
    A[i].push(x[i]);
  }
  let n = A.length;

  for (i = 0; i < n; i++) {
    // шукаємо максимальну колонку
    let maxEl = abs(A[i][i]),
      maxRow = i;
    for (k = i + 1; k < n; k++) {
      if (abs(A[k][i]) > maxEl) {
        maxEl = abs(A[k][i]);
        maxRow = k;
      }
    }

    // міняємо максимальний рядок з настоящим
    for (k = i; k < n + 1; k++) {
      let tmp = A[maxRow][k];
      A[maxRow][k] = A[i][k];
      A[i][k] = tmp;
    }

    // робимо всі рядки нижче даного 0 у даній колонці
    for (k = i + 1; k < n; k++) {
      let c = -A[k][i] / A[i][i];
      for (j = i; j < n + 1; j++) {
        if (i === j) {
          A[k][j] = 0;
        } else {
          A[k][j] += c * A[i][j];
        }
      }
    }
  }

  // рішаємо рівняння Ax=b для верхньої трикутної матриці A
  x = array_fill(0, n, 0);
  for (i = n - 1; i > -1; i--) {
    x[i] = A[i][n] / A[i][i];
    for (k = i - 1; k > -1; k--) {
      A[k][n] -= A[k][i] * x[i];
    }
  }

  return x;
}