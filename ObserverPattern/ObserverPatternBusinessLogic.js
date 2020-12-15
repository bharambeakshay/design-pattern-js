/******************************************************************************************************
* @purpose  :  Design a factory design pattern for a books to oragnise them in shelf.
* 	
*  @Auther   : Akshay
*  @File     : ObserverPatternNusinessLogic.js 
*  
************************************************************************************************/

let subject = function () {
    let observers = [];
    return {

        subscribeObserver: function (observer) {
            observers.push(observer);
        },

        unsubscribeObserver: function (observer) {
            let index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        },

        notifyObserver: function (observer) {
            let index = observers.indexOf(observer);
            if (index > -1) {
                observers[index].notify(index);
            }
        },

        notifyAllObserver: function () {
            for (let i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            }
        }
    }
}
let observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + (parseInt(index, 10) + 1) + " is notified");
        }
    }
}

let subject = new subject();
let observer1 = new observer();
let observer2 = new observer();
let observer3 = new observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);

subject.notifyObserver(observer3);
subject.notifyAllObserver();

subject.unsubscribeObserver(observer2);
subject.unsubscribeObserver(observer1);
subject.unsubscribeObserver(observer3);