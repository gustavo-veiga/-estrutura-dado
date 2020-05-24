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
  print(`Estrutura de Dados CLI
Os seguintes parâmetros estão disponíveis:
\tqueue \t\t\tFila
\tqueue-stack \t\tFila e Pilha
\tqueue-priority \t\tFila Prioritária
\tstack \t\t\tPilha
\tstack-operations \tPilha com Operações Matemáticas
\t-h --help \t\tEsse guia de ajuda`)
} else {
  print('Comando não encontrado!')
}
