// 33-47 car spec
// 48-57 numere
// 65-90 litere mari
// 97-122 litere mici
// [0,1) => [33,47]
// [0,1) => [0,1) * 14 => ceil([0,14)) => [0,14] + 33 => [33,47]
// [0,1) * (47-33+1) + 33 => [0,15) + 33 => floor([33,48)) => [33,47]

// floor(math.random() * (max - min + 1) + min)

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function passMatches(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{16,24}$/
  return regex.test(password)
}


function main() {
  const upperMin = 65
  const upperMax = 90
  const lowerMin = 97
  const lowerMax = 122
  const numMin = 48
  const numMax = 57
  const specMin = 33
  const specMax = 47
  const lenMin = 16
  const lenMax = 24
  let password = ''

  do{
    password = ''
    const len = randomInt(lenMin, lenMax)
    for (let i = 0; i < len; i++) {
      const type = randomInt(0, 3)
      switch (type) {
        case 0:
          password += String.fromCharCode(randomInt(upperMin, upperMax))
          break
        case 1:
          password += String.fromCharCode(randomInt(lowerMin, lowerMax))
          break
        case 2:
          password += String.fromCharCode(randomInt(numMin, numMax))
          break
        case 3:
          password += String.fromCharCode(randomInt(specMin, specMax))
          break
      }
    }
  } while(!passMatches(password))

console.log(password)

}

main()
