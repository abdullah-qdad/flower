"use strict";

const flowers = [
    { name: "Rose", description: "A beautiful red flower.", price: 2.99, number: 20 },
    { name: "Lily", description: "A tall, elegant white flower.", price: 3.99, number: 15 },
    { name: "Sunflower", description: "A large, yellow flower that follows the sun.", price: 1.99, number: 25 },
    { name: "Tulip", description: "A brightly colored spring flower.", price: 2.49, number: 30 },
    { name: "Daffodil", description: "A cheerful yellow spring flower.", price: 1.49, number: 35 },
    { name: "Orchid", description: "A exotic, colorful flower.", price: 4.99, number: 10 },
    { name: "Iris", description: "A tall, colorful spring flower.", price: 3.49, number: 20 },
    { name: "Daisy", description: "A cheerful white and yellow flower.", price: 0.99, number: 40 },
    { name: "Peony", description: "A large, lush flower in shades of pink, red, and white.", price: 5.99, number: 5 },
    { name: "Lilac", description: "A fragrant, purple spring flower.", price: 2.99, number: 15 }
];

display(flowers);

function display(array) {
    const tbody = document.getElementById('flowerData');

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
            if (flower.number > 0) {
                flower.number--;
                numberCell.innerHTML = flower.number;
            } else {
                alert("Out od stock");
            }

        });
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

    }
}




function userName(name) {
    document.getElementById("username").textContent = name;
}