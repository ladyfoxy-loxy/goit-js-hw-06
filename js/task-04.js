
const decrementEl = document.querySelector ('[data-action="decrement"]');
const incrementEl = document.querySelector ('[data-action="increment"]');
const countValue = document.querySelector ('#value');


let counterValue = 0;

const handleDecrement = () => {
    counterValue -=1;
    value.textContent = counterValue;
};

const handleIncrement = () => {
    counterValue +=1;
    value.textContent = counterValue;
}

decrementEl.addEventListener ('click', handleDecrement);
incrementEl.addEventListener ('click', handleIncrement);