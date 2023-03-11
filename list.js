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

const headers = ["Title", "Author", "Volumes Owned", "Number of Volmues", "Language", "price In $"];

let totalVol = 0;
let totalPrice = 0;

for (let i = 0; i < booksInfo.length; i++) {
    totalVol += booksInfo[i].NumVol;
    totalPrice += (booksInfo[i].NumVol * booksInfo[i].price$)
}

document.getElementById("totals").innerHTML = "Total Volumes: " + totalVol + " | Total Price: $" + totalPrice;

function makeTable(data = booksInfo) {
    const bookList = document.getElementById("listOfBooks");
    let row = "";
    for (let i of data) {
        let string = "<tr>";
        string += "<td>" + i.Title + "</td>";
        string += "<td>" + i.Author + "</td>";
        string += "<td>" + i.Volumes + "</td>";
        string += "<td>" + i.NumVol + "</td>";
        string += "<td>" + i.Language + "</td>";
        string += "<td>" + i.price$ + "</td>";
        string += "</tr>";

        row += string;
    }
    bookList.innerHTML = "<table><tr><th>" + headers.join("</th><th>") + "</th></tr>" + row + "</table>";
}

makeTable(booksInfo); 

// function makeTable(data = booksInfo){
//     document.createElement("tr");
//     document.createElement("th");
//     const bookList = document.getElementById("listOfBooks");
//     let row = "";
//     for(let i of data){
//         let string = `<tr>`;
//         string += i.Title + " ";
//         string += i.Author + " ";
//         string += i.Volumes + " ";
//         string += i.NumVol + " ";
//         string += i.Language + " ";
//         string += i.price$;
//         string += "  |  ";
//         string += '</tr>'

//         row += string;
//     }
//     bookList.innerHTML = `<table> 
//         <tr> 
//             <th>${"Title"}</th> 
//         </tr>
//     </table>`;
//     bookList.innerHTML = row;
// }

// makeTable(booksInfo);
