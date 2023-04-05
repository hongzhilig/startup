const booksInfo = [
    {
        Title: "アズ−ルレ−ンコミックアンソロジ (Azur Lane comic anthology)", Author: "anthology", Volumes: "1-12", NumVol: 12, Completion: "complete",
        Language: "JP", price$: 15
    },
    {
        Title: "Horimiya", Author: "HERO", Volumes: "1-15", NumVol: 15, Completion: "incomplete",
        Language: "EN", price$: 13
    },
    {
        Title: "ホリミヤ (Horimiya)", Author: "HERO", Volumes: "1-5, 12-16 + 16SP", NumVol: 11, Completion: "complete",
        Language: "JP", price$: 12
    },
    {
        Title: "Spy X Family", Author: "Tatsuya Endo", Volumes: "1-8", NumVol: 8, Completion: "incomplete",
        Language: "EN", price$: 10
    },
    {
        Title: "SPY X FAMILY", Author: "Tatsuya Endo", Volumes: "1-2", NumVol: 2, Completion: "incomplete",
        Language: "JP", price$: 10
    },
    {
        Title: "The World God Only Knows", Author: "Wakaki Tamiki", Volumes: "1-25", NumVol: 25, Completion: "complete",
        Language: "JP", price$: 12
    },
    {
        Title: "We Never Learn", Author: "Taishi Tsutsui", Volumes: "1-21", NumVol: 21, Completion: "complete",
        Language: "EN", price$: 10
    },
    {
        Title: "ZOM 100: BUCKET LIST OF THE DEAD", Author: "Haro Aso", Volumes: "1-8", NumVol: 8, Completion: "incomplete",
        Language: "EN", price$: 13
    }
]

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
    // calcTotals();
    // makeTable(booksInfo);
    
}

async function saveBookToList(bookToAdd){

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
  function localToBooks(){
    const booksText = localStorage.getItem('books');
      if (booksText) {
        return JSON.parse(booksText);
      }
    return []
  }

function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

const userNameEl = document.querySelector('.user-name');
userNameEl.textContent = this.getUserName();

loadBooks();
// makeTable(booksInfo);;

