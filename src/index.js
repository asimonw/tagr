import express from 'express'

import apiRouter from './api'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public', {
  extensions: ['html']
}))

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
