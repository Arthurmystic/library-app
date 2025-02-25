const myLibrary = [];
const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
const addBookButton = document.querySelector('#addBookButton');
const modal = document.querySelector("[data-modal]");
const cancelButton = document.querySelector("#cancelButton");
const modalForm = document.querySelector("#modalForm");
const submitButton = document.querySelector('#submitButton');
const delBook = document.querySelector(".delBtn");

let numberOfBooks = 0;

addBookButton.addEventListener('click', () => {
    modal.showModal();
})

cancelButton.addEventListener('click', () => {
    modal.close();
})

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    numberOfBooks += 1;

    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const readCheckbox = document.querySelector("#read");
    const bookRead = readCheckbox.checked ? "Yes" : "No";
    const bookEdition = document.querySelector("#edition").value;

    console.log(`nuBooks: ${numberOfBooks}`)
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead, bookEdition, numberOfBooks);

    bookAttr = document.querySelector(".bookAttr");
    bookAttr = document.querySelectorAll(".bookAttr");
    bookAttr.forEach(cell => {
        cell.setAttribute('contenteditable', 'true');
    });
    modal.close();
});

function Book(title, author, pages, read, edition) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
    this.Edition = edition;
}

function addBookToLibrary(title, author, pages, read, edition, bookID) {
    book = new Book(title, author, pages, read, edition);
    myLibrary.push(book); // adds book to my library array

    // adding book to table;
    let tr = document.createElement('tr');
    tr.setAttribute("data-id", bookID)
    createCell(bookID, tr, 'classBookNum'); // create book number

    for (let key in book) {
        createCell(book[key], tr, 'classBookAttr');
    }
    createCell('DEL', tr, 'delBtn');  //create delete button

    tbody.appendChild(tr);
}

function createCell(cellItem, tr, tdClass) {
    const td = document.createElement('td');

    switch (tdClass) {
        case 'classBookNum':
        case 'classBookAttr':
            td.className = tdClass;
            td.innerText = cellItem;
            if (tdClass === 'classBookAttr') {
                td.setAttribute('contenteditable', 'true');
            }
            break

        case 'delBtn':
            const delButton = document.createElement('button');
            delButton.innerText = cellItem;
            td.appendChild(delButton);
            td.style.padding = "0px";
            td.style.border = "none";
            delButton.addEventListener('click', ()=>{
                tbody.removeChild(tr);
            })
            break
    }
    tr.appendChild(td);
}