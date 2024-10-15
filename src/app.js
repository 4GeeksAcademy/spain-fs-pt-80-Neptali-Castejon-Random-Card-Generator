/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  updateAll();
};

//Vars
const cardValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const palos = ["♦", "♥", "♠", "♣"];
const iconsClasses = ["black", "red"];
const headerIcon = document.querySelector("#card__icon--header");
const cardNumberHeader = document.querySelector("#card__number--header");
const cardNumber = document.querySelector("#card__content");
const cardNumberFooter = document.querySelector("#card__number--footer");
const footerIcon = document.querySelector("#card__icon--footer");

// Función para obtener un valor aleatorio de un array
const getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// Función para obtener un icono aleatorio de un array
const updateIcon = () => {
  const icon = getRandomElement(palos);
  if (headerIcon && footerIcon) {
    headerIcon.innerHTML = icon;
    footerIcon.innerHTML = icon;
  }
};

// Función para obtener una clase aleatorio de un array
const updateClass = () => {
  if (
    headerIcon &&
    footerIcon &&
    cardNumber &&
    cardNumberHeader &&
    cardNumberFooter
  ) {
    const icon = headerIcon.innerHTML; // Obtiene el ícono actual
    [
      headerIcon,
      footerIcon,
      cardNumber,
      cardNumberHeader,
      cardNumberFooter
    ].forEach(element => {
      element.classList.remove(...iconsClasses);
    });

    const colorClass = icon === "♥" || icon === "♦" ? "red" : "black";
    [
      headerIcon,
      footerIcon,
      cardNumber,
      cardNumberHeader,
      cardNumberFooter
    ].forEach(element => {
      element.classList.add(colorClass);
    });
  }
};

// Función Genera un número de naipe aleatorio
const updateCard = () => {
  const num = getRandomElement(cardValue);
  if (cardNumber && cardNumberHeader && cardNumberFooter) {
    cardNumber.innerHTML = num;
    cardNumberHeader.innerHTML = num;
    cardNumberFooter.innerHTML = num;
  }
};

//función para actualizar todos los elementos
const updateAll = () => {
  updateCard();
  updateIcon();
  updateClass();
};

setInterval(updateAll, 2500); // Actualiza cada 2.5 segundos
