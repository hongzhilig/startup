const booksInfo = [
    {
        Title: "アズ−ルレ−ンコミックアンソロジ (Azur Lane comic anthology)", Author: "anthology", Volumes: "1-12", NumVol: 12, Completion: "complete",
        Language: "JP", price$: 15
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

const headers = ["Title", "Author", "Volumes Owned", "Number of Volmues", "Language", "price In $"];

let totalVol = 0;
let totalPrice = 0;

for (let i = 0; i < booksInfo.length; i++) {
    totalVol += booksInfo[i].NumVol;
    totalPrice += (booksInfo[i].NumVol * booksInfo[i].price$)
}

document.getElementById("totals").innerHTML = "Total Volumes: " + totalVol + " | Total Price: $" + totalPrice;

function makeTable(data = booksInfo){
    document.createElement("tr");
    document.createElement("th");
    const bookList = document.getElementById("listOfBooks");
    let row = "";
    for(let i of data){
        let string = `<tr>`;
        string += i.Title + " ";
        string += i.Author + " ";
        string += i.Volumes + " ";
        string += i.NumVol + " ";
        string += i.Language + " ";
        string += i.price$;
        string += "\n";
        string += '</tr>'

        row += string;
    }
    bookList.innerHTML = `<table> 
        <tr> 
            <th>${"Title"}</th> 
        </tr>
    </table>`;
    bookList.innerHTML = row;
}

makeTable(booksInfo);