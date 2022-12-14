const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI_3, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error!')
})

db.once('open', () => {
  console.log('MongoDB connected.')
})

module.exports = db