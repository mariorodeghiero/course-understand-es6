let books = [
  {
    title: "book 1",
    author: "author 1",
    local: "A1"
  },
  {
    title: "book 2",
    author: "author 2",
    local: "B1"
  },
  {
    title: "book 3",
    author: "author 3",
    author: "author 3",
    local: "C1"
  },
  {
    title: "book 4",
    author: "author 4",
    local: "D1"
  },
  {
    title: "book 5",
    author: "author 5",
    local: "C2"
  }
];

let booksShelf = new Map();

for (const book of books) {
  booksShelf.set(book.title, book.local);
}

function getLocal(title) {
  let shelf = booksShelf.get(title);
  if (shelf === undefined) {
    return "This book not found";
  }

  return shelf;
}

console.log(getLocal("book 2"));
