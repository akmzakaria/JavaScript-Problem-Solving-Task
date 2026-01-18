// Find Even Numbers in an Array
function evenNum(arr) {
  let evenNumbers = []

  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num)
    }
  }
  return evenNumbers
}

console.log(evenNum([1, 2, 3, 4, 5, 10]))
