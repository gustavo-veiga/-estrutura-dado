const param = scriptArgs[0]

if (param === 'task1') {
  taskStack();
} else if (param === 'task2') {
  print('Executando programa 2...')
} else if (param == null || param === '-h' || param === '--help') {
  print(`Estrutura de Dados CLI
Os seguintes comandos estão disponíveis:
\ttask1 \t\tPrimeiro TDE
\ttask2 \t\tSegundo TDE
\t-h --help \tEsse guia de ajuda`)
} else {
  print('Comando não encontrado!')
}
