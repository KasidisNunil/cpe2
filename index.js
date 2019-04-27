const express = require('express')
const app = express()
const port = 9178

app.get('/', (req, res) =>
  res.send('Greetings from Pond...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
