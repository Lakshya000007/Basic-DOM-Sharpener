const submit = document.querySelector("button");
console.log(submit);

const ul = document.querySelector("ul");
console.log(ul);

const email = document.getElementById("exampleInputEmail1");
console.log(email);

const password = document.getElementById("exampleInputPassword1");
console.log(password);

submit.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(email.value);
  console.log(password.value);

  if (email.value.trim() && password.value.trim() != "") {
    const element = document.createElement("li");
    element.classList = "list-group-item text-center";
    element.innerHTML = `<b>Email</b> :- ${email.value} <b>Password </b> :- ${password.value}`;
    ul.appendChild(element);

    //localStorage.setItem(email.value, password.value);
    const obj = { email: `${email.value}`, password: `${password.value}` };

    console.log(obj);

    localStorage.setItem(`${email.value}Details`, JSON.stringify(obj));

    const details = JSON.parse(localStorage.getItem(`${email.value}Details`));
    console.log(details.email);
    console.log(details.password);

    console.log("Done");
  }

  setTimeout((e) => {
    email.value = "";
    password.value = "";
  }, 3000);
}
