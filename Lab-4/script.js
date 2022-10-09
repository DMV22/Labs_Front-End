// Task - 1
function paintText1() {
  const firstHobby = document.getElementById("firstHobby");
  firstHobby.style.color = setColor();
  firstHobby.style.background = setColor();
}

function setColor() {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  return "rgb(" + x + ", " + y + ", " + z + ")";
}

function paintText2() {
  const secondHobby = document.querySelector(".secondHobby");
  secondHobby.style.color = setColor();
  secondHobby.style.background = setColor();
}

//--------------------------------------------//

// Task - 2
let size = 600;

const addImage = document.getElementById('add');
const increaseImage = document.getElementById('increase');
const reduceImage = document.getElementById('reduce');
const removeImage = document.getElementById('remove');


function add() {
  document.getElementById("picture").src = "https://st.depositphotos.com/1005145/2341/i/600/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg"
  document.getElementById("picture").style.display = ""
  
  addImage.disabled = true;
  increaseImage.disabled = false;
  reduceImage.disabled = false;
  removeImage.disabled = false;
}

function increase() {
  if (size < 800) {
    size += 20
    document.getElementById("picture").style.width = size + "px"
    reduceImage.disabled = false;
  } else {
    increaseImage.disabled = true;
    alert("Ви досягли максимального значення зображення!")
  }
}

function reduce() {
  if (size > 400) {
    size -= 20
    document.getElementById("picture").style.width = size + "px"
    increaseImage.disabled = false;
  } else {
    reduceImage.disabled = true;
    alert("Ви досягли мінімального значення зображення!")
  }
}

function remove() {
  document.getElementById("picture").style.display = "none"
  addImage.disabled = false;
  increaseImage.disabled = true;
  reduceImage.disabled = true;
  removeImage.disabled = true;

}