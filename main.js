import colors from './modules/getColors.js';
import {shuffleAndSort} from './modules/shuffleAndSort.js';
let sas = shuffleAndSort(colors); 
let div = document.getElementById('shuffleAndSort');
if(div){
    div.innerHTML += sas;
}
