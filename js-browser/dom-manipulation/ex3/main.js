let container = document.querySelector('.container');
const generateRandomColor = function(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
for(let i = 0; i <7; i++){
    
    let box = document.createElement("div")
    box.classList.add('box')
    container.appendChild(box)
    box.onmouseenter = function() {
    box.style.backgroundColor = generateRandomColor()
    container.appendChild(box)
}
    //box.style.backgroundColor = generateRandomColor()
}

