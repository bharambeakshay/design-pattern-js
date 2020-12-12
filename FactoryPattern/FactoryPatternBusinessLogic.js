
//Books is the parent class and children classes are extended from it as shown below
class Book {
    constructor() { }

    library() {
        throw new Error("Method 'library()' must be implemented.");
    }
}
class SelfHealingBooks extends Book {
    library() {
        console.log("-------------------------------------------");
        console.log("Self Healing Books");
    }
}
class MotivationalBooks extends Book {
    library() {
        console.log("--------------------------------------------");
        console.log("Motivational Books");

    }
}

class RomanticBooks extends Book {
    library() {
        console.log("----------------------------------------");
        console.log("Romantic Books");
    }
}
module.exports = { Book, MotivationalBooks, SelfHealingBooks, RomanticBooks }