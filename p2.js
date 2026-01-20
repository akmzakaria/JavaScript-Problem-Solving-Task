// count vowel
let count = 0

function vowelCount(name) {
  name
    .toLowerCase()
    .split('')
    .map((l) => {
      l === 'a' && count++
      l === 'e' && count++
      l === 'i' && count++
      l === 'o' && count++
      l === 'u' && count++
    })

  return count
}

console.log(vowelCount('programming'))
