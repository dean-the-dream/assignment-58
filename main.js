const player1Score = document.querySelector(".p1");
const player2Score = document.querySelector(".p2");
const scoreBox = document.querySelector(".score-limit input");
const maxScore = ((scoreBox.innerText) ? scoreBox.value = 2 : "5");


function clickButton (e){
    console.log("it works")
    if((player1Score.innerText == maxScore)  || (player2Score.innerText == maxScore)){
        endGame();
    } else {

        if (e.target.className.includes("p1Up")){
            addPointP1();
            console.log("the game continues")
        }
        if (e.target.className.includes("p2Up")){
            addPointP2();
        }
        if (e.target.className.includes("reset")){
            resetScreen()
        }
    }
    
}



function addPointP1 (){
    console.log("add a point")
    player1Score = +player1Score.innerText++
}

function addPointP2 (){
    player2Score = +player2Score.innerText++
}
function resetScreen (){

}
function endGame () {}

document.addEventListener("click",clickButton)