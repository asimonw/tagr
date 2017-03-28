import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send(`url: ${req.url}`)
})

app.listen(3000, () => {
  console.log('Server running at port 3000')
})
