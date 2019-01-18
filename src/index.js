import axios from 'axios'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const {PORT = 3000} = process.env

const server = express()

server.get('/', (req, res) => {
  res.send(
    {
      status: 'success',
      response: {},
    }
  )
})

// CODE HERE

server.get('*', (req, res) => {
  res.send(
    {
      status: 'failure',
      response: 'route not found',
    },
    404,
  )
})

server
  .use(bodyParser.json())
  .listen(PORT, () => console.log(`App listening on port ${PORT}!`))