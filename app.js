const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')

const generateShortenUrl = require('./generate-shortened-url')

// set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// set static files
app.use(express.static('public'))

// 要用POST時需要這行
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3000, () => {
  console.log('The app is listening on http://localhost:3000')
  console.log(generateShortenUrl(5))
})