/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a booky persons performs various actions.
* 	
*  @Auther   : Akshay
*  @File     : SingletonPatternBusinessLogic.js 
*  
************************************************************************************************/


let book = (function () {

    let bookInstance;


    /**
     * @function  type():  Describes  booky nature
     * @param { }: no parameters are needed
     */

    function type() {

        function reading() {
            console.log("Loves reading");
        }

        function writing() {
            console.log("Hate writing");
        }

        function listening() {
            console.log(' Audiobooks are cool');
        }

        return {
            reading: reading,
            writing: writing,
            listening: listening
        }
    }
    /**
    * @function  getInstance():  returns the sole instance of class
    * @param { }: no parameters are needed
    */

    return {
        getInstance: function () {
            return !bookInstance ? bookInstance = type() : bookInstance;
        }
    }

})();

module.exports = { book }
