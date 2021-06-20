const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashtalk = require('./models/trashtalk')

const port = 3000

const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const target = req.body
  const trashtalk = generateTrashtalk(target)
  res.render('index', { trashtalk })
})

// listening server
app.listen(port, () => {
  console.log('The server is running on http://localhost:3000')
})
