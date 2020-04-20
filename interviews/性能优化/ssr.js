import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './APP'

const app = express()

const RDom = renderToString(<App />)

const Page = `
  <html>
    <head>
      <title>test</title>
    </head>
    <body>
      <span>
        ${RDom}
      </span>
    </body>
  </html>
`

app.get('/index', (req, res) => {
  res.send(Page)
})

app.listen(8000)