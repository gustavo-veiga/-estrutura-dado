
/* Abaixo as funcoes de ordenacao  */

function bubbleSort (list) {
    
    //Armazenar tempo de execucao
    console.time('bubbleSort')

    for(var i = 0; i < list.length; i++){
        for(var j = 0; j < list.length; j++){
            if (list[j] > list[j + 1]) {
                var temp = list[j + 1]
                list[j + 1] = list[j]
                list[j] = temp
            }
        }
    }

    console.log("Sua lista esta ordenada!")
    console.timeEnd('bubbleSort')

        return list
    
}

function newBubbleSort(list) {
    var n = 0, auxiliarPosicao = 1, troca = 1

    console.time('newBubbleSort')
    //Ordenacao de forma crescente
    while(n <= list.length && troca == 1){
        troca = 0

        for (let i = 0; i <= list.length - 1; i++) {
            
            if (list[i] > list[i + 1]) {
                troca = 1
                auxiliarPosicao = list[i]
                list[i] = list[i + 1]
                list[i + 1] = auxiliarPosicao
            }
        }
        n++
    }
    console.timeEnd('newBubbleSort')
    return list
}
function insertionSort(list) {
    var j, eleito

    console.time('insertionSort')
    //laco com a quantidade do vetor -1
    for (let i = 1; i < list.length; i++) {
        
        eleito = list[i]
        j = i - 1
        
        while (j >= 0 && list[j] > eleito) {
            list[j + 1] = list[j]
            j = j - 1
        }
        list[j + 1] = eleito
    }
    console.timeEnd('insertionSort')
}

/*Abaixo funcoes de busca */
function binarySearch (alvo, list) {
    
    list = newBubbleSort(list)

    var startList = 0
    var endList = list.length - 1
    var valor_encontrado = false
    var meio = 0 

    //Armazenar tempo de execucao
    console.time('binarySearch')
    while((startList <= endList) && valor_encontrado == false){
         
        meio = Math.floor((startList + endList) / 2)

        if (list[meio] == alvo) {
            console.log("O valor que voce deseja esta na posicao: ", Math.floor((startList + endList) / 2))
                valor_encontrado = true
                console.timeEnd('binarySearch')

                return Math.floor((startList + endList) / 2)
        }
        if (alvo > list[meio]) {
            startList = meio + 1
        } else {
            endList = meio - 1
        }
    }
    console.timeEnd('binarySearch')

}

function linearSearch (target, list) {
    var condition = false
    var i = 0

    //Armazenar o tempo de execucao
    console.time('linearSearch')

    while (condition == false) {
    
        if (list[i] == target) {
            console.log("O numero alvo esta na posicao : ", i)
            condition = true
        }
         i++
   }
   console.timeEnd('linearSearch')
}
/*Abaixo funcao de delete */
function elementDelete (targetToDelete,list) {
    var positionToDelete = binarySearch(targetToDelete,list)
   
    if( targetToDelete > -1 ) {
        list.splice(positionToDelete, 1)
            console.log("O elemento (", targetToDelete, ") foi removido com sucesso!")
    }
}

//Leitura dos elementos e instancia da lista
var readline = require('readline-sync');

var sizeArray = readline.question("Defina um range para a lista: ")
    sizeArray = parseInt(sizeArray)
var listaLinear = []
var start = readline.question("Defina um valor de start: ")
var end = readline.question("Defina um valor de end: ")

//Preenchendo a lista com valores randomicos, possiveis numeros repitidos
for(let i = 0; i <= sizeArray -1 ; i++) {
    listaLinear.push(defineList(start, end))
   
    function defineList (start, end) {
        var min = Math.ceil(end)
        var max = Math.floor(start)

        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

//Menu de opcoes
var condition = true
while (condition == true) {
    
    var choice = readline.question(`
        Escolha uma das opcoes meu jovem Padawan

    1 --> Deseja visualizar o a lista ?
    2 --> Realizar busca linear por um elemento.
    3 --> Realizar busca Binaria.
    4 --> Ordenar com bubble sort.
    5 --> Excluir um elemento.
    6 --> Ordenar com bubble sort 2.0.
    7 --> Ordenar com insertion sort
    8 --> Sair do programa.
`)

    if (choice == '1'){
        console.log(listaLinear)
    }
    else if (choice == '2') {
        console.log(listaLinear)

        var target = readline.question("Qual numero deseja procurar : ")
            linearSearch(target, listaLinear)
    }
    else if (choice == '3'){
        console.log(listaLinear)

        var targetNumber = readline.question("Qual numero deseja procurar : ")
            binarySearch(targetNumber, listaLinear)
    }
    else if (choice == '4'){
        bubbleSort(listaLinear)
    }
    else if (choice == '5'){
        console.log(listaLinear)

        var targetToDelete = readline.question("Qual numero deseja Deletar da lista : ")
            elementDelete(targetToDelete, listaLinear)
    }
    else if (choice == '6'){
        newBubbleSort(listaLinear)
    }
    else if(choice == '7'){
        insertionSort(listaLinear)
    }
    else if (choice == '8'){
        console.log("Pensei que eramos amigos...........")
        condition = false
    }
}
