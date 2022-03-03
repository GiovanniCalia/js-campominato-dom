const eleLevel = document.getElementById("level");
const btnPlay = document.getElementById("play");
const eleGrid = document.querySelector(".grid");


btnPlay.addEventListener("click", setupGame);

arrLevels = [100, 81, 49];

function setupGame(){
    eleGrid.innerHTML = "";
    const indexLevel = parseInt(eleLevel.value);
    //console.log(indexLevel);
    const cellsCount = arrLevels[indexLevel];
    //console.log(cellsCount);
    const cellsPerRow = Math.sqrt(cellsCount);
    //console.log(cellsPerRow);
    //let bombNumber = [];


    for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
        const eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        //console.log(eleCell);
        eleCell.innerHTML = cellNum; 
        eleCell.style.width = `calc(100% / ${cellsPerRow})`;
        eleCell.style.height = `calc(100% / ${cellsPerRow})`;
        eleGrid.append(eleCell);
        eleCell.addEventListener("click", () => eleCell.classList.add("red"));
        //console.log(eleGrid); 
    }
    for (let casNum = 1; casNum <= 16; casNum++){
        let casualsNum = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
        let bombNumber = [];
        bombNumber.push(casualsNum);
        while (bombNumber.includes(casualsNum)){
            casualsNum = Math.floor(Math.random() * (100 - 1 + 1) ) + 1
        }
        console.log(bombNumber);
    }  

}

