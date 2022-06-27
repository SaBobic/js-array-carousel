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

// 4. Stampo in pagina la lista HTML creata
carouselGallery.innerHTML = galleryList;

//* MILESTONE 3: Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente

/*
1. Dichiaro le variabili globali: frecce prev e next, immagine visibile, classe active da aggiungere all'immagine visibile
2. Rendo visibile la prima immagine dell'array inserendo la classe CSS "active"
3. Aggiungo l'addEventListener al click delle frecce per cambiare l'index alla classe active
4. All'interno dell'addEventListener quando clicco il bottone faccio rimuovere la classe active all'immagine che già la possiede
5. All'interno dell'addEventListener quando clicco modifico (+1) l'activeClassIndex
6. All'interno dell'addEventListener quando clicco associo nuovamente la classe active secondo l'activeClassIndex
*/

// 1. Dichiaro le variabili globali: frecce prev e next, immagine visibile, indice per associare l'immagine visibile
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const galleryListImages = document.querySelectorAll('#main-gallery img');
let activeClassIndex = 0;

// 2. Rendo visibile la prima immagine dell'array inserendo la classe CSS "active"
galleryListImages[activeClassIndex].classList.add('active');

//* Next arrow

// 3. Aggiungo l'addEventListener al click delle frecce per cambiare l'index alla classe active
nextArrow.addEventListener('click', function(){

    // 4. All'interno dell'addEventListener quando clicco il bottone faccio rimuovere la classe active all'immagine che già la possiede
    galleryListImages[activeClassIndex].classList.remove('active');

    // 5. All'interno dell'addEventListener quando clicco modifico (+1) l'activeClassIndex
    activeClassIndex++;

    // 6. All'interno dell'addEventListener quando clicco associo nuovamente la classe active secondo l'activeClassIndex
    galleryListImages[activeClassIndex].classList.add('active');
});

//* Prev arrow

prevArrow.addEventListener('click', function(){
    galleryListImages[activeClassIndex].classList.remove('active');
    activeClassIndex--;
    galleryListImages[activeClassIndex].classList.add('active');
});