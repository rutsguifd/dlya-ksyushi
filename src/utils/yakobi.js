import { sum_array } from "./zeidel";

export function method_yacobi(matrix, vector, eps) {
  let counter = 0;
  let res = [];
  let xVector = new Array(matrix.length).fill(0);
  const el = {};
  let converge = false;
  while (!converge) {
    let test = [];
    for (let i = 0; i < matrix.length; i++) {
      let xNew = Object.assign({}, xVector);
      xNew[i] = 1;
      el[`s${i}`] = matrix[i].map((element) => element * -1);
      el[`s${i}`][i] = vector[i];
      el[`s${i}`] = el[`s${i}`].map((element) => element / matrix[i][i]);
      el[`s${i}_sum`] = sum_array(
        el[`s${i}`].map((element, index) => element * xNew[index])
      );
      test[i] = el[`s${i}_sum`].toFixed(4);
    }
    converge = Math.abs(sum_array(xVector) - sum_array(test)) <= eps;
    xVector = test;
    res.push(xVector);
    counter = counter + 1;
  }
  let lol = [`counter=${counter}`];
  res.push([lol]);
  return res;
}
