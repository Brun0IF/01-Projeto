img = document.querySelector('img');

// Recomendado usar o callback
function callback(e){
  console.log('Clicou');
}

img.addEventListener('click', callback);

//Primeiro parâmetro é a ação esperada
//Segundo parâmetro é a função a ser executada


const animaisLista = document.querySelector('.animal-item');

console.log(animaisLista);

function executaCallback(e){
  // console.log('Clicou');

  const currentTarget = e.currentTarget;
  const target = e.target;
  const type = e.type;
  const path = e.path

  console.log(
    currentTarget,
    target,
    type,
    path)
}

animaisLista.addEventListener('click', executaCallback);

const link = document.querySelector('a[href^="#"]');

function clickNoLink(e){
  e.preventDefault(); //evita o comportamento padrão de carregamento

  console.log(this);
  //this - palavra reservado javascript, serve para fazer referencia ao proprio objeto

  console.log(this.getAttribute('href'))
}


window.addEventListener('keydown', callKey);

function callKey(e){
  if (e.key === 'a'){
    document.body.classList.toogle('azul')
  } else if (e.key === 'v'){
    document.body.classList.toogle('verde');
  }
}