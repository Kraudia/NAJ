(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        // function should return new category object
        global.UAM.library.push({
        categoryName: newCategoryName,
        books: []
        }); 
        return global.UAM.library[global.UAM.library.length-1];
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        // !!!
        var index = global.UAM.library.indexOf(categoryObject);
        if (index > -1) global.UAM.library.splice(index, 1);
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        // !!!
        // function should return new book object
        categoryObject.books.push({
            title: title,
            count: count
        });
        var index = global.UAM.library.indexOf(categoryObject);
        return global.UAM.library[global.UAM.library[index].books.length-1];
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        // !!!
        var indexCategory = global.UAM.library.indexOf(categoryObject);
        var indexBook =  global.UAM.library[indexCategory].books.indexOf(bookObject);
        if (indexBook > -1) global.UAM.library[indexCategory].books.splice(indexBook, 1);
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        // !!!
        // function should return category object
        var categoryObject = {};
        for (var i=0; i<global.UAM.library.length; i++) {
            if (global.UAM.library[i].categoryName == categoryName) categoryObject = global.UAM.library[i];
        }
        return categoryObject;
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        // !!!
        // function should return book object
        var bookObject = {};
        for (var i=0; i<global.UAM.library.length; i++) {
            for (var j=0; j<library[i].books.length; j++) {
                if (global.UAM.library[i].books[j].title == title) {
                    global.UAM.library[i].books[j].count -= 1;
                    bookObject = global.UAM.library[i].books[j];
                    break;
                }
            }
        }
        return bookObject;
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        // !!!
        for (var i=0; i<global.UAM.library.length; i++) {
            for (var j=0; j<library[i].books.length; j++) {
                if (global.UAM.library[i].books[j] == bookObject) {
                    global.UAM.library[i].books[j].count += 1;
                    bookObject = global.UAM.library[i].books[j];
                    break;
                }
            }
    };
    
    global.UAM.getBorrowedBooks = function() {
        // !!!
        // return array of book objects
        var borrowedBooks = [];

        for (var i=0; i<global.UAM.library.length; i++) {
            for (var j=0; j<library[i].books.length; j++) {
                if (global.UAM.library[i].books[j].count == 0) {
                   borrowedBooks.push(global.UAM.library[i].books[j]);
                }
            }
        }
        return borrowedBooks;
    };

}(window));

/*

Przykład użycia:

var newCategory1 = addCategory('Romans');
var newCategory2 = addCategory('Horror');

var book1 = addBookToCategory(newCategory1, 'Zakochana para', 22);
var book2 = addBookToCategory(newCategory2, 'Chwila grozy', 7);



*/
