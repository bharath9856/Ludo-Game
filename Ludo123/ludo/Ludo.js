import { STATE } from "./constants";
import { UI } from "./UI";

export class Ludo{
    
    currentPositions = {
        p1: [],
        p2: []
    }

    _diceValue;
    get diceValue(){
        return this._diceValue;
    }
    set diceValue(value){
        this._diceValue = value;
        UI.setDiceValue(value); 
    }

    _turn;
    get turn(){
        return this._turn;
    }
    set turn(value){
        this._turn = value;
        UI.setTurn(value);
    }

    _state;
    get state(){
        return this._state;
    } 
    set state(value){
        this._state = value;
        
        if(value === STATE.DICE_NOT_ROLLED){
            UI.enableDice();
        }else{
            UI.disableDice();
        }
    }



    constructor(){
        console.log('Hello world! Lets play Ludo!');
        this.diceValue = 4;
        this.turn = 0;
        this.state = STATE.DICE_NOT_ROLLED;
    }

    listenDiceClick(){
        UI.listenDiceClick(this.onDiceClick)
    }
    onDiceClick(){
        console.log('dice clicked!');
    }
    listenResetClick(){
        UI.listenResetClick(this.resetGame.bind(this))
    }
    resetGame(){
        console.log('reset game')
    }

    listenPieceClcik(){
        UI.listenPieceClick(this.onPieceClick.bind(this));
    }

    onPieceClick(event){
        console.log('piece clicked')

        if(!EventTarget.classList.contains('palyer-piece')){
            return;
        }
        console.log('piece clicked')
        const player = traget.getAttribute('player=id');
        this.handlePieceClick();
    }

    /**
     * 
     * @param {string} player 
     * @param {Number[]} piece 
     */
    handlePieceClick(player,piece)
}