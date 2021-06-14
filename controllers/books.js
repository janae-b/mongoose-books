const Book = require('../models/book')

module.exports = {
  new: newBook,
  create
};

function newBook(req, res) {
  res.render('books/new');
}

function create(req, res) {
  req.body.own = !!req.body.own;
  const book = new Book(req.body);
  book.save(function(err) {
    if (err) return res.render('books/new');
    console.log(book);
    res.redirect('/books/new')
  })
}