//Selecionar elementos do DOM

//getElementById - seleciona um elemento do DOM
const selecaoAnimais = document.getElementById('animais');
console.log(selecaoAnimais);



//getElementByClassName - seleciona e retorna uma lista
const gridAnimais = document.getElementsByClassName('')
console.log('gridAnimais');

const listaContato = document.getElementsByClassName('grid-section');
console.log(listaContato);



//getElementByTagName 
const ul = document.getElementsByTagName('ul');



//querySelector - pega a primeira ocorrência

const animaisDescricao = document.querySelector('.animal-descricao');
console.log(animais);

const contato = document.querySelector('#contato');
console.log(contato);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const link = document.querySelector('[href^="=]')


//Seletor Geral
//querSelectorAll - retorna todos os elementos compatíveis
// com seletor css em uma NodeList

const gridSection = document.querySelectorAll('.grid-section');
console.log(gridSection);

const lista = document.querySelectorAll('ul');
console.log(lista);

const titulo = document.querySelectorAll('.titulo');
console.log(titulo);
console.log(titulo[1]);

//HtmlCollection
const gridSelectionHtml = document.getElementsByClassName('.grid-section');
console.log(gridSelectionHtml);

//NodeList
const gridSelectionNode = document.querySelectorAll('.grid-section')
console.log(gridSelectionNode);

/*
gridSelectionHtml.forEach(element => {} );
erro - Uncaught TypeError: gridSelectionHtml.forEach is not a function
*/

/*
gridSelectionNode.forEach;
essa lista é estática

As duas são Array-like
array nodelist - for each
*/


gridSelectionNode.forEach(function(gridItem, index, array){
  gridItem.classList.add('vermelho');
  console.log(index);
  console.log(array);
});

//01 - Retornar no console todas as imagens do site
//02 - Retorne no console apenas as imagens que começam com a palavra 'imagem'
//03 - Selecione todos os links internos do site (onde o href começa com #)
//04 - Selecione o primeiro h2 dentro de .animal-descricao

//01 -
const img = document.querySelectorAll('img');
console.log(img);

//02 - 
const todasImagens = document.querySelectorAll('img[src^="/img/imagem"]');
console.log(todasImagens);

//03 -
const todosLinks = document.querySelectorAll('[href^="#"]');
console.log(todosLinks);

//04 - 
const animaisH2 = document.querySelector('.animal-descricao');
const primeiroH2 = animaisH2.querySelector('h2');
console.log(primeiroH2);



