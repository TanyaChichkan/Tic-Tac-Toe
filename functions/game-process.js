import { refs } from '../refs/refs.js';
import { defineNextTurn } from "./helpers.js";
import { addClassToElement,toggleClassOnElement, removeClassFromElement } from "./change-styles.js";
import { objWithData, objWithTextData } from '../constants.js';
import {setTextContextToElement } from './text-functions.js'

//number of repeatable steps to complete after such actions as: click, result checking, finishing the game

const { hiddenClass, gameOver, fadeInAnimation } = objWithTextData;
const {infoStatus, infoTitle, infoWinner, infoWrappersArray ,fields } = refs;

export const afterClickProcessing = (element,className) => {
    if(!objWithData.winner) {
        objWithData.move+=1;
        setTimeout(()=>defineNextTurn(objWithData.move),500);    
    }
    addClassToElement(element,fadeInAnimation);
    addClassToElement(element,className);
};

export const checkResultProcessing = (value) => {
    objWithData.winner = value;
    toggleClassOnElement(infoWinner, hiddenClass);
    toggleClassOnElement(infoTitle[2], hiddenClass);
    setTextContextToElement(infoWinner, objWithData.winner);

    return true;
};

export const finishStepsProcessing = () => {
    setTextContextToElement(infoStatus, gameOver);
    addClassToElement(infoWrappersArray[0], hiddenClass);
    removeClassFromElement(infoWrappersArray[2], hiddenClass);
};


export const defineWinningCombination = (arr,index,value) =>{
    if(fields[arr[index][0]].innerHTML === value && 
    fields[arr[index][1]].innerHTML === value && 
    fields[arr[index][2]].innerHTML === value){
        return true
    }

    return false
}
    