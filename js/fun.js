"use strict";

var isLoggedIn = false;

const flowers = [
  { name: "Rose", description: "A beautiful red flower.", price: 2.99, number: 20, occasion: "VD" },
  { name: "Lily", description: "A tall, elegant white flower.", price: 3.99, number: 15, occasion: "VD" },
  { name: "Sunflower", description: "A large, yellow flower that follows the sun.", price: 1.99, number: 25, occasion: "BD" },
  { name: "Tulip", description: "A brightly colored spring flower.", price: 2.49, number: 30, occasion: "BD" },
  { name: "Daffodil", description: "A cheerful yellow spring flower.", price: 1.49, number: 35, occasion: "NY" },
  { name: "Orchid", description: "A exotic, colorful flower.", price: 4.99, number: 10, occasion: "NY" },
  { name: "Iris", description: "A tall, colorful spring flower.", price: 3.49, number: 20, occasion: "NB" },
  { name: "Daisy", description: "A cheerful white and yellow flower.", price: 0.99, number: 40, occasion: "NB" },
  { name: "Peony", description: "A large, lush flower in shades of pink, red, and white.", price: 5.99, number: 5, occasion: "S" },
  { name: "Lilac", description: "A fragrant, purple spring flower.", price: 2.99, number: 15, occasion: "S" }
];

display(flowers);

function display(array) {
  const tbody = document.getElementById('flowerData');
  tbody.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const flower = array[i];

    const row = document.createElement("tr");
    tbody.appendChild(row);

    const nameCell = document.createElement("td");
    nameCell.innerHTML = flower.name;
    row.appendChild(nameCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.innerHTML = flower.description;
    row.appendChild(descriptionCell);

    const priceCell = document.createElement("td");
    priceCell.innerHTML = "$" + flower.price;
    row.appendChild(priceCell);

    const numberCell = document.createElement("td");
    numberCell.innerHTML = flower.number;
    row.appendChild(numberCell);

    const buttonCell = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "Buy";
    button.addEventListener("click", function () {
      if (!isLoggedIn) {
        alert("Please Login First");
      } else {
        if (flower.number > 0) {
          flower.number--;
          numberCell.innerHTML = flower.number;
        } else {
          alert("Out of stock");
        }
      }


    });
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);

  }
}

const form = document.getElementById("loginForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.elements.email.value;
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    userName(email);
    isLoggedIn = true;
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function userName(name) {
  document.getElementById("username").textContent = name;
}


const links = document.querySelectorAll('.occasion');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    const value = link.getAttribute('value');
    const newArray = [];
    let length = flowers.length;
    for (let i = 0; i < length; i++) {
      if (flowers[i].occasion == value) {
        newArray.push(flowers[i]);
      }
    }
    display(newArray);
  });
});