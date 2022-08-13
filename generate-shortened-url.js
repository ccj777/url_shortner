function sample(array) {
  const index = Math.floor((Math.random() * array.length))
  return array[index]
}

function generateShortenUrl(length) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  collection = lowerCaseLetters + upperCaseLetters + numbers
  let shortenUrl = ''

  for (let i = 0; i < length; i++) {
    shortenUrl += sample(collection)
  }

  return shortenUrl
}

module.exports = generateShortenUrl