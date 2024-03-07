let score=0;
let cscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("resultbar");
const yourscore = document.getElementById("yourScoere");
const comScore = document.getElementById("comScore");



const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawgame = (comchoice) => {
 console.log("Game was Draw");
  console.log(msg);
  msg.innerText = "Game Draw Computer Chooses " + comchoice ;
  msg.style.backgroundColor = "gray";


}; 


const showWinner = (userWin, userchoice, comchoice) => {
    if(userWin){
        console.log("You win");
        msg.innerText = "you  win! " + userchoice + " beats "  + comchoice;
        msg.style.backgroundColor = "green";


        score++;
        yourscore.innerText = score ;

        console.log(score, cscore);

    }
    else{
        console.log("You loose");
        msg.innerText = "Computer win";
        msg.style.backgroundColor = "red";
        msg.innerText = "you  Loose ! " + comchoice + " beats "  + userchoice;

        cscore++;
        comScore.innerText = cscore ;

        console.log(score, cscore);


    }
}

const playgame = (userchoice) => {
    console.log("user choice is", userchoice);
    //Generating computer choice
    const comchoice = genComChoice();
    console.log("computer choice is", comchoice);

    if(userchoice === comchoice){
        //draw game
        drawgame(comchoice);
    } else {
        let userWin = "";
        if (userchoice === "rock") {
            userWin = comchoice === "paper" ? false : true ;
        } else if (userchoice === "paper") {
            userWin = comchoice === "scissors" ? false : true ;
        } else if (userchoice === "scissors")   {
            userWin = comchoice === "rock" ? false : true ;
        }
        showWinner(userWin, userchoice, comchoice);

    }

}


choices.forEach((Choice) => {
    Choice.addEventListener("click", () =>{
        const userchoice = Choice.getAttribute("id");
        playgame(userchoice);
    })

});
