/******************************************************************************************************
* @purpose  :  Design a factory design pattern for a books to oragnise them in shelf.
* 	
*  @Auther   : Akshay
*  @File     : FactoryPatternMain.js 
*  
************************************************************************************************/

// From following code input is provided to business logic

const { BookShelf } = require('./FactoryPatternBusinessLogic');
//const bookShelf = require('./FactoryPatternBusinessLogic')
let bookShelf = new BookShelf();
let tempBook;
luck = Math.floor(Math.random() * 3); // Random number is generated which is passed to createShelf class
switch (luck) {
    case 0:
        tempBook = bookShelf.createShelf("Wear Yor Attitude", "selfhealing", "Jeff")
        console.log("Self-Healing Books")
        break
    case 1:
        tempBook = bookShelf.createShelf("You can Win", "motivational", "Shiv Khera")
        console.log("Motivational Books")
        break
    case 2:
        tempBook = bookShelf.createShelf("Love is in Air", "romantic", "Sudeep")
        console.log("Romantic Books")
        break;
    default:
        console.log("Please enter valid category");
        break;

}
console.log(tempBook);
console.log();

