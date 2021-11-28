import { addClassToElement,removeClassFromElement } from "./change-styles.js";
import { refs } from '../refs/refs.js';
import { objWithData, objWithTextData } from "../constants.js";

const {infoWrappersArray, infoWinner, infoTurn, infoStatus } = refs;

export const setTextContextToElement = (el,text) => el.textContent = text;
export const removeTextFromElement = el => (el.text = '');

export const restartTheGameTextOptions = () => {
    removeClassFromElement(infoWrappersArray[0], objWithTextData.hiddenClass);
    setTextContextToElement(infoWinner, objWithData.winner);
    setTextContextToElement(infoTurn.firstElementChild, objWithTextData.cross);
    setTextContextToElement(infoStatus, objWithTextData.gameInProgress);
    addClassToElement(infoWrappersArray[2], objWithTextData.hiddenClass);
};


