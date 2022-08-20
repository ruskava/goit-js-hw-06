const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    console.dir(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email.value === "" || password.value === "") {
         return albert('Заполни форму!')
    }
    console.log({ email: email.value, password: password.value });
}

