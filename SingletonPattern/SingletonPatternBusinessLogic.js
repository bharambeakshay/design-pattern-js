let book = (function () {

    let bookInstance;

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

    return {
        getInstance: function () {
            return !bookInstance ? bookInstance = type() : bookInstance;
        }
    }

})();

let isBook = book.getInstance();
isBook.reading();
isBook.writing();