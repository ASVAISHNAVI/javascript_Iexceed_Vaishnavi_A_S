
const libraryAccount = {
    booksIssued: 0,
    issueBook: function(count) {
        this.booksIssued += count;
    },
    returnBook: function(count) {
        this.booksIssued -= count;
    },
    getIssuedBooks: function() {
        return this.booksIssued;
    }
};


const studentAccount = Object.create(libraryAccount);
studentAccount.name = "Anjali";
studentAccount.type = "Student";
studentAccount.maxBooks = 5;

studentAccount.issueBook(3);
studentAccount.returnBook(1);
console.log(studentAccount.name); 
console.log(studentAccount.getIssuedBooks());


const facultyAccount = Object.create(libraryAccount, {
    id: {
        value: "FAC123",
        writable: true,
        configurable: true,
        enumerable: true
    },
    name: {
        value: "Dr. Ravi",
        writable: false,
        configurable: true,
        enumerable: true
    },
    booksIssued: {
        value: 10,
        writable: true
    }
});

facultyAccount.name = "Prof. Meera"; 
console.log(facultyAccount.name); 
console.log(facultyAccount.getIssuedBooks());

facultyAccount.issueBook(2);
facultyAccount.returnBook(5);
console.log(facultyAccount.getIssuedBooks()); 
