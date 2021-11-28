import { refs } from '../refs/refs.js';
import { clickBoardHandler,clickButtonsHandler } from './handlers.js';

const { board, buttonsContainer} = refs;

export const startGame = () => {
    board.addEventListener('click', clickBoardHandler);
};

export const finishGame = () =>{
    board.removeEventListener('click', clickBoardHandler);
};

export const activateBtnListeners = () => {
    buttonsContainer.addEventListener('click', clickButtonsHandler);
};