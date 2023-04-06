//Event message
const BookAddedEvent = 'bookAdded';
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
    bookList.innerHTML = "<table><tr><th>" + headers.join("</th><th>") + "</th></tr>" + row + "</table>";
}

function toInsert() {
    toAdd = {
        Title: "Testing", Author: "Alex", Volumes: "1", NumVol: 1, Completion: "incomplete",
        Language: "EN", price$: 1
    };
    // booksInfo.push(toAdd);
    saveBookToList(toAdd)
    broadcastEvent(localStorage.getItem('userName'), BookAddedEvent, toAdd.Title)
    // calcTotals();
    // makeTable(booksInfo);

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
        } else  {
            displayMsg('user', msg.from, `How did you do this?`);
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

