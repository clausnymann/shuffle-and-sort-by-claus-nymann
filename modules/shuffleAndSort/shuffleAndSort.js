import squareColors from './getSquareColors.js';
import { Button } from '../atoms/Button/Button.js' 

export function shuffleAndSort(elementId) {  

    let targetDiv = document.getElementById(elementId ? elementId : 'shuffleAndSort');  
  
    if(!targetDiv){ 
        return false;
    }
 
    targetDiv.innerHTML +=  
        `<div class="sas-wrp">
        <div class="sas-headline">
            Shuffle and Sort
        </div>
        <div class="sas-main">
            <div class="sas-menu">
                ${Button({text: 'Shuffle', background: '#72c3dc', id: 'btnShuffe'})} 
                ${Button({text: 'Sort', background: '#72c3dc', id: 'btnSort'})} 
            </div>
            <div class="sas-squares">
            ${getSquares(squareColors)}
            </div>
        </div>
        <div class="sas-credits">
            Shuffle and Sort by Claus Nymann
        </div> 
    </div>` 

    const squares = targetDiv.querySelector(".sas-squares");   
    const btnShuffe = targetDiv.querySelector('#btnShuffe');   
    const btnSort = targetDiv.querySelector('#btnSort'); 
      
    btnShuffe.addEventListener('click', () => { 
        squares.innerHTML = getSquares(squareColors.sort(function() { return 0.5 - Math.random() }));
    })

    btnSort.addEventListener('click', () => { 
        squares.innerHTML = getSquares(squareColors.sort((a, b) => a.nr - b.nr));
    }) 

    function getSquares(squareColors) {  
        return `${Object.entries(squareColors).map(([key, square]) => 
            `<div class="square">
                <div class="square-color" style="background-color:${square.color}"></div> 
                <div class="square-nr">${square.nr}</div>
            </div>` 
            ).join('')}`; 
    }
}




