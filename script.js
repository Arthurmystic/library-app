const myLibrary = [];
const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
const addBookButton = document.querySelector('#addBookButton');
const modal = document.querySelector("[data-modal]");
const cancelButton = document.querySelector("#cancelButton");
const modalForm = document.querySelector("#modalForm");

let numberOfBooks = 0;

addBookButton.addEventListener('click',()=>{
    modal.showModal();
})

cancelButton.addEventListener('click',()=>{
    modal.close();
})

modalForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    numberOfBooks +=1;

    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const readCheckbox = document.querySelector("#read");
    const bookRead = readCheckbox.checked? "Yes": "No";
    const bookEdition = document.querySelector("#edition").value;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead, bookEdition, numberOfBooks);
    modal.close();
});

function Book(title, author, pages, read, edition){
    this.Title = title;
    this.Author = author; 
    this.Pages = pages;
    this.Read = read;
    this.Edition = edition; 
} 

function addBookToLibrary(title, author, pages, read, edition,bookID){
    book = new Book(title, author, pages, read, edition);
    myLibrary.push(book); // adds book to my library array

    // adding book to table;
    let tr = document.createElement('tr');
    createCell(bookID,tr);
    for (let key in book){
        createCell(book[key],tr);
    }
    tbody.appendChild(tr); 
}

function createCell(cellItem,tr){  
    let td = document.createElement('td');
    let span = document.createElement('span');
    span.textContent = cellItem;
    td.appendChild(span);
    tr.appendChild(td); 
}