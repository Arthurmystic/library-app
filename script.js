const myLibrary = [];

function Book(title, author, pages, read, edition){
    this.Title = title;
    this.Author = author; 
    this.Pages = pages;
    this.Read = read;
    this.Edition = edition; 

}

function addBookToLibrary(title, author, pages, read, edition){
    book = new Book(title, author, pages, read, edition);
    myLibrary.push(book)
}

addBookToLibrary('tin', 'arthu', 200, true, 1)
addBookToLibrary('dong', 'mug', 150, false, 3)

console.table(myLibrary)