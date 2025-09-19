let counter;
let weight;
let totalWeight = 0;
let average = 0;

for(counter = 1 ; counter <= 10 ; counter = counter + 1){
  weight = prompt ('Insira o seu peso');
  weight = Number (weight);

  totalWeight = totalWeight + weight;  
  
} 
average = totalWeight / (counter - 1);
  console.log('A média aritmética dos pesos é: ' + average);


