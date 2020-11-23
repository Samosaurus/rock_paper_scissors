
        //Global constants and arrays
        const RPS = ['rock', 'paper', 'scissors'];

        let playerPick = '';
        let wins = 0;
        let losses = 0;
        let ties = 0;
        let rounds = 0;


        const roundContent = document.querySelector('#round');
        const lossesContent = document.querySelector('#losses');
        const winsContent = document.querySelector('#wins');
        const outcomeContent = document.querySelector('#outcome');

        const scissors = document.querySelector('#scissors')
        const rock = document.querySelector('#rock')
        const paper = document.querySelector('#paper')

        scissors.addEventListener('click', function (e)  {
            game('scissors', computerPlay());
        });

        rock.addEventListener('click', function (e)  {
            game('rock', computerPlay());
        });

        paper.addEventListener('click', function (e)  {
            game('paper', computerPlay());
        });

        //computerPick Code
        function computerPlay() {
            let computerPick =
                RPS[Math.floor(Math.random() * 3)];
            return computerPick;
        }

        //Plays one round of RPS and outputs a emssage
        function playRound(playerPick, computerPick) {

            //if both the user and the computer pick the same thing, -> Output is 'That's a tie! You both picked (selection)!''
            if (playerPick == computerPick) {
                let result = "That's a tie! You both picked " + playerPick + "! ";
                return result;
            }
            //If the computer wins, output 'You lose! computerPick beats playerPick!'
            else if (
                (playerPick == 'rock' && computerPick == 'paper') ||
                (playerPick == 'scissors' && computerPick == 'rock') ||
                (playerPick == 'paper' && computerPick == 'scissors')
            ) {
                let result = "You lose - " + computerPick + " beats " + playerPick + "!";
                return result;
            }

            //If the user wins - > Output is 'You win! (playerPick) beats (conmputerSelection)!'
            else if (
                (playerPick == 'rock' && computerPick == 'scissors') ||
                (playerPick == 'scissors' && computerPick == 'paper') ||
                (playerPick == 'paper' && computerPick == 'rock')
            ) {
                let result = "You win - " + playerPick + " beats " + computerPick + "!";
                return result;
            }

            //error message
            else {
                let result = 'Whoops! Did you pick rock, paper, or scissors?';
                return result;
            }

            playerPick = '';

        }//end playRound


        function finalWinner(wins, losses) {
            
            if (wins > losses) {
                return "Winner winner chicken dinner!";
            } else if (wins < losses) {
                return "Better luck next time!";
            } else {
                return "Something odd happened?";
            };
     
        }

        //repeats playRound and reports the score until best out of 5
        
        function game(playerPick) {
            
            let computerPick = computerPlay();
            
            let result = playRound(playerPick, computerPick);

            

            if (result.includes("win")){
                wins++;
            } else if (result.includes("lose")) {
                losses++;
            } else {
                console.log("game() something went wrong");
            } 
            rounds++;

            if (rounds == 1) {
                outcomeContent.textContent = " ";
            }
 
            roundContent.textContent = rounds;
            lossesContent.textContent = losses;
            winsContent.textContent = wins;

            //outputs score after each round
            console.log(result + " Round: " + rounds + "/5. Wins: " + wins + ". Losses: " + losses + ". Ties: " + ties + ".");

            //Reports final winner after 5 rounds are played
            if (wins == 5 || losses == 5) {
                console.log(finalWinner(wins, losses, ties));
                outcomeContent.textContent = finalWinner(wins, losses, ties);
                rounds = wins = losses = ties = 0;
            } 

            
        
        }// end of game
