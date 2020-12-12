try {
    let bookShelf = require('./FactoryPatternBusinessLogic')
    new bookShelf.SelfHealingBooks().library();
    new bookShelf.MotivationalBooks().library();
    new bookShelf.RomanticBooks().library();
} catch (error) {
    console.log(error)
}