const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./models/trashTalk')

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
  const trashTalk = generateTrashTalk(target)
  res.render('index', { trashTalk })
})

// listening server
app.listen(port, () => {
  console.log('The server is running on http://localhost:3000')
})
