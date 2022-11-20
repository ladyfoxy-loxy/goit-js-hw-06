const input = document.querySelector ('#validation-input');


function handleBlur (event){
    const inputLength = Number(input.dataset.length);
   
 if (input.value.length === inputLength) {
    input.classList.remove ("invalid");
    input.classList.add ("valid");
 }
 else {
    input.classList.remove ("valid");
 input.classList.add("invalid");
}
};

input.addEventListener ('blur', handleBlur);