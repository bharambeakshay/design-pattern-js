/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a booky persons performs various actions.
* 	
*  @Auther   : Akshay
*  @File     : SingletonPatternMain.js 
*  
************************************************************************************************/


const bookLibrary = require('./SingletonPatternBusinessLogic')

let isBook = bookLibrary.book.getInstance();
isBook.reading();
isBook.writing();