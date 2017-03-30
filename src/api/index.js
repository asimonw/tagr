import express from 'express'

import Tag from './models/tag'

const router = express.Router()

router.get('/tags', (req, res) => {
  res.send(Tag.find())
})

router.get('/tags/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const tag = Tag.findById(id)
  if (tag) {
    res.send(tag)
  } else {
    res.status(404).send()
  }

})

export default router
