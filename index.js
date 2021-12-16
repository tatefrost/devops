const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
  rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`server is running from the law on ${port}`))