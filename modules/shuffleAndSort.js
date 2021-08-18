import { button } from './atoms/button.js'
import { square } from './atoms/square.js'

export function shuffleAndSort(colors) { 
    
    return `<div class="sas-wrp">
        <div class="sas-headline">
            Shuffle and Sort
        </div>
        <div class="sas-menu">
             ${button({background: '#72c3dc', text: 'Shuffle', id: 'btnShuffle'})} 
             ${button({background: '#72c3dc', text: 'Sort', id: 'btnSort'})} 
        </div>
        <div class="sas-main">
            ${Object.entries(colors).map(([nr, color]) => square(color, nr)).join('')} 
        </div>
        <div class="sas-credits">
            Shuffle and Sort by Claus Nymann
        </div> 
    </div>`; 
}
