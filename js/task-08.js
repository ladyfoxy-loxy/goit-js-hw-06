const form = document.querySelector ('.login-form');

form.addEventListener ('submit', handleFormSubmit);

function handleFormSubmit (event) {
    event.preventDefault ();
    
    const formElements = event.currentTarget.elements;
    console.dir (formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    if (mail === "" || password === "") {
        alert("Please fill in all the fields!");
    }

    console.log (formData);
    event.currentTarget.reset();
}


