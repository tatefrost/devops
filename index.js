const express = require('express')
const path = require('path')


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
  rollbar.info('html file served successfully')
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// })

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`server is running from the law on ${port}`))