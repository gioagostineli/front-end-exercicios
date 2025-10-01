// 1. Selecionando elementos por ID
//  - Utilizando `document.getElementById()`, selecione a `<div>` que contém o livro "O Cortiço" 
//      e armazene sua referência em uma variável
//  - Dê saída à variável anterior no console do navegador, observe o que é exibido
let saidaDaDiv = document.getElementById("o-cortico");
console.log(saidaDaDiv);


// 2. Selecionando elementos por Tag
//  - Utilizando `document.getElementsByTagName()`, selecione todos os elementos `<a>` 
//         da página , armezene seu retorno em uma variável
//  - Dê saída à variável anterior no console do navegador, observe o que é exibido
let saidaA = document.getElementsByTagName('a');
console.log(saidaA);


// 3. Selecionando elementos com Query
//  - Utilizando `document.querySelector()`, selecione o elemento que possui o ID `vidas-secas`, 
//     armezene sua referência em uma variável
//  - Dê saída à variável anterior no console do navegador, observe o que é exibido
//  - Utilizando `document.querySelector()`, selecione o elemento que possui a classe `nav-list` e é filho do elemento com a classe `footer-links`, armezene sua referência em uma variável
//  - Dê saída à variável anterior no console do navegador, observe o que é exibido
//  - Utilizando `document.querySelector()`, selecione o elemento que possui a classe `nav-list` e é filho do elemento com a classe `header`, armezene sua referência em uma variável
//  - Dê saída à variável anterior no console do navegador, observe o que é exibido
let saidaVidasSecas = document.querySelector('#vidas-secas');
console.log(saidaVidasSecas);

let saidaNavListFooter = document.querySelector('.footer-links .nav-list');
console.log(saidaNavListFooter);

let saidaNavListHeader = document.querySelector('.header .nav-list');
console.log(saidaNavListHeader);


// 1. A partir da variável que armazena a referência ao livro "O Cortiço", 
// acesse sua propriedade `style` e modifique a cor de seu texto atribuindo 
// um novo valor à propriedade `color`, exemplo: `cortico.style.color = '#993300'`;
saidaDaDiv.style.color = 'red';










