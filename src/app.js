/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
};

document.getElementById("button").addEventListener("click", generateCard);

window.setInterval(generateCard, 5000);

function generateCard() {

  const RandomCard = () => {
    let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J','Q','K'];
    let suit = ['♠', '♣', '♥', '♦'];
    
    const RandomFromArray = arr => {
      let item = arr[Math.floor(Math.random() * arr.length)];
      return item;
    };

    
    return [RandomFromArray(value), RandomFromArray(suit)];
  };

  let card = RandomCard();
  let color = "";
  if (card[1] == "♥" || card[1] == "♦") {
    color = "red";
  }
  else {
    color = "black";
  }

  let value = document.getElementById("value");
  let suit1 = document.getElementById("suit1");
  let suit2 = document.getElementById("suit2");

  value.innerHTML = card[0];
  value.style.color = color;

  suit1.innerHTML = card[1];
  suit1.style.color = color;

  suit2.innerHTML = card[1];
  suit2.style.color = color;

  let height = document.getElementById("height").value;
  if (height < 300) {
    height = 300;
  }
  if (height > 900) {
    height = 900;
  }
  height = height.toString() + "px";
  let width = document.getElementById("width").value;
  if (width < 200) {
    width = 200;
  }
  if (width > 1200) {
    width = 1200;
  }
  width = width.toString() + "px";
  console.log(height);

  document.getElementById("card").style.width = width;
  document.getElementById("card").style.height = height;
};
