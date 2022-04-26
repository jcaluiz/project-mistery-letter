let inputText = document.querySelector('#carta-texto');
let paragraph1 = document.querySelector('#carta-gerada');

inputText.addEventListener('keyup',function(event) {
    event.preventDefault();
    paragraph1.innerHTML = inputText.value;
})