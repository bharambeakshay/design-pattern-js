const bookLibrary = require('./SingletonPatternBusinessLogic')

let isBook = bookLibrary.book.getInstance();
isBook.reading();
isBook.writing();