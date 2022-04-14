let bookSaver = []
let subbutton = document.getElementById('subbutton')
let cardContainer = document.getElementById('cardcontainer')
let newbookbutton = document.getElementById('newbookbutton')
let libraryform = document.getElementById('libraryform')

newbookbutton.addEventListener('click', showForm)

function showForm() {
    libraryform.style.display = 'flex';
}

subbutton.addEventListener('submit', createBookInfo)

function Book() {
}

function createBook(name, author, numberOfPages) {
    this.name = name
    this.author = author
    this.numberOfPages = numberOfPages
}

Book.prototype.sayInfo = function() {
    console.log("name: " + this.name + "author: " + this.author + "number of pages: " + this.numberOfPages)
}

Book.prototype.createCard = function() {
    
}

createBook.prototype = Object.create(Book.prototype)

function createCard() {
    cardContainer.appendChild
}

function createBookInfo(e) {
    event.preventDefault()
    libraryform.style.display = 'none'
    let nameOfBook = document.getElementById('nameofbook').value
    let authorOfBook = document.getElementById('authorofbook').value
    let pageNumbers = document.getElementById('pagenumber').value


    let newBook = new createBook(nameOfBook, authorOfBook, pageNumbers)
    newBook.sayInfo()
    bookSaver.push(newBook)
    console.log(bookSaver)
   
    //transforming of headers and input answers into card
    let createContainer = document.createElement('div')
    let createHeader1 = document.createElement('h1');
    createHeader1.setAttribute("id", "bookname")
    let createHeader2 = document.createElement('h1');
    createHeader2.setAttribute("id", "authorname")
    let createHeader3 = document.createElement('h1');
    createHeader3.setAttribute("id", "pagenumber")
    let createHaveReadQues = document.createElement('h1');
    createHaveReadQues.setAttribute("id", "havereadques")
    let createObjectInfo1 = document.createElement('h4');
    createObjectInfo1.setAttribute("id", "booknameinfo")
    let createObjectInfo2 = document.createElement('h4');
    createObjectInfo2.setAttribute("id", "authornameinfo")
    let createObjectInfo3 = document.createElement('h4');
    createObjectInfo3.setAttribute("id", "pagenumberinfo")
    let createRemoveButton = document.createElement('button')
    createRemoveButton.setAttribute("id", "deletebutton")

    createHeader1.innerHTML = "Book Title:"
    createHeader2.innerHTML = "Author:"
    createHeader3.innerHTML = "Number of Pages:"
    createObjectInfo1.innerHTML = nameOfBook
    createObjectInfo2.innerHTML = authorOfBook
    createObjectInfo3.innerHTML = pageNumbers



    createRemoveButton.innerText = "remove"

    createContainer.className = "createdContainer"
    cardContainer.appendChild(createContainer)
    createContainer.appendChild(createHeader1)
    createHeader1.appendChild(createObjectInfo1)
    createContainer.appendChild(createHeader2)
    createHeader2.appendChild(createObjectInfo2)
    createContainer.appendChild(createHeader3)
    createHeader3.appendChild(createObjectInfo3)


    createContainer.appendChild(createRemoveButton)

    createRemoveButton.addEventListener('click', removeButtonFunction)
function removeButtonFunction() {
    createContainer.remove()
}

    nameOfBook.innerHTML = null;


    


}
