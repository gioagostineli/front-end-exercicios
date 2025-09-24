// 8. Escreva uma função que aceita 3 (três) parâmetros numéricos e retorne uma string 
// informando qual é o relacionamento entre eles:
//		"Todos iguais" se a = b = c; 
//		"Dois iguais" se apenas dois forem iguais
//		"Todos diferentes" se todos forem diferentes
//		"Valores inválidos" se algum não for número

function verificaIgual(a, b, c) {
	
	a = Number(a);
	b = Number(b);
	c = Number(c);

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
    	console.log("Valores inválidos");
}
	else if(a == b && a == c && b == c)
		{
		console.log('Todos iguais');
		}
	else if(a == b || a == c || b == c)
		{
		console.log('Dois iguais');
		}
	else{
		console.log('Todos diferentes');
	}
}
verificaIgual(1, 2, 'a')







