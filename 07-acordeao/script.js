function initTabNav(){



}

initTabNav();

function intAccordion() {

  const accordion = document.querySelectorAll('.js-accordion dt');

  function accordionList(){
    console.log('clicou no dt');
  }


  accordionList.forEach((item) =>{

    item.addEventListener('click', activeAccordion);
  })
}