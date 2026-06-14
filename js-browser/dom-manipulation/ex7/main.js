console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField)
// Target the div with an ID of down. 
// Store it in a variable called down, then console log it.
//  Does it look as you expect?
const downDiv = document.getElementById("down")
console.log(downDiv)
console.log(downDiv.innerHTML) 
console.log(playingField.innerHTML)
playingField.style.backgroundColor = "blue"
const ball = document.getElementById("ball")
ball.style.backgroundColor = "yellow"
// let ballLocation = "10px"

const getTop = function() {
    let ballLocation = ball.style.top
    let ballLocationNum = parseInt(ballLocation)||0
    return ballLocationNum
}
const getLeft = function() {
    let ballLocation = ball.style.left
    let ballLocationNum = parseInt(ballLocation)||0
    return ballLocationNum
}
const renderBall = function(left, top){
    ball.style.top = top+"px"
    ball.style.left = left+"px"
}
const moveRight = function(){
    let currentLeft = getLeft()
    let currentTop = getTop()
    
    // 2. Check if it's safe to move
    if (currentLeft + 15 <= 400) {
        renderBall(currentLeft+15, currentTop)
    }
}
const moveLeft = function(){
    let currentLeft = getLeft()
    let currentTop = getTop()
    
    // 2. Check if it's safe to move
    if (currentLeft - 15 >= 10) {
        renderBall(currentLeft-15, currentTop)
    }
}
const moveUp = function(){
    let currentLeft = getLeft()
    let currentTop = getTop()
    
    // 2. Check if it's safe to move
    if (currentTop - 15 >= 10) {
        renderBall(currentLeft, currentTop -15)
    }
}
const moveDown = function(){
    let currentLeft = getLeft()
    let currentTop = getTop()
    
    // 2. Check if it's safe to move
    if (currentTop + 15 <= 400) {
        renderBall(currentLeft, currentTop+15)
    }
}

const pressUp = function(){
    moveUp()
}
const pressDown = function(){
    moveDown()
} 
const pressRight = function(){
    moveRight()
}
const pressLeft = function(){
    moveLeft()
}
document.addEventListener("keydown", function(event) {
    // 'event.key' tells you exactly which button was pressed
    
    if (event.key === "ArrowRight") {
        pressRight()
    } else if (event.key === "ArrowLeft") {
        pressLeft()
    } else if (event.key === "ArrowUp") {
        pressUp()
    } else if (event.key === "ArrowDown") {
        pressDown()
    }
})
