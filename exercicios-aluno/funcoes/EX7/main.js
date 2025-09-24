// 7. Escreva uma função que aceita 1 (um) parâmetro e exiba no console: 
// "Número positivo" se for um número maior que zero; .
// "Número negativo" se for um número menor que zero; 
// "Zero" se for exatamente zero; 
// "Não é um número" se não for um valor numérico.


function valor(numero) {
	if(typeof numero !== 'number' ){
		console.log('Não é um numero')
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

console.log(valor(1));







