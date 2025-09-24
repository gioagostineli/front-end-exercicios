// 7. Escreva uma função que aceita 1 (um) parâmetro e exiba no console: 
// "Número positivo" se for um número maior que zero; .
// "Número negativo" se for um número menor que zero; 
// "Zero" se for exatamente zero; 
// "Não é um número" se não for um valor numérico.


function verificaNumero(numero) {
	if (isNaN(numero)) {
    	console.log("Não é um número");
}
	else if(numero > 0)
		{
		console.log('Numero positivo');
		}
	else if(numero < 0)
		{
		console.log('Numero negativo');
		}
	else{
		console.log('Zero');
	}
}
verificaNumero('abc')







