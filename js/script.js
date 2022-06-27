//* MILESTONE 2: Inserire la lista di immagini attraverso un ciclo for

/*
1. Dichiaro le variabili globali: targhet HTML in cui inserire la lista, stringa rappresentante la lista da inserire nel target
2. Creo un array contenete le immagini da inserire nei vari li
3. Creo ciclo for i=0, i<5 per concatenare i li all'interno degli ul (uso i per centralizzare nome immagini)
4. Stampo in pagina la lista HTML creata
*/

// 1. Dichiaro le variabili globali: targhet HTML in cui inserire la lista, stringa rappresentante la lista da inserire nel target
const carouselGallery = document.getElementById('main-gallery');
let galleryList = '<i class="fa-solid fa-circle-chevron-left" id="prev-arrow"></i><ul>';

// 2. Creo un array contenete le immagini da inserire nei vari li
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

// 3. Creo ciclo for i=0, i<5 per concatenare i li all'interno degli ul (uso i per centralizzare nome immagini)
for (let i = 0; i < 5; i++){
    galleryList += `<li><img src="${images[i]}" alt="Gallery Image ${i + 1}"></li>`;
}

galleryList += '</ul><i class="fa-solid fa-circle-chevron-right" id="next-arrow"></i>';

console.log(galleryList);

// 4. Stampo in pagina la lista HTML creata
carouselGallery.innerHTML = galleryList;

