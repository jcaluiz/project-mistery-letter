let inputText = document.querySelector('#carta-texto');
let section1 = document.querySelector('#text');
let button1 = document.querySelector('#criar-carta');
let elementP = document.createElement('p');
elementP.setAttribute('id', 'carta-gerada');
section1.appendChild(elementP)

function alertMessenger() {
  let text = inputText.value;
  let textSplit = inputText.value.split('');

  if (text.length === 0) {
    elementP.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }

  let conta = 0;

  for (let index = 0; index < textSplit.length; index += 1) {
    if (textSplit[index] !== ' ') {
      conta += 1;
    }
  }

  if (conta === 0) {
    elementP.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function spanChild() {
  elementP.innerHTML = '';
  let text = inputText.value.split(' ');
  for (let word of text) {
    let span = document.createElement('span');
    span.innerHTML = word;
    elementP.appendChild(span);
  }
}

button1.addEventListener('click', spanChild)
button1.addEventListener('click', alertMessenger)
