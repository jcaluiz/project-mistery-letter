let inputText = document.querySelector('#carta-texto');
let section1 = document.querySelector('#text');
let button1 = document.querySelector('#criar-carta');
let elementP = document.createElement('p');
elementP.setAttribute('id', 'carta-gerada');
section1.appendChild(elementP)

button1.addEventListener('click', function () {
  elementP.innerHTML = '';
  let text = inputText.value.split(' ');
  for(let word of text){
    let span = document.createElement('span');
    span.innerHTML = word;
    elementP.appendChild(span);
  }

  // function gerarCor() {
  //   let r = parseInt(Math.random() * 255);
  //   let g = parseInt(Math.random() * 255);
  //   let b = parseInt(Math.random() * 255);
  //   return `rgb(${r} ${g} ${b})`
  // }

  // for(let index = 0; index < span.length; index += 1) {
  //   span[index].style.backgroundColor = gerarCor();

  // }

  // function alertMessenger() {
  //   if (text.length === 0 || text.length === ' ') {
  //     elementP.innerHTML = 'Por favor, digite o conteúdo da carta.';
  //   }
  // }
  // alertMessenger();

})
