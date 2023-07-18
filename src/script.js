// script.js

const keypad = document.getElementById('keypad');
const display = document.getElementById('display');
const led = document.getElementById('led');

let enteredCode = '';
const correctCode = '1234';

keypad.addEventListener('click', event => {
  const key = event.target.textContent;

  if (isNumeric(key)) {
    enteredCode += key;
    display.textContent = enteredCode;

    if (enteredCode.length === correctCode.length) {
      if (enteredCode === correctCode) {
        display.textContent = 'Correct!';
        display.style.color = 'green';
        led.style.backgroundColor = 'green';
      } else {
        display.textContent = 'Incorrect!';
        display.style.color = 'red';
        led.style.backgroundColor = 'red';
      }

      enteredCode = '';
    }
  }
});

function isNumeric(str) {
  return /^\d+$/.test(str);
}