let player1Score = 0;
let player2Score = 0;

const choices=document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScrepara = document.querySelector('#player1-score');
const compScrepara = document.querySelector('#player2-score');

const draw = () => {
    console.log('It is a draw');
    msg.innerText = 'It is a draw';
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (player1Win, player1Choice, computerChoice) => {
    if(player1Win){
        player1Score++;
        userScrepara.innerText = player1Score;
        msg.innerText = `You win! Your ${player1Choice} beats ${computerChoice}`;
        msg.style.backgroundColor = '#00ff00';
    }else{
        player2Score++;
        compScrepara.innerText = player2Score;
        msg.innerText = `Computer wins! ${computerChoice} beats your ${player1Choice}`;
        msg.style.backgroundColor = '#ff0000';
    }
}
const gencompChoice = () => {
    const options=['rock', 'paper', 'scissors'];
    const rdmIndx = Math.floor(Math.random() * 3);
    return options[rdmIndx];
};

const playgame = (player1Choice) => {
    const computerChoice = gencompChoice(); 

    if(player1Choice === computerChoice){
        draw();
    }else{
        let player1Win = true;
        if(player1Choice === 'rock' ){
            player1Win = computerChoice  === 'paper' ? false : true;
        }else if(player1Choice === 'paper' ){
            player1Win = computerChoice  === 'scissors' ? false : true;
        }else {
            player1Win = computerChoice  === 'rock' ? false : true;
        }
        showWinner(player1Win, player1Choice, computerChoice);
    }
    

} 

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const Player1Choice = choice.getAttribute('id');
        playgame(Player1Choice);
        });
});