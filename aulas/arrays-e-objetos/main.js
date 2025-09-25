let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; //domingo, segunda...
let diasDaSemana = [
	'Domingo       ', 
	'Segunda-feira ', 
	'Terça-feira   ', 
	'Quarta-feira  ', 
	'Quinta-feira  ', 
	'Sexta-feira   ', 
	'Sabado        '
]

//determinar se o uso do dia é verde, marelo ou vermelho
const indicadorDeUso = (numerDeHoras) => {
	if(numerDeHoras <= 1){
		return '🟢';
	}
	else if(numerDeHoras <= 3){
		return '🟡';
	}
	else{
		return '🔴';
	}
}

for(let contador = 0 ; contador <= 6 ; contador++){
	let farol = indicadorDeUso(usoDiasDaSemana[contador]);
	let dia = diasDaSemana[contador];
	let horas = usoDiasDaSemana[contador];
	// let mensagem = 'hora de uso'

	// if(horas > 1){
	// 	let mensagem = 'horas de uso';
	// }
	let mensagem = (horas > 1) ? 'horas de uso' : 'hora de uso'; //operador ternário
	//								   true			   false
 
	console.log(`${farol} 📅 ${dia } | ${horas} ${mensagem}`);
} 

// console.log(typeof usoDiasDaSemana);
// console.log(typeof usoDiasDaSemana[0]);
// console.log(typeof indicadorDeUso);







