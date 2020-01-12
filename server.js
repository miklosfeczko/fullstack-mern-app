const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// Connect to database
mongoose.connect('mongodb://localhost/list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Use Routes
app.use('/api/items/', items)

app.listen(process.env.port || 5000, function() {
  console.log('now listening for requests')
})