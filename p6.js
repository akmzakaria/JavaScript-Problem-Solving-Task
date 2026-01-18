// sum of all numbers in an array
function sumNum(arr) {
  let sum = 0

  for (let num of arr) {
    sum = sum + num
  }
  return sum
}

console.log(sumNum([1, 2, 3, 4, 5, 1]))
