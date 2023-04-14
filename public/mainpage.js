//Event message
const BookAddedEvent = 'bookAdded';
const BooksDeletedEvent = "allDeleted"
let socket;

const headers = ["Title", "Author", "Volumes Owned", "Number of Volmues", "Completion", "Language", "Price ($)"];

function calcTotals() {
    let totalVol = 0;
    let totalPrice = 0;

    bookList = localToBooks();

    for (let i = 0; i < bookList.length; i++) {
        totalVol += bookList[i].NumVol;
        totalPrice += bookList[i].NumVol * bookList[i].price$;
    }

    document.getElementById("totals").innerHTML = "Total Volumes: " + totalVol + " | Total Price: $" + totalPrice;
}

function makeTable(data = booksInfo) {
    const bookList = document.getElementById("listOfBooks");
    let row = "";
    for (let i of data) {
        let string = "<tr>";
        string += "<td>" + i.Title + "</td>";
        string += "<td>" + i.Author + "</td>";
        string += "<td>" + i.Volumes + "</td>";
        string += "<td>" + i.NumVol + "</td>";
        string += "<td>" + i.Completion + "</td>";
        string += "<td>" + i.Language + "</td>";
        string += "<td>" + i.price$ + "</td>";
        string += "</tr>";

        row += string;
    }
    bookList.innerHTML = "<table class=\"myTable\"><tr><th>" + headers.join("</th><th>") + "</th></tr>" + row + "</table>";
}

function toInsert() {
    const title = document.querySelector('#bookTitle')?.value;
    const author = document.querySelector('#bookAuthor')?.value;
    const volumes = document.querySelector('#volOwned')?.value;
    const numVols = document.querySelector('#numVol')?.value;
    let completed = "";
    if (document.getElementById('completedButton').checked) {
        completed = "completed"
    }
    else if (document.getElementById('incompleteButton').checked) {
        completed = "incomplete"
    }
    let language = ""
    if (document.getElementById('enButton').checked) {
        language = "EN"
    }
    else if (document.getElementById('jpButton').checked) {
        language = "JP"
    }
    const price = document.querySelector('#price')?.value;

    intPrice = parseInt(price);
    intVol = parseInt(numVols);
    toAdd = {
        Title: title, Author: author, Volumes: volumes, NumVol: intVol, Completion: completed,
        Language: language, price$: intPrice
    };
    saveBookToList(toAdd)
    broadcastEvent(localStorage.getItem('userName'), BookAddedEvent, toAdd.Title);
}

async function saveBookToList(bookToAdd) {

    try {
        await fetch('/api/book', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookToAdd),
        });

    } catch {
        // If there was an error then just track scores locally
        // this.updateBooksLocal(bookToAdd);
    }

    loadBooks();
}

async function deleteBook() {
    fetch('/api/book/deleteAll', {
        method: 'delete',
    })
    loadBooks();
    broadcastEvent(localStorage.getItem('userName'), BooksDeletedEvent);
}

async function loadBooks() {
    let books = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/allBooks');
        books = await response.json();

        // Save the scores in case we go offline in the future
        localStorage.setItem('books', JSON.stringify(books));
    } catch {
        // If there was an error then just use the last saved scores
        localToBooks();
    }

    makeTable(books);
    calcTotals();
}

function search() {
    const searchTitle = document.querySelector('#searchTitle')?.value;
    if (searchTitle === "") {
        loadBooks();
    } else {
        const bookList = localToBooks();
        const filteredList = bookList.filter(item => item.Title.toLowerCase().startsWith(searchTitle.toLowerCase()));
        makeTable(filteredList);
    }
}

function logout() {
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
    window.location.href = 'index.html';
}

// converts local data to a usable object
function localToBooks() {
    const booksText = localStorage.getItem('books');
    if (booksText) {
        return JSON.parse(booksText);
    }
    return []
}

function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        displayMsg('system', 'librarian', 'connected');
    };
    socket.onclose = (event) => {
        displayMsg('system', 'librarian', 'disconnected');
    };
    socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === BookAddedEvent) {
            displayMsg('user', msg.from, `added ${msg.value}`);
        } else if (msg.type === BooksDeletedEvent) {
            displayMsg('user', msg.from, `Deleted Everything`);
        }
    };
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent(from, type, value) {
    const event = {
        from: from,
        type: type,
        value: value,
    };
    socket.send(JSON.stringify(event));
}


const userNameEl = document.querySelector('.user-name');
userNameEl.textContent = this.getUserName();
configureWebSocket();

loadBooks();
// makeTable(booksInfo);;

