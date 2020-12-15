/******************************************************************************************************
* @purpose  :  Design a factory design pattern for a books to oragnise them in shelf.
* 	
*  @Auther   : Akshay
*  @File     : PrototypePatternBusinessLogic.js 
*  
************************************************************************************************/

const Warrior = function (name) {
    this.name = name
    this.hp = 100
}

Warrior.prototype.bash = function (target) {
    target.hp -= 15
}

Warrior.prototype.omniSlash = function (target) {
    // The target's hp may not be under 50 or this attack will fail on the opponent
    if (target.hp < 50) {
        return
    }
    target.hp -= 50
}

const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

sam.bash(lenardo)