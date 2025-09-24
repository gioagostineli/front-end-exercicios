// 6. Escreva uma função que aceita 3 (três) parâmetros e retorna o maior valor dentre eles. 
// Implemente a verificação para garantir que todos os parâmetros sejam numéricos antes de 
// fazer a comparação.


function valor(n1, n2, n3) {
	
	let maiorValor = 0;
	n1 = Number(n1);
	n2 = Number(n2);
	n3 = Number(n3);

	if(typeof n1 == 'number' && typeof n2 == 'number' && typeof n3 == 'number'){

	maiorValor = n1;
	
	if(n2 > maiorValor){
		maiorValor = n2;		
	}

	if(n3 > maiorValor){
		maiorValor = n3;		
	}

	return maiorValor;	
}}

console.log(valor(31,12,5));







