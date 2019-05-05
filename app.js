const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5825


app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/about-page', (req, res) => res.render('pages/about'))
  .get('/whatwedo-page', (req, res) => res.render('pages/whatwedo'))
  .get('/footprint-page', (req, res) => res.render('pages/footprint'))
  .get('/gallery-page', (req, res) => res.render('pages/gallery'))
  .get('/joinus-page', (req, res) => res.render('pages/joinus'))
  .get('/contactus-page', (req, res) => res.render('pages/contactus'))
  .get('/giveback-page', (req, res) => res.render('pages/giveback'))
  .get('/site-developement', (req, res) => res.render('pages/site-developement'))

  .listen(PORT, () => console.log(`Listening on port : ${ PORT }`))


