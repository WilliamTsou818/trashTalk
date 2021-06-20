const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const app = express()
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index')
})

// listening server
app.listen(port, () => {
  console.log('The server is running')
})
