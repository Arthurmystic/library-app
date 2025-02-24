const table = document.querySelector('#table')
const tbody = document.querySelector('#tbody')
const addBookButton = document.querySelector('#addBookButton');

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
addBookToLibrary('donopg', 'mug', 150, false, 3)
addBookToLibrary('Adventures of Tom Sawyer', 'Mark Twain', 400, true, "special")

myBook = ['dong', 'mug', 150, false, 3]

// for (let bookAttribute in myBook){
// }

function createCell(cellItem,tr){  
    let td = document.createElement('td')
    let span = document.createElement('span')
    span.textContent = cellItem
    td.appendChild(span)
    tr.appendChild(td) 
}

myLibrary.forEach((book, index) => {
    let tr = document.createElement('tr')
    createCell(index+1,tr);

    for (let key in book){
        createCell(book[key],tr);
    }

    tbody.appendChild(tr)
});



// for (let yourBook in myLibrary){

// }


// myBook.forEach((bookAtt, index) => {
//     createCell(bookAtt)
// });



// table.appendChild(tbody)

// console.table(myLibrary)