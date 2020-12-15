/******************************************************************************************************
* @purpose  :  Design a factory design pattern for a books to oragnise them in shelf.
* 	
*  @Auther   : Akshay
*  @File     : PrototypePatternBusinessLogic2.js 
*  
************************************************************************************************/
const Warrior = function (name) {
  this.name = name
  this.hp = 100

  this.bash = function (target) {
    target.hp -= 15
  }

  this.omniSlash = function (target) {
    // The target's hp may not be under 50 or this attack will fail on the opponent
    if (target.hp < 50) {
      return
    }
    target.hp -= 50
  }
}

const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

console.log(sam.bash === lenardo.bash) // false





//Another example to understand Prototype pattern


function Movie(title) {
  this.title = title
}

const harryPotter = new Movie('Harry Potter')
const rushHour2 = new Movie('Rush Hour 2')
const fastAndFurious = new Movie('Fast And Furious')

console.log(harryPotter)
console.log(rushHour2)
console.log(fastAndFurious)