const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'f5c36d564dcb42fb994bc2df9531832a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'))
//   try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//   }
// })

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`server is running from the law on ${port}`))