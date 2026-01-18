function pingpong(num) {
  const numbers = []

  for (let i = 1; i <= num; i++) {
    numbers.push(i)
  }

  for (let n of numbers) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('PingPong')
    } else if (n % 3 === 0) {
      console.log('Ping')
    } else if (n % 5 === 0) {
      console.log('Pong')
    } else {
      console.log(n)
    }
  }
}

pingpong(20)
