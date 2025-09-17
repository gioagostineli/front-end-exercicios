let age = prompt('Insira a sua idade');
let wage = prompt('Insira o valor do seu salário (Exemplo 1150)');

if(age >= 21 && wage >= 3000){
    console.log('Você está apto a realizar o financiamento');
}else{
    console.log('Você não está apto a realizar o financiamento');
}