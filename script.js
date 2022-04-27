let inputText = document.querySelector('#carta-texto');
let section1 = document.querySelector('#text');
let button1 = document.querySelector('#criar-carta');
let space = ' ';
let elementP = document.createElement('p');
elementP.setAttribute('id', 'carta-gerada');
section1.appendChild(elementP)

inputText.addEventListener('keyup', function () {
  elementP.innerText = inputText.value;
})

button1.addEventListener('click', function () {
  let text = elementP.innerText;
  let splitText = text.split(' ');

  for (let index = 0; index < splitText.length; index += 1) {
    if(splitText) {
      elementP.appendChild(document.createElement('span'));
    }
  }
  let spanElement = document.getElementsByTagName('span');

  for (let index = 0; index < splitText.length; index += 1) {
    spanElement[index].classList.add('span-element');

    // console.log(splitText[index]);
  }
  // let spanClasses = document.querySelectorAll('.span-element');
  // let array = [];
  // for (let index = 0; index < splitText.length; index += 1) {
  //   array.push(splitText[index])
  // }
  // for (let index = 0; index < splitText.length; index += 1) {
  //   array[index].appendChild(spanClasses[index])
  // }
  // // console.log(splitText);
  function alertMessenger() {
    if (text.length === 0 || text.length === ' ') {
      elementP.innerText = 'Por favor, digite o conteúdo da carta.';
    }
  }
  alertMessenger();

})
