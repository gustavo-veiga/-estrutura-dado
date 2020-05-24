const taskQueueStack = () => {
  print('Insira o tamanho da fila e da pilha:');
  const size = Number(readline());

  const queue = new Queue(size);
  const stack = new Stack(size);

  print('Insira o valor inicial para os números randômicos:');
  const min = Number(readline());
  print('Insira o final inicial para os números randômicos:');
  const max = Number(readline());

  new RandomNumbers().generate().forEach(value => {
    queue.push(value);
  });

  new RandomNumbers().generate().forEach(value => {
    stack.push(value);
  });

  // TODO Imprimir resultados
}
