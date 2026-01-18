// Remove Duplicates from an Array
function removeDuplicates(arr) {
  const result = []

  arr.map((num) => {
    !result.includes(num) && result.push(num)
  })

  return result
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 77, 77, 7, 7]))
