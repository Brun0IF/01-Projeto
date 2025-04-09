//classList
//retorna uma lista com as classes do elemento
//permite adicionar, remover e verificar se contém. 

const menu = document.querySelector('.menu');

// console.log(menu.classList); // []string
// console.log(menu.className); // string

menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile');

menu.classList.remove('mobile');
//menu.classList.toggle('ativo'); //se não existir, adiciona, se existir remove

const contem = menu.classList.contains('ativo');
// console.log(contem);

menu.classList.replace('ativo', 'inativo');

//attributes - retorna um array-like com os atributos do elemento;

const animais = document.querySelector('.animais');
// console.log(animais.attributes);

//get, set
//getAttribute - pegar
//setAttribute - setar/atribuir

const img = document.querySelector('img');
console.log(img);

// console.log(img.getAttribute('src'));
img.setAttribute('alt', 'Texto alternativo');

const possui = img.hasAttribute('img');
// console.log(possui);

// img.removeAttribute('alt');

//Read Only e Writable
// Em JS tem propriedades que permitem alteração e propriedades que são somente de leitura

const meusAnimais = document.querySelector('.animal');
// console.log(meusAnimais);

// console.log(meusAnimais.className);

// meusAnimais.className = 'azul'; - substitui completamente a string 

