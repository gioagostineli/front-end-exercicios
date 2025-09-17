let experience = prompt('Insira o seu tempo de experiencia em anos (Exemplo 2.8 caso seja quantidade quebrada em anos)');
let background = prompt('Insira o seu grau de instrução (superior, pós-graduação, mestrado ou doutorado)');
let point
let point2

experience = parseFloat(experience)

if(experience < 5){
    point = 10;
}else{
    point = 20;
}

if(background == 'superior'){
    point2 = 10;
}else if(background == 'pós-graduação'){
    point2 = 20;
}else if(background == 'mestrado'){
    point2 = 30;
}else if(background == 'doutorado'){
    point2 = 40;
}

let score = point+point2

console.log('A sua pontuação para o concurso é ' + score + ' pontos');