document.addEventListener('DOMContentLoaded', function() {

  let body = document.body;
  let div = document.createElement('div');
  let input = document.createElement('input');
  let button = document.createElement('button');


  body.append(div);
  body.append(input);
  body.append(button);
  div.className = 'div';
  input.className = 'input';
  button.className = 'btn';
  div.textContent = '0';
  input.placeholder = 'Введите число';
  button.textContent = 'Запустить таймер';
  input.value = ''

  let timerBlock = document.querySelector('.div');
  let inputValue = document.querySelector('.input');
  let btn = document.querySelector('.btn');

  function enterValue() {
    timerBlock.textContent = inputValue.value;
  }

  inputValue.addEventListener('input', enterValue);

  function startCounter () {
    inputValue.value = '';
    let num = div.textContent;
    let start = setInterval(counter, 1000);
    function counter() {
      if (num <= 0) {
        return;
      }
      else {
        num -= 1;
        div.textContent = num;
      }
    }
  }

  btn.addEventListener('click', startCounter);

})





// (function() {

// }) ();










