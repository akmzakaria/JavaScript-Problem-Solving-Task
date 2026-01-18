// check palindrome
function isPalindrome(name) {
  const reversed = name.toLowerCase().split('').reverse().join('')

  return name.toLowerCase() === reversed
}

if (isPalindrome('madam')) console.log('This is a Palindrome!')
else console.log('This is not a Palindrome')
