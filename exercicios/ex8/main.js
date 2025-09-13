let income = prompt('Insira sua renda familiar (Exemplo 2250)');
let performance = prompt('Insira sua média escolar');
let point
let point2

performance = parseFloat(performance)

if(income <= 2000){
    point = 30;
}else if(income >= 2001 && income < 4000){
    point = 20;
}else{
    pint = 10;
}

if(performance <= 6.9){
    point2 = 5;
}else if(performance >= 7 && performance <= 8.4){
    point2 = 15;
}else{
    point2 = 25;
}

let score = point+point2

console.log('A sua pontuação para o para concorrer a bolsa de estudos é ' + score + ' pontos');