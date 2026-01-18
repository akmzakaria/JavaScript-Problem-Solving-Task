// count vowel
let count = 0

function vowelCount(name) {
  name
    .toLowerCase()
    .split('')
    .map((r) => {
      r === 'a' && count++
      r === 'e' && count++
      r === 'i' && count++
      r === 'o' && count++
      r === 'u' && count++
    })

  return count
}

console.log(vowelCount('programming'))
