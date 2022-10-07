const checkForm = document.querySelector(".login-form");
console.log(checkForm);

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All credentials fill you must...");
  }
  else {
    const ShowForm = {
      email: email.value,
      password: password.value,
    }
    console.log(ShowForm);
    e.currentTarget.reset();
  }
}

 

// ***
  // const { elements } = event.currentTarget;
  // const { email, password } = elements;
//  ***
  // const { email, password } = event.target.elements;

// вариант 2

// const checkForm = document.querySelector(".login-form");
// console.log(checkForm);

// checkForm.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   // const email = event.currentTarget.elements.email.value;
//   // const pass = event.currentTarget.elements.password.value;
//   const formData = new FormData(event.currentTarget);
//   const data = {};
//   formData.forEach((name, value) => {
//     if (!name || !value) {
//       alert("All credentials fill you must...");
//     } else {
//       data[value] = name;
//     }
//   });
//   if (data.email && data.password) {
//     console.log(data);
//     event.currentTarget.reset();
//   }
// }

  
 
  // const isValidForm = [...event.target.elements].filter((el) => el.tagName === "INPUT").some((el) => el.value === "");

  // if (isValidForm) {
  //   alert("All credentials fill you must...")
  // 
