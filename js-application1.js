const fizzValue = document.getElementById('fizz');
const buzzValue = document.getElementById('buzz');
const button = document.getElementById('button');
const integer = /^[1-9]|0[1-9]|[1-9][0-9]$/;
const parent = document.getElementById('div');

const reset = () => {
  while(parent.firstChild !== null) {
    parent.removeChild(parent.firstChild);
  }
}

const outputDisplay = (fizz, buzz) => {
  for (let i = 1; i <= 99; i++) {
    if((i % fizz === 0) && (i % buzz === 0)) {
      const child = document.createElement('p');
      child.textContent = `${i}BuzzFizz`;
      parent.appendChild(child);
    } else {
      if(i % fizzValue.value === 0) {
        const child = document.createElement('p');
        child.textContent = `${i}Fizz`;
        parent.appendChild(child);
      } else {
        if(i % buzzValue.value === 0) {
          const child = document.createElement('p');
          child.textContent = `${i}Buzz`;
          parent.appendChild(child);
        }
      }
    }
  }
}

const reDoDisplay = () => {
  const child = document.createElement('p');
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