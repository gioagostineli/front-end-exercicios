// Constantes
const botao = document.getElementById('btn-adicionar');
const item = document.querySelector('#novo-tem');
const pessoa = document.querySelector('#nome-pessoa');

const listaDeItens = document.querySelector('.itens');


// Funções
function adicionaItem(){
    if ( item.value == ''){
        alert('Preencha o campo item')
    } else{
        // Div (elemento pai)
        let novoItem = document.createElement('div');

        //Elementos filhos
        novoItem.innerHTML = `
            <h3 class="item">${item.value}</h3>
            <p class="pessoa"></p>
            <buttom class="trazer">Eu trago!</button>
        `;

        // Adiciona elemento na pagina como filho de listaDeItens
        listaDeItens.appendChild(novoItem);

        // Adicionar evento ao botão de voluntariar-se
        const botaoTrazer = novoItem.querySelector('.trazer');
        botaoTrazer.onclick = trazerItem;
    }
}

function trazerItem(evento) {
    let botaoClicado = evento.target;
    let divItem = botaoClicado.parentNode;

    let paragrafo = divItem.querySelector('.pessoa');

    paragrafo.innerText = pessoa.value;

}



// Eventos
botao.onclick = adicionaItem();

