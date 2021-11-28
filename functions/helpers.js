import { refs } from '../refs/refs.js';
import { checkResultProcessing, defineWinningCombination } from './game-process.js';
import { winningCombinations, objWithData, objWithTextData } from '../constants.js';
import { addClassToElement,removeClassFromElement } from './change-styles.js';
import { setTextContextToElement, restartTheGameTextOptions } from './text-functions.js';

const {
    cross, 
    naught,
    crossFigure,
    naughtFigure,
    hiddenClass,
    start,
    stop,
    restart,
    fadeInAnimation
} = objWithTextData;

const { infoTurn, buttons, boardContainer } = refs;

//defining whose turn it's now
export const defineNextTurn = value => {
    value =
        value % objWithData.numberTwo === objWithData.numberZero
            ? cross
            : naught;
    setTextContextToElement(infoTurn.firstElementChild, value);
};


//check is there's a winner after each click
export const checkResults = () => {
    let result = false;
    winningCombinations.forEach((el,index,arr)=>{
        if(defineWinningCombination(arr,index,crossFigure)) {
            result = checkResultProcessing(cross);
        }

        if(defineWinningCombination(arr,index,naughtFigure)) {
            result = checkResultProcessing(naught);
        }
    });

    return result;
};


//functions for buttons

//to start or stop the game (show/hide a board)
export const startFinishBtnFunction = ({ target }) => {
    const restartBtn = buttons[1];
    addClassToElement(boardContainer, hiddenClass);
    target.textContent =
        target.textContent === stop ? start : stop;

    if (target.textContent === stop) {
        removeClassFromElement(boardContainer,hiddenClass);
    }

    restartBtn.disabled = false;
};

//to restart the game
export const restartBtnFunction = ({ target }) => {
    if (target.dataset.name === objWithTextData.restart) {
        Array.from(refs.fields).forEach(el =>  {
            el.innerHTML = '';
            removeClassFromElement(el, fadeInAnimation);
        });
    }

    objWithData.winner = '';
    objWithData.move = objWithData.numberZero;
    restartTheGameTextOptions();
};

//to enable a 'Start' button after the page loading
export const startBtnIsActived = () => {
    buttons[0].disabled = false;
};