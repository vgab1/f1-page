const openModalButton = document.querySelector('#teams-container');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const images = document.querySelectorAll("#teams-container img");

const modalImage = document.querySelector("#team-img");

const alfaromeoiImg = document.querySelector("#alfaromeo-img");
const alphaTauriImg = document.querySelector("#alphatauri-img");
const alpineImg = document.querySelector("#alpine-img");
const astonmartinImg = document.querySelector("#astonmartin-img");
const ferrariImg = document.querySelector("#ferrari-img");
const haasImg = document.querySelector("#haas-img");
const mclarenImg = document.querySelector("#mclaren-img");
const mercedesImg = document.querySelector("#mercedes-img");
const redbullImg = document.querySelector("#redbull-img");
const williamsImg = document.querySelector("#williams-img");

const driverNumber1 = document.querySelector("#dnumb1");
const driverNumber2 = document.querySelector("#dnumb2");
const driverName1 = document.querySelector("#dname1");
const driverName2 = document.querySelector("#dname2");

// Modal
const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle('hide'));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
});

//IMG Team
images.forEach(image => {
    image.addEventListener("click", () => {
        const teamName = image.alt.toLowerCase().replace(" ", "-");
        const teamImage = `img/scuderias/${teamName}-f1-racing.png`;
        modalImage.src = teamImage;
        modalImage.style.width = "50%";
    });
});

// IMG Driver
alfaromeoiImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/alfaromeo-d1.png";
    driver2Img.src = "img/drivers/alfaromeo-d2.png";
    // Number
    driverNumber1.textContent = "77"
    driverNumber2.textContent = "24"
    // Name
    driverName1.textContent = "Valtteri Bottas"
    driverName2.textContent = "Guanyu Zhou"
});

alphaTauriImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/alphatauri-d1.png";
    driver2Img.src = "img/drivers/alphatauri-d2.png";
    // Number
    driverNumber1.textContent = "22"
    driverNumber2.textContent = "21"
    // Name
    driverName1.textContent = "Yuki Tsunoda" 
    driverName2.textContent = "Nyck de Vries"
});

alpineImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/alpine-d1.png";
    driver2Img.src = "img/drivers/alpine-d2.png";
    // Number
    driverNumber1.textContent = "10"
    driverNumber2.textContent = "31"
    // Name
    driverName1.textContent = "Pierre Gasly" 
    driverName2.textContent = "Esteban Ocon"
});

astonmartinImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/astonmartin-d1.png";
    driver2Img.src = "img/drivers/astonmartin-d2.png";
    // Number
    driverNumber1.textContent = "14"
    driverNumber2.textContent = "18"
    // Name
    driverName1.textContent = "Fernando Alonso" 
    driverName2.textContent = "Lance Stroll"
});

ferrariImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/ferrari-d1.png";
    driver2Img.src = "img/drivers/ferrari-d2.png";
    // Number
    driverNumber1.textContent = "16"
    driverNumber2.textContent = "55"
    // Name
    driverName1.textContent = "Charles Leclerc" 
    driverName2.textContent = "Carlos Sainz"
});

haasImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/haas-d1.png";
    driver2Img.src = "img/drivers/haas-d2.png";
    // Number
    driverNumber1.textContent = "20"
    driverNumber2.textContent = "27"
    // Name
    driverName1.textContent = "Kevin Magnussen" 
    driverName2.textContent = "Nico Hulkenberg"
});

mclarenImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/mclaren-d1.png";
    driver2Img.src = "img/drivers/mclaren-d2.png";
    // Number
    driverNumber1.textContent = "4"
    driverNumber2.textContent = "81"
    // Name
    driverName1.textContent = "Lando Norris" 
    driverName2.textContent = "Oscar Piastri"
});

mercedesImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/mercedes-d1.png";
    driver2Img.src = "img/drivers/mercedes-d2.png";
    // Number
    driverNumber1.textContent = "44"
    driverNumber2.textContent = "63"
    // Name
    driverName1.textContent = "Lewis Hamilton" 
    driverName2.textContent = "George Russell"
});

redbullImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/redbull-d1.png";
    driver2Img.src = "img/drivers/redbull-d2.png";
    // Number
    driverNumber1.textContent = "1"
    driverNumber2.textContent = "11"
    // Name
    driverName1.textContent = "Max Verstappen" 
    driverName2.textContent = "Sergio Perez"
});

williamsImg.addEventListener("click", function() {
    const driver1Img = document.querySelector("#driver1");
    const driver2Img = document.querySelector("#driver2");
    driver1Img.src = "img/drivers/williams-d1.png";
    driver2Img.src = "img/drivers/williams-d2.png";
    // Number
    driverNumber1.textContent = "23"
    driverNumber2.textContent = "2"
    // Name
    driverName1.textContent = "Alexander Albon" 
    driverName2.textContent = "Logan Sargeant"
});

// Menu Mobile
[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active")
    })
})