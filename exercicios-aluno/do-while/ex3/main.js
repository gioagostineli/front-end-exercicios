

do {
  n1 = Number (prompt('Insira o primeiro numero'));
  n2 = Number (prompt('Insira o segundo numero'));
  n3 = Number (prompt('Insira o terceiro numero'));
  n4 = Number (prompt('Insira o quarto numero'));
  n5 = Number (prompt('Insira o quinto numero'));
}

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5)
  {
    console.log('O maior dos numeros inseridos é' + n1);
  }
while (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5);
console.log('O maior dos numeros inseridos é' + n2);

while (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5);
console.log('O maior dos numeros inseridos é' + n3);

while (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5);
console.log('O maior dos numeros inseridos é' + n4);

while (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4);
console.log('O maior dos numeros inseridos é' + n5);