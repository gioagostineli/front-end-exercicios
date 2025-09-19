let password = 'paçoca';
let userPassword;

do {
  userPassword = prompt('Insira sua senha');
} while (password != userPassword);
console.log('Senha incorreta! Insira sua senha)');