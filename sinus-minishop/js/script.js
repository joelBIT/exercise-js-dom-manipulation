'use strict';

const art1HoodieH3 = document.querySelector('.art-1 h3');
art1HoodieH3.innerText = 'Potato';

const headerLinks = document.querySelectorAll('header nav a');
const headerHome = headerLinks[0];
const headerContact = headerLinks[2];

headerHome.innerHTML = 'Start';
headerHome.classList.add('active');
headerContact.innerHTML = 'Mail Us';

const art2HoodieP = document.querySelector('.art-2 p');
art2HoodieP.innerText = 'Information changed';

const buyButtonArt2Hoodie = document.querySelector('.art-2 button');
buyButtonArt2Hoodie.style.setProperty('background-color', 'red');
buyButtonArt2Hoodie.innerText = 'do not buy';

const art2Hoodie = document.querySelector('.art-2');
art2Hoodie.style.setProperty('background-color', 'pink');

const footerArticleP = document.querySelectorAll('footer section article p')[0];
footerArticleP.innerText = 'Därborta \n Diket 09 \n 222 11, Bakåfram';

const allP = document.querySelectorAll('p');
allP.forEach(p => p.style.setProperty('background-color', 'green'));

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => button.innerText = 'add to cart');

const logo = document.querySelector('.logo');
logo.classList.remove('logo');
logo.addEventListener('click', () => {
    console.log('found you!');
});

document.querySelector('.art-1').addEventListener('click', () => {
    console.log('Hi, Im article Ash (Potato)');
});

document.querySelector('.art-2').addEventListener('click', () => {
    console.log('Hi, Im article Fire');
});

document.querySelector('.art-3').addEventListener('click', () => {
    console.log('Hi, Im article Water');
});

const mainElement = document.querySelector('main');

let product = document.createElement('article');
product.addEventListener('click', () => {
    console.log('Hi, Im article Forrest');
});

let productFigure = document.createElement('figure');
let productImage = document.createElement('img');
productImage.setAttribute('src', 'img/hoodie-forrest.png');
productImage.setAttribute('alt', 'hoodie');
productFigure.appendChild(productImage);
product.appendChild(productFigure);

let productH2 = document.createElement("h2");
productH2.appendChild(document.createTextNode(`Sinus Hoodie`));
product.appendChild(productH2);

let productH3 = document.createElement("h3");
productH3.appendChild(document.createTextNode(`Forrest`));
product.appendChild(productH3);

let productP = document.createElement('p');
productP.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.`));
product.appendChild(productP);

let productButton = document.createElement('button');
productButton.appendChild(document.createTextNode(`buy`));
product.appendChild(productButton);

mainElement.appendChild(product);

const headerNavElement = document.querySelector('header nav');
let smurfLink = document.createElement('a');
smurfLink.appendChild(document.createTextNode(`Smurf`));
smurfLink.setAttribute('href', '#');
headerNavElement.insertBefore(smurfLink, headerContact);

const footerMenu = document.querySelectorAll('footer section article')[0];
const footerLinks = document.querySelectorAll('footer section article a');
const footerHome = footerLinks[0];
const footerContact = footerLinks[2];
footerHome.innerHTML = 'Start';
footerContact.innerHTML = 'Mail Us';

smurfLink = document.createElement('a');
smurfLink.appendChild(document.createTextNode(`Smurf`));
smurfLink.setAttribute('href', '#');
footerMenu.insertBefore(smurfLink, footerContact);