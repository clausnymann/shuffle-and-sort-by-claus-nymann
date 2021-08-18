export function Button({text, background, id}) {  
    return `<button class="button"  
    ${id && ` id="${id}"`}  
    ${background && ` style="background: ${background}"`}   
    >
    ${text}
    </button>`; 

}
