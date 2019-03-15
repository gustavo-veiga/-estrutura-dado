/* Ai vai aquela enchurrada de funcao */

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

function binarySearch (alvo, list) {
    
    list = bubbleSort(list)

    var startList = 0
    var endList = list.length -1
    var valor_encontrado = false
    var meio = 0 

    //Armazenar tempo de execucao
    console.time('binarySearch')
    while((startList <= endList) && valor_encontrado == false){
         
        meio = Math.floor((startList + endList) / 2)

        if (list[meio] == alvo) {
            console.log("O valor que voce deseja esta na posicao: ", Math.floor((startList + endList) / 2))
                valor_encontrado = true
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

function elementDelete (targetToDelete,list) {
    console.log("elementDelete")

}

function shellSort (list) {
    
    var increment = list.length / 2
    
    //Armazenar o tempo de execucao
    console.time('shellSort')

    while (increment > 0) {
        for (var i = increment; i < list.length; i++) {
            var j = i
            var temp = list[i]

            while (j >= increment && list[j - increment] > temp) {
                list[j] = list[ j - increment]
                j = j - increment
            }

            list[j] = temp
        }

        if (increment == 2) {
            increment = 1
        } else {
            increment = parseInt(increment * 5 / 11)
        }
    }
    
    console.log("Sua lista esta ordenada!")
    console.timeEnd('shellSort')
    
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
    4 --> Ordenar com bubble sorte.
    5 --> Ordenar Com  Shell sorte.
    6 --> Excluir um elemento.
    7 --> Encerrar :(
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
            binarySearch(targetNumber,listaLinear)
    }
    else if (choice == '4'){
        bubbleSort(listaLinear)
    }
    else if (choice == '5'){
        shellSort(listaLinear)
    }
    else if (choice == '6'){
        console.log(listaLinear)

        var targetToDelete = readline.question("Qual numero deseja Deletar da lista : ")
            elementDelete(targetToDelete, listaLinear)
    }
    else if (choice == '7'){
        console.log("Pensei que eramos amigos...........")
        condition = false
    }
}