import { startBtnIsActived } from './functions/helpers.js';
import { activateBtnListeners } from './functions/listeners.js';


document.addEventListener("DOMContentLoaded", function(event) { 
    startBtnIsActived();
    activateBtnListeners()
});


