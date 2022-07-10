const fizzValue = document.getElementById('fizz');
const buzzValue = document.getElementById('buzz');
const button = document.getElementById('button');
const integer = /^[1-9]|0[1-9]|[1-9][0-9]$/;
const outputParent = document.getElementById('div');
const outputChild = document.createElement('p');

const reset = () => {
  outputChild.remove();
}

const calc = (fizz, buzz) => {
  let text = '';
  for (let i = 1; i <= 99; i++) {
    if((i % fizz === 0) && (i % buzz === 0)) {
      text = text.concat(`FizzBuzz ${i}<br>`);
    } else {
      if(i % fizzValue.value === 0) {
        text = text.concat(`Fizz ${i}<br>`);
      } else {
        if(i % buzzValue.value === 0) {
          text = text.concat(`Buzz ${i}<br>`);
        }
      }
    }
  }
  return text;
}

button.addEventListener('click', () => {
  reset();
  if((integer.test(fizzValue.value)) && (integer.test(buzzValue.value))) {
    outputChild.innerHTML = calc(fizzValue.value, buzzValue.value);
    outputParent.appendChild(outputChild);
  } else {
    outputChild.innerHTML = '整数値を入力してください';
    outputParent.appendChild(outputChild);
  }
});

