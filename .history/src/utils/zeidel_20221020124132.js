export function method_zeidel(matrix, vector, eps) {
  let history = [];
  let xVector = new Array(matrix.length).fill(0);
  const el = {};
  let con = false;
  let counter = 0;
  while (!con) {
    let x_old;
    if (counter == 0) {
      x_old = new Array(matrix.length).fill(0);
    } else {
      x_old = Object.assign([], xVector);
    }
    for (let i = 0; i < matrix.length; i++) {
      let xNew = Object.assign({}, xVector);
      xNew[i] = 1;
      el[`s${i}`] = matrix[i].map((element) => element * -1);
      el[`s${i}`][i] = vector[i];
      el[`s${i}`] = el[`s${i}`].map((element) => element / matrix[i][i]);
      console.log(el);
      el[`s${i}_sum`] = sum_array(
        el[`s${i}`].map((element, index) => element * xNew[index])
      );
      console.log(el, xVector);
      xVector[i] = el[`s${i}_sum`].toFixed(3);
    }
    history.push(Object.assign([], xVector));
    con = Math.abs(sum_array(xVector) - sum_array(x_old)) <= eps;
    counter++;
  }
  return history;
}

export function sum_array(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += Number(arr[i]);
  }
  return summ;
}

function min_array(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ -= Number(arr[i]);
  }
  return summ;
}
