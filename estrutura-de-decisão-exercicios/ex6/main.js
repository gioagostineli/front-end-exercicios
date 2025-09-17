let grade = prompt('Insira a nota (0 a 10)');

grade = parseFloat(grade)

if(grade >= 7 && grade <= 10 ){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}
