// références : 
// - pour l'animation du dropdown, l'exemple 7 de ce site :
// https://alvarotrigo.com/blog/drop-down-menu-javascript/


// déclaration des variables :

let textStarted = document.querySelector(".textStarted");
let textStarted2 = document.querySelector(".textStarted2");

let divDrop = document.querySelector(".divDrop");
let dropListe = document.querySelector(".dropListe");


// addEventListeners : 

// pour le bouton "get started" de la navbar
textStarted.addEventListener("mouseover", () => {
    textStarted.classList.toggle("borderWhite");
})
textStarted.addEventListener("mouseout", () => {
    textStarted.classList.toggle("borderWhite");
})

// pour le bouton "get started" du hero
textStarted2.addEventListener("mouseover", () => {
    textStarted2.classList.toggle("transformStarted");
})
textStarted2.addEventListener("mouseout", () => {
    textStarted2.classList.toggle("transformStarted");
})

divDrop.addEventListener("mouseover", () => {
    dropListe.classList.toggle("showDropListe");
})

divDrop.addEventListener("mouseout", () => {
    dropListe.classList.toggle("showDropListe");
})