class Library {
  constructor() {
    this.books = []; 
  }

  addBook(title, author) {
    const book = { title: title, author: author }; 
    this.books.push(book); 
  }

  listBooks() {
    console.log("Available books:");
    this.books.forEach((book) => {
      console.log(`${book.title} — ${book.author}`);
    });
  }
}
const library = new Library();

library.addBook("JavaScript Basics", "John Doe");
library.addBook("Learning Python", "Jane Smith");
library.addBook("C Programming", "Dennis Ritchie");

library.listBooks();