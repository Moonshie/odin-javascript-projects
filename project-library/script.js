const myLibrary = []

class Book {
  constructor(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
  }
}

const book1 = new Book('Brandon Sanderson', 'The Final Empire', 541, true)
const book2 = new Book('Jim Butcher', 'Storm Front', 322, true)
myLibrary.push(book1, book2)

const NEW_BOOK_BUTTON = document.getElementById('new-book')
const GALLERY = document.querySelector('.gallery')

function addBook() {
  const CARD = document.createElement('div')
  CARD.className = 'book-card'
  GALLERY.appendChild(CARD)
}

NEW_BOOK_BUTTON.addEventListener('click', addBook)
