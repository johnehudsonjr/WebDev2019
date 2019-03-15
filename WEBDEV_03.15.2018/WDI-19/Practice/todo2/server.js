const express = require('express')
const app = express()
const router = require('./routes/index')

app.set('view engine', 'hbs')
app.use('/', router)

// process.env.PORT is necessary for deployment to Heroku
// If environment variable is not provided, default to 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
0