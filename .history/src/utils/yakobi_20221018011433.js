import { sum_array } from "./zeidel";

export function method_yacobi(matrix, vector, eps) {
  let history = [];
  let x_vector = new Array(matrix.length).fill(0);
  const el = {};
  let converge = false;
  let counter = 0;
  while (!converge) {
    let test = [];
    for (let i = 0; i < matrix.length; i++) {
      let x_new = Object.assign({}, x_vector);
      x_new[i] = 1;
      el[`s${i}`] = matrix[i].map((element) => element * -1);
      el[`s${i}`][i] = vector[i];
      console.log(el[`s${i}`]);
      el[`s${i}`] = el[`s${i}`].map((element) => element / matrix[i][i]);
      console.log(vector);
      console.log(el[`s${i}`]);
      el[`s${i}_sum`] = sum_array(
        el[`s${i}`].map((element, index) => element * x_new[index])
      );
      test[i] = el[`s${i}_sum`].toFixed(3);
      console.log(el[`s${i}_sum`]);
    }
    converge = Math.abs(sum_array(x_vector) - sum_array(test)) <= eps;
    x_vector = test;
    history.push(x_vector);
    counter = counter + 1;
    console.log(counter, "COUNTER");
  }
  return history;
}
