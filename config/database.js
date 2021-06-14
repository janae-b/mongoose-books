const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});