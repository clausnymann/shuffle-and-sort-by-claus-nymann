export function button({background, text, clickHandler}) {
  return `<button class="button" 
    ${clickHandler && ` onclick=${clickHandler}`} 
    ${background && ` style={background: ${background}}`}  
    >
    ${text}
    </button>`;
}
