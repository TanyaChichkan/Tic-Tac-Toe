import { refs } from '../refs/refs.js';
import { setTextContextToElement } from './text-functions.js';
import { objWithData, objWithTextData } from '../constants.js';
import { startGame, finishGame } from './listeners.js';
import { checkResults, startFinishBtnFunction, restartBtnFunction } from './helpers.js';
import { addClassToElement,removeClassFromElement } from './change-styles.js';
import { afterClickProcessing,finishStepsProcessing } from './game-process.js';

const {
    start,
    restart,
    naughtClass,
    crossClass,
    falseString,
    fieldClass,
    crossFigure,
    naughtFigure,
    flushAnimation,
    draw
} = objWithTextData;

const { fields, infoWinner } = refs;


//function to perform on buttons click
export function clickButtonsHandler({ target }) {
    if (target.dataset.name === start) {
        startFinishBtnFunction({ target });
    }

    if (target.dataset.name === restart) {
        restartBtnFunction({ target });
        fields.forEach(el => {
            removeClassFromElement(el, naughtClass) ||
                removeClassFromElement(el, crossClass);
            el.dataset.checked = falseString;
        });
    }

    startGame();
};


export function clickBoardHandler(e) {
    const { target } = e;
    let { checked } = target.dataset;

    if (
        target.classList.contains(fieldClass) &&
        checked === falseString
    ) {
        if (objWithData.move % objWithData.numberTwo === objWithData.numberZero) {
            target.innerHTML = crossFigure;
            afterClickProcessing(target, crossClass);
        } else {
            target.innerHTML = naughtFigure;
            afterClickProcessing(target, naughtClass);
        }

        e.target.dataset.checked = true;

        if (objWithData.move >= objWithData.enrtyScorePoint) {
            let final = checkResults();
            if (final) {
                finishGame();
                finishStepsProcessing();
                setTextContextToElement(infoWinner, objWithData.winner);
                addClassToElement(infoWinner, flushAnimation);
            }

            if(objWithData.move === objWithData.numberNine){
                finishStepsProcessing();
                setTextContextToElement(infoWinner,draw);
            }
        }
    }
};