/******************************************************************************************************
* @purpose  :  Design a factory design pattern for a books to oragnise them in shelf.
* 	
*  @Auther   : Akshay
*  @File     : FactoryPatternBusinessLogic.js 
*  
************************************************************************************************/


/** 
 * Books is the parent class and children classes are extended from it as shown below
*/
class Book {
    constructor(name, type, author) {
        this.name = name;
        this.type = type;
        this.author = author;
    }
    printDetails() {
        console.log("Book Name " + this.name);
        console.log("Book type " + this.type);
        console.log("Book author " + this.author);


    }
}

class SelfHealingBooks extends Book {
    constructor(name, type, author) {
        super(name, type, author)
        this.type = "selfhealing"

    }
}

class MotivationalBooks extends Book {
    constructor(name, type, author) {
        super(name, type, author)
        this.type = "motivational"
    }
}

class RomanticBooks extends Book {
    constructor(name, type, author) {
        super(name, type, author)
        this.type = "romantic"
    }
}


/** 
 * BooksShelf is the class where it takes the input and provides the output
*/
class BookShelf {
    createShelf(name, type, author) {
        switch (type) {
            case "selfhealing":
                return new SelfHealingBooks(name, type, author)
            case "motivational":
                return new MotivationalBooks(name, type, author)
            case "romantic":
                return new RomanticBooks(name, type, author)
            default:
                return null;
        }
    }
}

module.exports = { Book, MotivationalBooks, SelfHealingBooks, RomanticBooks, BookShelf }