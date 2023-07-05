// Variabili
const kmInputElement = document.getElementById("km-input");
const ageInputElement = document.getElementById("age-input");
const nameInputElement = document.getElementById("name-input");
const generateBtn = document.querySelector(".generate");
const resetBtn = document.querySelector(".reset");
const ticketPrice = document.getElementById("ticket-price");


// Click Event Genera
generateBtn.addEventListener('click', function () {
  const km = kmInputElement.value;
  const age = ageInputElement.value;
  const name = nameInputElement.value;
  const price = km * 0.21;

  // Imposto lo sconto
  let discount = 0;
  document.getElementById("discount").innerHTML = "Standard"

  if (age == 2) {
    discount = 0.2;
    document.getElementById("discount").innerHTML = "Sconto minorenne"
  } else if (age == 3) {
    discount = 0.4;
    document.getElementById("discount").innerHTML = "Sconto anziano"
  }
    
  // Calcolo il prezzo
  ticketPrice.innerHTML = `${price - (price * discount).toFixed(2)}` + `€`;
  document.getElementById("name").innerHTML = `${name}`

  // CP Code
  const num = Math.floor(Math.random() * 90000) + 10000;
  document.getElementById("cp-code").innerHTML = num;

  // Carrozza
  const car = Math.floor(Math.random() * 99) + 1;
  document.getElementById("car-number").innerHTML = car;
});

//Click Event Annulla
resetBtn.addEventListener('click', function () {
  document.getElementById("name").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("car-number").value = "";
  document.getElementById("cp-code").value = "";
  document.getElementById("ticket-price").value = "";
});