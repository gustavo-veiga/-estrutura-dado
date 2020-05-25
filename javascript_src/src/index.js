const param = scriptArgs[0]

if (param === 'queue') {
  taskQueue();
} else if (param === 'queue-stack') {
  taskQueueStack();
} else if (param === 'queue-priority') {
  taskQueuePriority();
} else if (param === 'stack') {
  taskStack();
} else if (param === 'stack-operations') {
  taskStackOperations();
} else if (param === 'task2') {
  print('Executando programa 2...')
} else if (param == null || param === '-h' || param === '--help') {
  asciiArtEstruturaDeDados();
  print('\nOs seguintes parâmetros estão disponíveis:');
  print('   queue             Fila');
  print('   tqueue-stack      Fila e Pilha');
  print('   queue-priority    Fila Prioritária');
  print('   stack             Pilha');
  print('   stack-operations  Pilha com Operações Matemáticas');
  print('   -h --help         Esse guia de ajuda');
} else {
  print('Comando não encontrado!')
}
