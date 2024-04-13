let btnBoxes = document.querySelectorAll('.btn-box');
let resetBtn = document.querySelector('.reset-btn');
let newgameBtn = document.querySelector('.new-btn');
let mssgContainer = document.querySelector('.msg-container');
let msgText = document.querySelector('.msg-text');
let turn0 = true;

let moveChance = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

btnBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }

        else {
            box.innerText = "X"
            turn0 = true;
        }

        box.disbled = true;

        moveChance ++;
        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of btnBoxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    turn0 = false;
    for (let box of btnBoxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msgText.innerText = `Congratulations the winner is ${winner}`;
    mssgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    
    if(moveChance >=3){
        for (pattern of winPatterns) {
            let pos1Val = btnBoxes[pattern[0]].innerText;
            let pos2val = btnBoxes[pattern[1]].innerText;
            let pos3Val = btnBoxes[pattern[2]].innerText;
    
            if (pos1Val !== "" && pos2val !== "" && pos3Val !== "") {
                if(pos1Val === pos2val && pos2val === pos3Val){
                    showWinner(pos1Val)
                }
            }
        }
    }

    if(moveChance === 9){
        msgText.innerText = "It's a draw! Please start a new game.";
        mssgContainer.classList.remove('hide');
        disableBoxes();
    }
}


const resetGame = () => {
    turn0 = true;
    enableBoxes();
    mssgContainer.classList.add('hide');
}


newgameBtn.addEventListener('click', resetGame);

resetBtn.addEventListener('click', resetGame)

