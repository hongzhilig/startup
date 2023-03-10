const bookList = [
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

let totalVol = 0; 
let totalPrice = 0;

for (let i = 0; i < bookList.length; i++){
    totalVol += bookList[i].NumVol;
    totalPrice += (bookList[i].NumVol * bookList[i].price$)
}

document.getElementById("totals").innerHTML = "Total Volumes: " + totalVol + " | Total Price: $" + totalPrice;


