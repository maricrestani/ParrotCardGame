let numCartas = prompt("Com cantas cartas você quer jogar? (escolha de 4 a 14 cartas)");

verificarSePar()

function verificarSePar() {
    if (numCartas % 2 !== 0) {
        numCartas = prompt("Opa, o número de cartas precisa ser par, digite novamente!")
        verificarSePar()
    } else {
        distribuirCartas()
    }
}

function distribuirCartas() {
    alert("vamos lá!")
}




//array para criar as cartas do jogo



/*

const numTarefas = prompt("Quantas tarefas quer listar?")
const tarefas = []

tarefas[0] = prompt("Tarefa 1 ?")
tarefas[1] = prompt("Tarefa 2 ?")
tarefas[2] = prompt("Tarefa 3 ?")

<ul>
<li>${tarefas[0]}</li>
<li>${tarefas[1]}</li>
<li>${tarefas[2]}</li>
</ul>

tarefas.push()
ou
tarefas[tarefas.lenght] = "nova tarefa"

contador = 0
while (numTarefas > contador){
tarefas.push(prompt("Qual a tarefa?"))
    contador = contador + 1
}

*/
 




/*
// fazer aparecer só o número de cartas selecionado (ou desesconder 14 - num de cartas escolhido)
function colocarCartas() {

    for (let i = 0; i < numCartas; i++) {
        const cartaSelecionada = document.quearySelector('.card')
        cartaSelecionada.classList.remove('hide')
    }

}



//fazer as cartas virarem ao serem selecionadas e desvirarem depois de certo tempo

// fazer as cartas sumirem quando duas iguais foram clicadas - ambas agora devem ficar viradas pra cima até o final do jogo


// deixar as figurinhas em ordem aleatoria??

/*
minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
    return Math.random() - 0.5;
}
*/

//Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um alert com a mensagem "Você ganhou em X jogadas!" sendo X a quantidade de vezes que o usuário virou uma carta no jogo.