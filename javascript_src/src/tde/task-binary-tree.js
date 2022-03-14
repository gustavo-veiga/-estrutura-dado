const taskBinaryTree = () => {
    let tree = new BinaryTree()
    let condition = true
    while (condition === true) {

        let value = readline(`Insira um numero na arvore: `)
        // console.log(`Inserindo valor ${value }`)
        tree.binaryConstructor(value)

        console.log('Ordem simetrica:')
        tree.orderPrinting()
        console.log('Pre-ordem:')
        tree.preorderPrinting()
    }

}
