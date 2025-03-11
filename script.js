const myLibrary = [];
const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
const addBookButton = document.querySelector('#addBookButton');
const modal = document.querySelector("[data-modal]");
const cancelButton = document.querySelector("#cancelButton");
const modalForm = document.querySelector("#modalForm");
const submitButton = document.querySelector('#submitButton');

let bookCount = 0;

addBookButton.addEventListener('click', () => {
    modal.showModal();
})

cancelButton.addEventListener('click', () => {
    modal.close();
})

modalForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from actually submitting
    bookCount += 1;

    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const readCheckbox = document.querySelector("#read");
    const bookReadStatus = readCheckbox.checked ? "Yes" : "No";
    const bookEdition = document.querySelector("#edition").value;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookReadStatus, bookEdition, bookCount);

    modal.close();
});

function Book(title, author, pages, read, edition,bookID) {   // Book object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.edition = edition;
    // this.bookID = bookID;
}

function addBookToLibrary(title, author, pages, read, edition, bookID) {
    newBooktoLib = new Book(title, author, pages, read, edition,bookID);  // Create a new book object to add to library
    newBook = new Book(title, author, pages, read, edition);  // Create a new book object to display
    myLibrary.push(newBooktoLib); //  Add the book to the library array

    // adding book to table;
    let tr = document.createElement('tr'); // Create a new table row
    tr.setAttribute("data-id", bookID)
    createCell(bookID, tr, 'classNonEditableCell'); // create book number

    let lastKey = newBook[newBook.length -1];
    for (let key in newBook) {
        createCell(newBook[key], tr, 'classEditableCell');
    }
    createCell('DEL', tr, 'classDelBtn');  //create delete button

    tbody.appendChild(tr);
}

function createCell(cellContent, tr, cellClass) {
    const td = document.createElement('td');

    switch (cellClass) {
        case 'classNonEditableCell':
        case 'classEditableCell':
            td.className = cellClass; 
            td.innerText = cellContent;
            if (cellClass === 'classEditableCell') {
                td.setAttribute('contenteditable', 'true');
            }
            break

        case 'classDelBtn':
            const delButton = document.createElement('button');
            delButton.innerText = cellContent;
            td.appendChild(delButton);
            td.style.padding = "0px";
            td.style.border = "none";
            delButton.addEventListener('click', ()=>{
                const bkID = tr.dataset.id;
                tbody.removeChild(tr);
                // myLibrary = myLibrary.filter(book.id !== bkID)
            })
            break
    }
    tr.appendChild(td);
}


