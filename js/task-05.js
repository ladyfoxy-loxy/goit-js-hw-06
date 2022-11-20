const input = document.querySelector ('#name-input');
const span = document.querySelector ('#name-output');

function handleInput (event){
 console.log (event.currentTarget.value);
 span.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}


input.addEventListener ('input', handleInput);
