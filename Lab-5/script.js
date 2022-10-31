// Task 1
const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const idCard = document.getElementById('idCard');
const birthday = document.getElementById('birthday');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidUsername = /^[A-ZА-ЯІЇЄ][a-zа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/;
const isValidPhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const isValidIdCard = /^[A-Z]{2} №\d{6}$/;
const isValidBirthday = /^\d{2}.\d{2}.\d{4}$/;    
const isValidEmail = /^\w+@\w+\.com$/;

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const phoneValue = phone.value.trim();  
  const idCardValue = idCard.value.trim();  
  const birthdayValue = birthday.value.trim();
  const emailValue = email.value.trim();  

  let success = true;

  if (usernameValue === '') {
    setError(username, 'Username is required');
    success = false;
  } else if (!isValidUsername.test(usernameValue)) {
    setError(username, 'Provide a valid username')
    success = false;
  } else {
    setSuccess(username);
    
  }
  if (phoneValue === '') {
    setError(phone, 'Phone is required');
    success = false;
  } else if (!isValidPhone.test(phoneValue)) {
    setError(phone, 'Provide a valid telephone')
    success = false;
  } else {
    setSuccess(phone);
  }

  if (idCardValue === '') {
    setError(idCard, 'ID-card is required');
    success = false;
  } else if (!isValidIdCard.test(idCardValue)) {
    setError(idCard, 'Provide a valid id-card')
    success = false;
  } else {
    setSuccess(idCard);
  }

  if (birthdayValue === '') {
    setError(birthday, 'Birthday is required');
    success = false;
  } else if (!isValidBirthday.test(birthdayValue)) {
    setError(birthday, 'Provide a valid birthday data');
    success = false;
  } else {
    setSuccess(birthday);
  }
  
  if (emailValue === '') {
    setError(email, 'Email is required');
    success = false;
  } else if (!isValidEmail.test(emailValue)) {
    setError(email, 'Provide a valid email address');
    success = false;
  } else {
    setSuccess(email);
  }

  if (success) {
    const output = document.getElementById("information")
    output.innerHTML =
      (`<h2>Введені дані</h2>` +
        `<b>ПІБ:</b> <em>${username.value}</em><br>` + 
        `<b>Телефон:</b> <em>${phone.value}</em><br>` +
        `<b>ID-card:</b> <em>${idCard.value}</em><br>` +
        `<b>Дата народження:</b> <em>${birthday.value}</em><br>` +
        `<b>Email:</b> <em>${email.value}</em><br>`);  
  } 

  success = true;
};

// Task 2
let elem = document.querySelector("table");
createTable(elem, 6, 6);

function createTable(parent, columns, rows) {
  let table = document.createElement("table")
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const index = String(j + 1 + (i * rows));
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = index;
      td.id = index;
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}

const variant = 4
function setColor() {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  return "rgb(" + x + ", " + y + ", " + z + ")";
}

function setColorOnHover(id) {
  const elem = document.getElementById(id);
  elem.addEventListener('mouseover', () => {
    elem.style.backgroundColor = setColor();
  })
}
setColorOnHover(variant)

const variantCell = document.getElementById(variant);
variantCell.addEventListener("click", () => {
  variantCell.style.backgroundColor = document.getElementById("colorCodes").value;});

variantCell.addEventListener("dblclick", () => {
  for(let index = 6; index <= 31; index += 5){
    const cell = document.getElementById(index);
    cell.style.backgroundColor = document.getElementById("colorCodes").value;
  }
})
