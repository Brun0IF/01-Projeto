//foreach e arrow functions

//a melhor maneira de selecionar é com query
//método forEach

const imgs = document.querySelectorAll('img');
//três parâmetros - valor atual 'item', posição 'index', array
imgs.forEach(function(item, index,array){
  /*console.log(item);
  console.log(index);
  console.log(array);*/
});

//forEach é array
//é um método do array
//array-like não é um array, mas é possível converter

const titulos = document.getElementsByClassName('titulo');
//console.log(titulos);
//html collection

const titulosArray = Array.from(titulos);
console.log(titulosArray);
//A classe Array tem o método from, que converte em um array

// Arrow function
//É uma sintaxe curta em relação a function expression - function
// => arrow

const imagens = document.querySelectorAll('img');

//imgs.forEach(function(item){})
imagens.forEach((item)=>{
//console.log(item);
});

imagens.forEach((item, index)=>{
  console.log(item,index);
});

let i = 0;
imagens.forEach(()=>{
  console.log(i++);
})
