import { COORDINATES_MAP, PLAYERS, STEP_LENGTH } from "./constants";

const diceButtonElement = document.querySelector('#dice-btn');
const resetButtonElement = document.querySelector('button#reset-btn');
const pieceButtonElement = document.querySelector('.player-pieces');
const playerPiecesElements = {
    p1: document.querySelectorAll('[palyer-id="p1"].player-piece'),
    p2: document.querySelectorAll('[player-id="p2"].player-piece'),
}

export class UI{
    static listenDiceClick(){
        diceButtonElement.addEventListener('click',callback);
    }

    static listenResetClick(){
        resetButtonElement.addEventListener('click', callback);
    }

    static listenPieceClick(){
        pieceButtonElement.addEventListener('click', callback);
    }

    /**
     * 
     * @param {string} player 
     * @param {Number} piece 
     * @param {Number} newPosition 
     */


    static setPiecePostion(player, piece, newPosition){

        if(!playerPiecesElements[player] || !playerPiecesElements[player][piece]){
            console.error(`player element of given player: ${player} and piece: ${piece} not found`)
            return;
        }

        const[x,y] = COORDINATES_MAP[newPosition];

        const pieceElement = playerPiecesElements[player][piece];
        pieceElement.style.top = y*STEP_LENGTH + '%';
        pieceElement.style.left = x*STEP_LENGTH + '%';
    }

    static setTurn(index){
        if(index<0 || index >= PLAYERS.length){
            console.error('index out of bound!');
            return;
        }

        const player = PLAYERS[index];
        
        // Display player ID
        document.querySelector('.active-player span').innerText = player;
        const activePlayerBase = document.querySelector('.player-base.highlight');
        if(activePlayerBase){
            activePlayerBase.classList.remove('highlight');
        }
        //highlight
        document.querySelector(`[player-id="${player}"].player-base`).classList.add('highlight');
    }

    static enableDice(){
        diceButtonElement.removeAttribute('disabled');
    }

    static disableDice(){
        diceButtonElement.setAttribute('disabled','')
    }

    /**
     * 
     * @param {string} player 
     * @param {Number[]} pieces 
     */
    static highlightpieces(player,pieces){
        pieces.forEach(piece=> {
            const pieceElement = playerPiecesElements[player][piece];
            pieceElement.classList.add('highlight');
        })
    }

    static unhighlightpieces(){
        document.querySelectorAll('.player-piece.highlight').forEach(ele=>{
            ele.classList.remove('highlight');
        })
    }

    static setDiceValue(value){
        document.querySelector('.dice-value').innerText = value;
    }

}

// UI.setPiecePostion('p1',0,0);
// UI.setTurn(0);
// UI.setTurn(1);

// UI.disableDice();
// UI.enableDice();

// UI.highlightpieces('p1',[0]);
// UI.unhighlightpieces();