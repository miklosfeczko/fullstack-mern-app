const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/item')

// @route GET api/items
// @desc GET ALL items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
    // date is set to default so we dont have to handle that
  })
  newItem.save().then(item => res.json(item))
})

// @route DELETE api/items
// @desc Create an item
// @access Public
router.delete('/:id', (req, res) => {
 Item.findById(req.params.id)
    .then(item => {
      item.remove().then(() => res.json({success: true}))
    })
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router