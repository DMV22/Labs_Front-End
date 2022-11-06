// Task 1
const list = document.getElementById('listUsers')

function addUsers() {
  fetch("https://randomuser.me/api/?results=2")
    .then((results) => {
      return results.json();
    })
    .then((response) => {
      const user = response.results[0];
      const person = new Person(
        user.picture,
        user.name,
        user.location.city,
        user.location.postcode,
        user.phone);
      person.listUsers();
    });
}

function removeUsers() {
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
}

class Person {
  constructor(picture, name, city, phone, postcode) {
    this.picture = picture;
    this.name = name;
    this.city = city;
    this.postcode = postcode;
    this.phone = phone;
  }
    
  listUsers() {
    const user = document.createElement('div');
    user.id = 'user';

    const picture = document.createElement('img');
    picture.src = this.picture.large;
    user.appendChild(picture);

    const name = document.createElement('span');
    name.innerHTML = `Name: <em>${this.name.title} ${this.name.first} ${this.name.last}</em>`
    user.appendChild(name);
    
    const city = document.createElement('span');
    city.innerHTML = `City: <em>${this.city}</em>`;
    user.appendChild(city);
    
    const postcode = document.createElement('span');
    postcode.innerHTML = `Postcode: <em>${this.postcode}</em>`;
    user.appendChild(postcode);
    
    const phone = document.createElement('span');
    phone.innerHTML = `Phone: <em>${this.phone}</em>`;
    user.appendChild(phone);
    
    list.appendChild(user);
    console.log(this.picture, `${this.name.title} ${this.name.first} ${this.name.last}`, this.city, this.postcode, this.phone);
  }
}


