var Book = require( '../models/book' )
// our index function
exports.index = function( req, res ) {
  // create our locals parameter
  locals = {
    title: 'Books List'
  }
  Book.find().then( function (books) {
    // add the books to our locals
    locals.books = books
    // render our view
    res.render( 'books/index', locals )
  })

}
// New
exports.new = function ( req, res ) {
  // locals
  locals = {
    title: 'New Book'
  }
  res.render( 'books/new', locals )
}
// Create
exports.create = function ( req, res, next ) {
  Book.create({
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    price: req.body.price
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
}
