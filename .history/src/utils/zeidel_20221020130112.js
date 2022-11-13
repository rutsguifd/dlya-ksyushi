export function method_zeidel(matrix, vector, eps) {
  let res = [];
  let xVector = new Array(matrix.length).fill(0);
  const el = {};
  let con = false;
  let counter = 0;
  while (!con) {
    let xOld;
    if (counter == 0) {
      xOld = new Array(matrix.length).fill(0);
    } else {
      xOld = Object.assign([], xVector);
    }
    for (let i = 0; i < matrix.length; i++) {
      debugger;
      let xNew = Object.assign({}, xVector);
      xNew[i] = 1;
      el[`s${i}`] = matrix[i].map((element) => element * -1);
      el[`s${i}`][i] = vector[i];
      el[`s${i}`] = el[`s${i}`].map((element) => element / matrix[i][i]);
      console.log(el);
      el[`s${i}_sum`] = Math.abs(
        min_array(el[`s${i}`].map((element, index) => element * xNew[index]))
      );
      console.log(el, xVector);
      xVector[i] = el[`s${i}_sum`].toFixed(3);
    }
    res.push(Object.assign([], xVector));
    con = Math.abs(sum_array(xVector) - sum_array(xOld)) <= eps;
    counter++;
  }
  return res;
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
