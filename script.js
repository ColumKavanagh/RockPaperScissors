var playerPick; //this has to be declared outside the function as the first thing that the 'onclick' event on the image in the html does is set this variable to either 1, 2, or 3.
function runGame(){
    var randomNum = Math.floor(Math.random() * 3) + 1;//computer picks a number from 1 to 3
    var computerChoice;
    var playerChoice;
    if (randomNum==1){
        computerChoice="Rock";
        }else if (randomNum==2){
            computerChoice="Paper";
        }else if(randomNum==3){
            computerChoice="Scissors";
            }
    if (playerPick==1){
        playerChoice="Rock";
        }else if (playerPick==2){
            playerChoice="Paper";
        }else if (playerPick==3){
            playerChoice="Scissors";
            }
    if(playerPick==randomNum){ //draw
                document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so it was a draw!";
        }else if (playerPick==1){ //ROCK
            if(randomNum==2){ //paper
                    document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so you lose!";
                }else if(randomNum==3){ //scissors     
                    document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so you win!";
                }
        }else if(playerPick==2){ //PAPER
            if(randomNum==1){ //rock
                    document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so you win!";
                }else if(randomNum==3){ //scissors
                    document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so you lose!";
                }
        }else if(playerPick==3){ //SCISSORS
            if(randomNum==1){ //rock
                    document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so you lose!";
                }else if(randomNum==2){ //paper
                    document.getElementById("gameResult").innerHTML="You picked "+playerChoice+". The computer picked "+computerChoice+", so you win!";
                }
        }
}