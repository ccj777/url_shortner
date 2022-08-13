// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用產生短網址的function 
const generateShortenUrl = require('../../generate-shortened-url')

// 引用短網址mongoose model
const ShortenedUrl = require('../../models/ShortenedUrl')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

// POST 所傳的 original_url 和資料庫比對
router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  console.log(originalUrl)
  ShortenedUrl.findOne({ original_url: originalUrl })
    .lean()
    .then(data => {
      if (data) {
        // 如果表單送出的網址已存在縮短網址
        console.log('yes')
        console.log(data.shortened_url)
        res.render('index', { shortened_url: data.shortened_url })
      } else {
        // 如果表單送出的網址不存在縮短網址
        const shortenedUrl = 'http://localshot:3000/' + generateShortenUrl(5)
        console.log('no')
        console.log(shortenedUrl)
        ShortenedUrl.create({
          original_url: originalUrl,
          shortened_url: shortenedUrl
        })
        res.render('index', { shortened_url: shortenedUrl })
      }
    })
    .catch(err => console.log(err))
})



// 匯出路由模組
module.exports = router