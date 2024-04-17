const container = document.querySelector(".container");


let numberDiv = 256;
// for(let i = 1; i <= numberDiv; i++){
//     const div = document.createElement("div");
//     console.log(i);
//     div.textContent = i;
//     container.appendChild(div);
// }

function addDiv() {
    for(let i = 1; i <= numberDiv; i++){
        const div = document.createElement("div");
        console.log(i);
        div.textContent = i;
        // div.style.backgroundColor = "red";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.border = "1px solid black";
        container.appendChild(div);
    }
}

let currentElem = null;

function paintDiv(event) {
    // container.style.backgroundColor = "red";

    if (currentElem) return;

    let target = event.target.closest('div');

    if(!target) return;

    if(!container.contains(target)) return;

    currentElem = target;
    target.style.backgroundColor = 'pink';

}
function resetColor(event) {
    // container.style.backgroundColor = "";

    if(!currentElem) return;

    let relatedTarget = event.relatedTarget;

    while (relatedTarget) {
        if(relatedTarget == currentElem) return;

        relatedTarget = relatedTarget.parentNode;
    }

    currentElem.style.backgroundColor = "";
    currentElem = null;
}
container.addEventListener("mouseover", paintDiv);
container.addEventListener("mouseout", resetColor);

addDiv()
console.log(container)