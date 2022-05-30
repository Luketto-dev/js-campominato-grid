//Consegna
//Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
//Bonus
//L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const gridContainer = document.querySelector(".grid-container");
const selectDifficolta = document.getElementById("difficolta")
const buttonPlay = document.querySelector(".button-play")


function generateRandomNumber(min, max,) {

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result
    
}

function generateUniqueNumber(min, max, listaNumeriGiaGenerati){
    let numeroRandom;

    do{
        numeroRandom = generateRandomNumber(min, max)
    }while (listaNumeriGiaGenerati.includes(numeroRandom))

    return numeroRandom;
}


function generateGrid (xCells, yCells, maxCells){

    const cellsNumber = xCells * yCells;

    console.log(cellsNumber);

    gridContainer.style.width = `calc(50px * ${xCells})`;

    // variabile dove inserire i numeri random generati
    const numeriGenerati = [];
    //let numeriGeneratiOrdinati = [];

    // creo ogni singola cella necessaria
    for (let i = 0; i < cellsNumber; i++) {
        const randomNumber = generateUniqueNumber(1, maxCells, numeriGenerati);
        numeriGenerati.push(randomNumber);
        
        // ordino in modo crescente numeri all interno dell array 
        numeriGenerati.sort(function(a, b) {
            return a - b;
        });
        
        
        console.log(numeriGenerati)
    }
    
    for (let i = 0; i < numeriGenerati.length; i++) {
        
        // creare un div che rappresenta una singola cella
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // cell.append(randomNumber.toString());
        cell.innerHTML = `<span>${numeriGenerati[i]}</span>`;

        // Aggiungo un event listener sul click della cella
        // cell.addEventListener("click", onCellClick);
        cell.addEventListener("click", function () {
        // Come faccio a capire il div che ho cliccato?
        // this = l'elemento che ha generato l'evento usato nel addEventListener
            console.log("hai cliccato il numero", this.innerText);

            this.classList.toggle("active")

        });

        
        gridContainer.append(cell);


    }

}


buttonPlay.addEventListener("click", function (){
    let difficolta = parseInt(selectDifficolta.value)
    // ogni evento azzero il gridContainer
    gridContainer.innerHTML = ""
    console.log("sono nel click");
    if (difficolta === 1) {
        generateGrid(10, 10, 100)
        console.log("difficoltà 1");
    }else if(difficolta === 2){
        generateGrid(9, 9, 81)
        console.log("difficoltà 2");
    }else{
        generateGrid(7, 7, 49)
        console.log("difficoltà 3");
    }
})



