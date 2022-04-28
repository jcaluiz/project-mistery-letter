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

function grupoEstilo() {
  let style = ['newspaper', 'magazine1', 'magazine2'];
  return style[parseInt(Math.random() * 3)];
}

function grupoTamanho() {
  let size = ['medium', 'big', 'reallybig']
  return size[parseInt(Math.random() * 3)];
}

function grupoRotacao() {
  let rotation = ['rotateleft', 'rotateright']
  return rotation[parseInt(Math.random() * 2)];
}

function grupoInclinacao() {
  let inclination = ['skewleft', 'skewright']
  return inclination[parseInt(Math.random() * 2)];
}

function cardStyle() {
  let elementSpan = document.getElementsByTagName('span');
  for(let index = 0; index < elementSpan.length; index += 1){
    elementSpan[index].classList.add(grupoEstilo(), grupoTamanho(), grupoRotacao(), grupoInclinacao());
    elementSpan[index].addEventListener('click', function() {
      elementSpan[index].classList.remove('newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright');
      elementSpan[index].classList.add(grupoEstilo(), grupoTamanho(), grupoRotacao(), grupoInclinacao());
    })
  }
}

function contador() {
  let contador = document.querySelector('#carta-contador');
  let textSplit = inputText.value.split(' ');
  contador.innerHTML = textSplit.length;
}

button1.addEventListener('click', spanChild)
button1.addEventListener('click', alertMessenger)
button1.addEventListener('click', cardStyle)
button1.addEventListener('click', contador)