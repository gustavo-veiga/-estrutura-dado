class QueuePriority {
  constructor() {
    this.fila = [];
    this.quantidadeMaxima = 50;
    this.inicio = 0;
    this.fimN = -1;
    this.fimG = -1;
    this.fimP = -1;
    this.fimFila = 0;
  }

  isEmpty() {
    return this.fila.length === 0;
  }

  isFull() {
    return this.fila.length === this.quantidadeMaxima - 1;
  }

  pop() {
    if (this.isFull()) {
      return undefined;
    }
    this.fimFila++
    if (this.inicio === this.fimG) {
      this.fimG = -1;
    }
    if (this.inicio === this.fimP) {
      this.fimP = -1;
    }
    if (this.inicio === this.fimN) {
      this.fimN = -1;
    }
    const pessoa = this.fila[this.inicio];
    this.fila[this.inicio] = undefined;
    return pessoa;
  }

  push(pessoa, prioridade) {
    if (this.isEmpty()) {
      this.fila[this.inicio] = pessoa;
      if (prioridade === 'G') this.fimG++;
      if (prioridade === 'P') this.fimP++;
      if (prioridade === 'N') this.fimN++;
      this.fimFila++;
      return pessoa;
    }
    switch (prioridade) {
      case 'G':
        this.pushDoGrave(pessoa, prioridade);
        break
      case 'P':
        this.pushDoPrioritario(pessoa, prioridade);
        break
      case 'N':
        this.pushDoNormal(pessoa, prioridade);
        break
    }
    this.fimFila++;
    return pessoa;
  }

  pushDoGrave(pessoa) {
    if (this.fimG === -1) {
      this.fimG = this.inicio;
      this.empurrarTodoMundo(this.fimG, 'G');
      this.fila[this.fimG] = pessoa;
      return pessoa;
    }
    this.empurrarTodoMundo(this.fimG, 'G');
    this.fimG++;
    this.fila[this.fimG] = pessoa;
    return pessoa;
  }

  pushDoPrioritario(pessoa) {
    if (this.fimP === -1) {
      this.fimP = this.fimG !== -1 ? this.fimG : this.fimFila;
      this.fimP++;
      this.empurrarTodoMundo(this.fimP, 'P');
      this.fila[this.fimP] = pessoa;
      return pessoa;
    }
    this.empurrarTodoMundo(this.fimP, 'P');
    this.fimP++;
    this.fila[this.fimP] = pessoa;
    return pessoa;
  }

  pushDoNormal(pessoa) {
    this.fila[this.fimFila] = pessoa;
    this.fimN++;
    return pessoa;
  }

  empurrarTodoMundo(indice) {
    for (let i = this.fimFila; i >= indice; i--) {
      this.fila[i + 1] = this.fila[i];
    }
  }
}

const taskQueuePriority = () => {
  minhaFilaPo = new QueuePriority()

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


  print("Print da Fila abaixo ------------------------------------- ")
  print(minhaFilaPo.fila)
}
