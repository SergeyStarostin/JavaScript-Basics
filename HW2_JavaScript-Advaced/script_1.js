"use strict";

class Library {
  #books;
  constructor(books) {
    if (!Array.isArray(books)) {
      throw Error("Список книг не массив");
    }
    if (
      (arr) =>
        arr.filter((item, index) => arr.indexOf(item) !== index).length === 0
    ) {
      this.#books = books;
    } else {
      throw Error("В списке книг есть дубликаты");
    }
  }

  allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw Error("Книга с таким названием уже существует");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    if (!this.hasBook(title)) {
      throw Error("Книга с таким названием не существует");
    }
    const id = this.#books.findIndex((e) => e === title);
    this.#books.splice(id, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const library = new Library(["Повелитель мух", "Властелин колец", "Над пропастью во ржи"]);
console.log(library.allBooks());

library.addBook("Маленький принц");
console.log(library.allBooks());

library.removeBook("Маленький принц");
console.log(library.allBooks());

console.log(library.hasBook("Маленький принц"));
console.log(library.hasBook("Властелин колец"));
