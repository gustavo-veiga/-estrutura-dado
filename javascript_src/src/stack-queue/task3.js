class Task3 {
  constructor () {
    this.fila = []
    this.quantidadeMaxima = 50
    this.inicio = 0
    this.fimN = -1
    this.fimG = -1
    this.fimP = -1
    this.fimFila = 0
  }

  isEmpty () {
    return this.fila.length === 0
  }

  isFull () {
    return this.fila.length === this.quantidadeMaxima - 1
  }

  pop () {
    if (this.isFull()) {
      return null
    }

    this.fimFila++

    if (this.inicio === this.fimG) {
      this.fimG = -1
    }

    if (this.inicio === this.fimP) {
      this.fimP = -1
    }

    if (this.inicio === this.fimN) {
      this.fimN = -1
    }

    const pessoa = this.fila[this.inicio]

    this.fila[this.inicio] = undefined

    return pessoa
  }

  push(pessoa, prioridade) {
    if (this.isEmpty()) {
      // console.log('Lista vazia')
      this.fila[this.inicio] = pessoa

      if (prioridade === 'G') this.fimG++
      if (prioridade === 'P') this.fimP++
      if (prioridade === 'N') this.fimN++

      this.fimFila++

      return pessoa
    }

    // console.log('')
    // console.log('Fila antes dos push')
    // console.log(this.fila)

    // console.log('Inserindo a pessoa ' + pessoa.name)

    switch (prioridade) {
      case 'G':
        // console.log('pushDoGrave')
        this.pushDoGrave(pessoa, prioridade)
        break
      case 'P':
        // console.log('pushDoPrioritario')
        this.pushDoPrioritario(pessoa, prioridade)
        break
      case 'N':
        // console.log('pushDoNormal')
        this.pushDoNormal(pessoa, prioridade)
        break
    }

    // console.log('')
    // console.log('Fila apos o push')
    // console.log(this.fila)

    this.fimFila++

    return pessoa
  }

  pushDoGrave(pessoa) {
    if (this.fimG === -1) {
      this.fimG = this.inicio
      this.empurrarTodoMundo(this.fimG, 'G')
      this.fila[this.fimG] = pessoa
      return pessoa
    }

    this.empurrarTodoMundo(this.fimG, 'G')
    this.fimG++
    this.fila[this.fimG] = pessoa
    return pessoa
  }

  pushDoPrioritario(pessoa) {
    if (this.fimP === -1) {
      this.fimP = this.fimG !== -1 ? this.fimG : this.fimFila
      this.fimP++
      this.empurrarTodoMundo(this.fimP, 'P')
      this.fila[this.fimP] = pessoa
      return pessoa
    }

    this.empurrarTodoMundo(this.fimP, 'P')
    this.fimP++
    this.fila[this.fimP] = pessoa
    return pessoa
  }

  pushDoNormal(pessoa) {
    this.fila[this.fimFila] = pessoa
    this.fimN++
    return pessoa
  }

  empurrarTodoMundo (indice) {
    // console.log('Empurrando do indice ' + indice + ' até o final ' + this.fimFila)
    // console.log(this.fila)

    // 5, 4, 3, 2, 1, 0
    for (let i = this.fimFila; i >= indice; i--) {
      // console.log('I ' + i)
      this.fila[i + 1] = this.fila[i] // Temos que add o indice
    }

    // console.log('')
    // console.log('Fila apos o empurrar')
    // console.log(this.fila)
  }
}

minhaFilaPo = new Task3()

const ademar = {
  name: 'Ademar',
  sobrenome: 'Não sei'
}

const emanuel = {
  name: 'Emanuel',
  sobrenome: 'Ai que eu não sei mesmo'
}

const gustavo = {
  name: 'Gustavo',
  sobrenome: 'Bem, pergunta la no Posto Ipiranga'
}

const bolsonaro = {
  name: 'Bolsonaro',
  sobrenome: 'pergunta la pro Paulo Guedes'
}

const miguel = {
  name: 'Miguel',
  sobrenome: 'To na disney'
}

const thiago = {
  name: 'Thiago',
  sobrenome: 'Na av2 posto sua nota'
}

minhaFilaPo.push(miguel, 'G')
minhaFilaPo.push(ademar, 'N')
minhaFilaPo.push(gustavo, 'P')
minhaFilaPo.push(emanuel, 'N')
minhaFilaPo.push(thiago, 'P')
minhaFilaPo.push(bolsonaro, 'G')


console.log("Print da Fila abaixo ------------------------------------- ")
console.log(minhaFilaPo.fila)
