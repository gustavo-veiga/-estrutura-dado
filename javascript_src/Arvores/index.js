const { BinaryTree } = require('./binary-tree')
const readline = require('readline-sync')

let tree = new BinaryTree()
let condition = true
while ( condition === true ) {
    
    let value = readline.question(`Insira um numero na arvore: `)
    // console.log(`Inserindo valor ${value }`)
        tree.binaryConstructor(value)
        // tree.orderPrinting()
}
