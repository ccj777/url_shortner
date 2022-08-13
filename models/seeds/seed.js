const ShortenedUrl = require('../ShortenedUrl')
const db = require("../../config/mongoose")

db.once('open', () => {
  console.log("run seeder script")
  ShortenedUrl.create({original_url: 'test',
    shortened_url: 'test'})
    .then(() => {
      console.log(' done.')
      db.close
    })
    .catch(error => {
      console.log(error)
    })
})