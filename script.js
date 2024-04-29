const container = document.querySelector(".container");

const btn = document.createElement("button");
container.before(btn);
btn.textContent = 'CHOOSE NUMBER OF SQUARES';
btn.style.display = "block";
btn.style.border = "1px solid black";
btn.style.padding = "8px";
btn.style.margin = "5px auto";

let numberDiv;

btn.addEventListener("click", numSquares);

function numSquares(){
    numberDiv = prompt("Enter number of squares on one side", 16);

    if(numberDiv > 100) {
        alert("Enter number from 1 to 100")
    } else {
        numberDiv *= numberDiv;
        container.innerHTML = '';
    return drawGrid(numberDiv);
    }
    
}

function drawGrid(){
    return addDiv();
}

console.log(numberDiv);

function addDiv() {
    for(let i = 1; i <= numberDiv; i++){
        const div = document.createElement("div");
        div.style.width = 800 / Math.sqrt(numberDiv) + "px";
        div.style.height = 800 / Math.sqrt(numberDiv) + "px";
        container.appendChild(div);
    }
}

let currentElem = null;

function paintDiv() {
    container.onmouseover = function(event) {
        if (currentElem) return;

        let target = event.target.closest('div');

        if(!target) return;

        if(!container.contains(target)) return;

        currentElem = target;

        target.style.backgroundColor = randomColor();
    }

}

function resetColor() {
    container.onmouseout = function(event){
        if(!currentElem) return;

        let relatedTarget = event.relatedTarget;

        while (relatedTarget) {
            if(relatedTarget == currentElem) return;
            relatedTarget = relatedTarget.parentNode;
        }

        currentElem = null;
    }
}

function randomColor() {
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color = "#";
    for (let i = 0; i < 6; i++){
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        color += hexCharacters[randomPosition];
        console.log(randomPosition);
    }
    return color;
}

container.addEventListener("mouseover", paintDiv);
container.addEventListener("mouseout", resetColor);

drawGrid(numberDiv = 10 * 10);