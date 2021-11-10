var playerPick; //this has to be declared outside the function as the first thing that the 'onclick' event on the image in the html does is set this variable to either 1, 2, or 3.
function runGame(){
    var randomNum = Math.floor(Math.random() * 3) + 1;//computer picks a number from 1 to 3
    var computerPick;
    if (randomNum==1){
        computerPick="Rock";
        }else if (randomNum==2){
            computerPick="Paper";
        }else if(randomNum==3){
            computerPick="Scissors";
            }
    if(playerPick==computerPick){ //draw
                document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so it was a draw!";
        }else if (playerPick=="Rock"){ //ROCK
            if(computerPick=="Paper"){ //paper
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you lose!";
                }else if(computerPick=="Scissors"){ //scissors     
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you win!";
                }
        }else if(playerPick=="Paper"){ //PAPER
            if(computerPick=="Rock"){ //rock
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you win!";
                }else if(computerPick=="Scissors"){ //scissors
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you lose!";
                }
        }else if(playerPick=="Scissors"){ //SCISSORS
            if(computerPick=="Rock"){ //rock
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you lose!";
                }else if(computerPick=="Paper"){ //paper
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you win!";
                }
        }
}