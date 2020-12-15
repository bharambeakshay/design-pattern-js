/******************************************************************************************************
* @purpose  :  Design a factory design pattern for a books to oragnise them in shelf.
* 	
*  @Auther   : Akshay
*  @File     : PrototypePatternBusinessLogic3.js 
*  
************************************************************************************************/

function Dog(prop) {
    this.breed = prop.breed || "Labrador";
    this.color = prop.color || "black";
    this.weight = prop.weight || 27;
}

function Cat(prop) {
    this.breed = prop.breed || "persian cat";
    this.color = prop.color || "white";
    this.weight = prop.weight || 14;
}

function Animals() { }


Animals.prototype.animalClass = Dog;

Animals.prototype.animalType = function (prop) {
    switch (prop.animal) {
        case "dog":
            this.animalClass = Dog;
            break;
        case "cat":
            this.animalClass = Cat;
            break;
    }
    return new this.animalClass(prop);
}

let dogA = new Animals();
let dog = dogA.animalType({
    animalType: "dog",
    color: "red",
    weight: 23
});

// let catA = new Animals();
// let cat = catA.animalType({
//     animalType: "cat",
//     color: "white",
//     weight: 13
// })
console.log(dog instanceof Dog);
console.log(dog);
// console.log(cat instanceof Cat);
// console.log(cat);

function catFunc() { }
catFunc.prototype = new Animals();
catFunc.prototype.animalClass = Cat;
let catA = new catFunc();
let cat = catA.animalType({
    animalType: "cat",
    color: "white",
    weight: 13
})
console.log(cat instanceof Cat);
console.log(cat);