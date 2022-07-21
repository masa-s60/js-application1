const fizzValue = document.getElementById('fizz');
const buzzValue = document.getElementById('buzz');
const button = document.getElementById('button');
const integer = /^(?!.*\D)(?=.*[1-9]{1,2})(?!.*00).*$/;
const parent = document.getElementById('ul');

const reset = () => {
    parent.innerHTML = '';
}

const fizzBuzzType = {
  fizzBuzz: 1,
  fizz: 2,
  buzz: 3
}

const createElement = (key, num) => {
  if(key === fizzBuzzType.fizzBuzz) {
    const child = document.createElement('li');
    child.textContent = `${num}FizzBuzz`;
    parent.appendChild(child);
  } else if(key === fizzBuzzType.fizz) {
    const child = document.createElement('li');
    child.textContent = `${num}Fizz`;
    parent.appendChild(child);
  } else if(key === fizzBuzzType.buzz) {
    const child = document.createElement('li');
    child.textContent = `${num}Buzz`;
    parent.appendChild(child);
  }
}

const outputDisplay = (fizz, buzz) => {
  for (let i = 1; i <= 99; i++) {
    if((i % fizz === 0) && (i % buzz === 0)) {
      createElement(fizzBuzzType.fizzBuzz, i);
    } else if(i % fizzValue.value === 0) {
      createElement(fizzBuzzType.fizz, i);
    } else if(i % buzzValue.value === 0) {
      createElement(fizzBuzzType.buzz, i);
    }
  }
}

const reDoDisplay = () => {
  const child = document.createElement('li');
  child.textContent = '整数値を入力してください';
  parent.appendChild(child);
}

button.addEventListener('click', () => {
  reset();
  if((integer.test(fizzValue.value)) && (integer.test(buzzValue.value))) {
    outputDisplay(fizzValue.value, buzzValue.value);
  } else {
    reDoDisplay();
  }
});