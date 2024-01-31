// références : 
// - pour l'animation du dropdown, l'exemple 7 de ce site :
// https://alvarotrigo.com/blog/drop-down-menu-javascript/


// déclaration des variables :


let textStarted = document.querySelector(".textStarted");
let textStarted2 = document.querySelector(".textStarted2");

let divDrop = document.querySelector(".divDrop");
let dropListe = document.querySelector(".dropListe");

let readBtn = document.querySelector(".readBtn");

let boxes = document.querySelectorAll(".box");
let boxesArray = Array.from(boxes);
console.log(boxesArray);
let icones = document.querySelectorAll(".fa-solid");
console.log(boxesArray);

let circles = document.querySelectorAll(".circle");
let circlesArray = Array.from(circles);

let carousel = document.querySelector(".carousel");

// déclaration des fonctions 

let addActive = (e) => {
    e.classList.add("activeCircle");
}

let removeActive = (e) => {
    e.classList.remove("activeCircle");
}

let transform = (e) => {
    if (e == circlesArray[0]) {
        carousel.style = "transform: translateX(975px);"
    } else if (e == circlesArray[1]) {
        carousel.style = "transform: translateX(475px);"
    } else if (e == circlesArray[2]) {
        carousel.style = "transform: translateX(-25px);"
    } else if (e == circlesArray[3]) {
        carousel.style = "transform: translateX(-525px);"
    } else if (e == circlesArray[4]) {
        carousel.style = "transform: translateX(-1025px);"
    } else if (e == circlesArray[5]) {
        carousel.style = "transform: translateX(-1525px);"
    }
}

let movement = 975;
setInterval(() => { 
    carousel.style.transform = `translateX(${movement}px)`;
    movement -= 500;
    if (movement == 975) {
        circlesArray[0].classList.add("activeCircle");
        circlesArray[1].classList.remove("activeCircle");
        circlesArray[2].classList.remove("activeCircle");
        circlesArray[3].classList.remove("activeCircle");
        circlesArray[4].classList.remove("activeCircle");
    } else if (movement == 475) {
        circlesArray[1].classList.add("activeCircle");
        circlesArray[0].classList.remove("activeCircle");
        circlesArray[2].classList.remove("activeCircle");
        circlesArray[3].classList.remove("activeCircle");
        circlesArray[4].classList.remove("activeCircle");
    } else if (movement == -25) {
        circlesArray[2].classList.add("activeCircle");
        circlesArray[1].classList.remove("activeCircle");
        circlesArray[0].classList.remove("activeCircle");
        circlesArray[3].classList.remove("activeCircle");
        circlesArray[4].classList.remove("activeCircle");
    } else if (movement == -525) {
        circlesArray[3].classList.add("activeCircle");
        circlesArray[1].classList.remove("activeCircle");
        circlesArray[2].classList.remove("activeCircle");
        circlesArray[0].classList.remove("activeCircle");
        circlesArray[4].classList.remove("activeCircle");
    } else if (movement == -1025) {
        circlesArray[4].classList.add("activeCircle");
        circlesArray[1].classList.remove("activeCircle");
        circlesArray[2].classList.remove("activeCircle");
        circlesArray[3].classList.remove("activeCircle");
        circlesArray[0].classList.remove("activeCircle");
    } else if (movement == -1525) {
        circlesArray[4].classList.add("activeCircle");
        circlesArray[1].classList.remove("activeCircle");
        circlesArray[2].classList.remove("activeCircle");
        circlesArray[3].classList.remove("activeCircle");
        circlesArray[0].classList.remove("activeCircle");
        movement = 975;
    }
}, 2000)



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


// pour le DropDown :
divDrop.addEventListener("mouseover", () => {
    dropListe.classList.toggle("showDropListe");
})

divDrop.addEventListener("mouseout", () => {
    dropListe.classList.toggle("showDropListe");
})

// pour le bouton Read ME
readBtn.addEventListener("mouseover", () => {
    readBtn.classList.toggle("readLinear");
})

readBtn.addEventListener("mouseout", () => {
    readBtn.classList.toggle("readLinear");
})

//pour le hover sur les boxes de la section 3
boxesArray[0].addEventListener("mouseover", () => {
    boxesArray[0].classList.toggle("colorBlue");
    boxesArray[0].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[0].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[0].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[1].addEventListener("mouseover", () => {
    boxesArray[1].classList.toggle("colorOrange");
    boxesArray[1].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[1].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[1].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[2].addEventListener("mouseover", () => {
    boxesArray[2].classList.toggle("colorPink");
    boxesArray[2].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[2].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[2].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[3].addEventListener("mouseover", () => {
    boxesArray[3].classList.toggle("colorYellow");
    boxesArray[3].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[3].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[3].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[4].addEventListener("mouseover", () => {
    boxesArray[4].classList.toggle("colorOrangeRed");
    boxesArray[4].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[4].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[4].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[5].addEventListener("mouseover", () => {
    boxesArray[5].classList.toggle("colorSkyBlue");
    boxesArray[5].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[5].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[5].children[1].children[1].classList.toggle("iconWhite");
})

boxesArray[0].addEventListener("mouseout", () => {
    boxesArray[0].classList.toggle("colorBlue");
    boxesArray[0].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[0].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[0].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[1].addEventListener("mouseout", () => {
    boxesArray[1].classList.toggle("colorOrange");
    boxesArray[1].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[1].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[1].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[2].addEventListener("mouseout", () => {
    boxesArray[2].classList.toggle("colorPink");
    boxesArray[2].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[2].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[2].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[3].addEventListener("mouseout", () => {
    boxesArray[3].classList.toggle("colorYellow");
    boxesArray[3].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[3].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[3].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[4].addEventListener("mouseout", () => {
    boxesArray[4].classList.toggle("colorOrangeRed");
    boxesArray[4].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[4].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[4].children[1].children[1].classList.toggle("iconWhite");
})
boxesArray[5].addEventListener("mouseout", () => {
    boxesArray[5].classList.toggle("colorSkyBlue");
    boxesArray[5].children[0].children[0].classList.toggle("iconWhite");
    boxesArray[5].children[1].children[0].classList.toggle("iconWhite");
    boxesArray[5].children[1].children[1].classList.toggle("iconWhite");
})


// pour les cercles du carousel de la section 5
circlesArray.forEach(element => {
    element.addEventListener("click", () => {
        circlesArray.forEach(element => {
            removeActive(element);
        });
        transform(element);
        addActive(element);
    })
});