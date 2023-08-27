[1, 2, 3, 4, 5, 6].reduce((x, y) => {
  return Math.max(x, y);
});

// function double(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }
const double = (arr) => arr.map((val) => val * 2);

const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
