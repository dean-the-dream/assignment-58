const { end } = ("@popperjs/core");
let player1Score = document.querySelector(".p1");
let player2Score = document.querySelector(".p2");
const scoreBox = document.querySelector(".score-limit input");
let maxScore = 5;
const reset = document.querySelector(".reset");



function endGame (){
    console.log("end game")
    document.removeEventListener("click", clickButton)
    if(+player1Score.innerText > +player2Score.innerText){
        player1Score.style = "color: green"
        player2Score.style = "color: red"
    }   else {
        player2Score.style = "color: green"
        player1Score.style = "color: red"
    }
    document.querySelector(".p1Up").style = "color: rgba(0, 0, 0, .5)"
    document.querySelector(".p2Up").style = "color: rgba(0, 0, 0, .5)"

}

function addPointP1 (){
    console.log("add a point")
    player1Score.innerText = `${(+player1Score.innerText) + 1}`;
    console.log("test1")
    if(+player1Score.innerText === maxScore){ 
        console.log("test")
    }
    
}

function addPointP2 (){
    player2Score.innerText = `${(+player2Score.innerText) + 1}`
    if(+player2Score.innerText === maxScore){ endGame();}

}

function resetScreen (){
        scoreBox.value="5";
        maxScore = 5;
        player1Score.innerText = 0;
        player2Score.innerText = 0;
        player1Score.style = null
        player2Score.style = null
        document.addEventListener("click",clickButton)
        document.querySelector(".p1Up").style = null
        document.querySelector(".p2Up").style = null
}




function clickButton (e){
    if (e.target.className.includes("p1Up")){
        addPointP1();
        console.log("the game continues")
    }
    if (e.target.className.includes("p2Up")){
        console.log("the game continues")
        addPointP2();
    }
    if (e.target.className.includes("reset")){
        resetScreen()
    }
     if((+player1Score.innerText === maxScore)  || (+player2Score.innerText === maxScore)){
        endGame();
    }
    
}





document.addEventListener("click",clickButton)
reset.addEventListener("click", resetScreen)
scoreBox.addEventListener("blur",(e) => {maxScore = +scoreBox.value})
