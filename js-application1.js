const fizzValue = document.getElementById('fizz');
const buzzValue = document.getElementById('buzz');
const button = document.getElementById('button');
const integer = /^[1-9]|0[1-9]|[1-9][0-9]$/;
const outputParent = document.getElementById('div');
const outputChild = document.createElement('p');
let result = '';

const reset = () => {
  outputChild.remove();
  result = '';
}

const calc = (fizz, buzz) => {
  for (let i = 1; i <= 99; i++) {
    if((i % fizz === 0) && (i % buzz === 0)) {
      result = result.concat(`FizzBuzz ${i}<br>`);
    } else {
      if(i % fizzValue.value === 0) {
        result = result.concat(`Fizz ${i}<br>`);
      } else {
        if(i % buzzValue.value === 0) {
          result = result.concat(`Buzz ${i}<br>`);
        }
      }
    }
  }
  console.log(result);
  return result;
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

