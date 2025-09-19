let number;
let biggerNumber = 0;
let counter = 1;

do {
  number = prompt ('Insira um número');
  number = Number(number);

  if (number > biggerNumber){
    biggerNumber = number;
  }

  counter = counter++;
} while (counter < 5);

console.log('O maior número inserido foi: ' + biggerNumber);