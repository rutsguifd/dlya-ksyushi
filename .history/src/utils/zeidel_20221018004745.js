// function method_zeidel() {
//   history.value = [];
//   let x_vector = new Array(size.value).fill(0);
//   const el = {};
//   let converge = false;
//   let counter = 0;
//   while (!converge) {
//     let x_old;
//     if (counter == 0) {
//       x_old = new Array(size.value).fill(0);
//     } else {
//       x_old = Object.assign([], x_vector);
//     }
//     for (let i = 0; i < size.value; i++) {
//       let x_new = Object.assign({}, x_vector);
//       x_new[i] = 1;
//       el[`s${i}`] = matrix.value[i].map((element) => element * -1);
//       el[`s${i}`][i] = vector.value[i];
//       el[`s${i}`] = el[`s${i}`].map((element) => element / matrix.value[i][i]);
//       el[`s${i}_sum`] = sum_array(
//         el[`s${i}`].map((element, index) => element * x_new[index])
//       );
//       x_vector[i] = el[`s${i}_sum`].toFixed(3);
//     }
//     history.value.push(Object.assign([], x_vector));
//     converge = Math.abs(sum_array(x_vector) - sum_array(x_old)) <= eps.value;
//     counter++;
//   }
// }

export function sum_array(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += Number(arr[i]);
  }
  return summ;
}
