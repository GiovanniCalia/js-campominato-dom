const eleLevel = document.getElementById("level");
const btnPlay = document.getElementById("play");
const eleGrid = document.querySelector(".grid");
const eleOutput =  document.querySelector(".output");
arrLevels = [100, 81, 49]; 
const numberBomb = 16;

btnPlay.addEventListener("click", setupGame);
eleLevel.addEventListener("change", setupGame);

function setupGame(){
    eleGrid.innerHTML = "";
    eleOutput.innerHTML = "";
    score = 0;
    const indexLevel = parseInt(eleLevel.value);
    const cellsCount = arrLevels[indexLevel];
    const cellsPerRow = Math.sqrt(cellsCount);
    const goodCells = cellsCount - numberBomb;


    for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
        const eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        eleCell.innerHTML = cellNum; 
        eleCell.style.width = `calc(100% / ${cellsPerRow})`;
        eleCell.style.height = `calc(100% / ${cellsPerRow})`;
        eleGrid.append(eleCell);
        eleCell.addEventListener("click", manageCellClick);
    }

    const arrRandom = [];
    for (let i = 1; i <= numberBomb; i++){
        let randomNumber;
    do {
        randomNumber = getRandomnumber(1, cellsCount);
    } while (arrRandom.includes(randomNumber)){
        (arrRandom.push(randomNumber))
    }
    console.log(arrRandom.sort());
    } 

    function manageCellClick(){
        cellValue = parseInt(this.innerHTML);
        console.log("valore cella", cellValue);
        
            if (arrRandom.includes(cellValue)){
                this.classList.add("redBomb");
                eleOutput.innerHTML = `Hai preso una bomba. Il tuo punteggio è:` + score; // oppure fai document.querySelectorAll(".blue").length;, al posto di score.
                const cells = document.querySelectorAll(".cell");
                for (i = 0; i < cells.length; i++){
                    cells[i].removeEventListener("click", manageCellClick);
                }
            } else {
                this.classList.add("blue");
                score++;
            }
        
        if (score == goodCells ){
            eleOutput.innerHTML = `Hai vinto! Il tuo punteggio è:` + score;
            const cells = document.querySelectorAll(".cell");
            for (i = 0; i < cells.length; i++){
                cells[i].removeEventListener("click", manageCellClick);
            }
        }

        this.removeEventListener("click", manageCellClick);
    }
}

function getRandomnumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


