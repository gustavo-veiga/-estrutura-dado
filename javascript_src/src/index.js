const param = scriptArgs[0]

if (param === 'queue') {
    taskQueue();
} else if (param === 'queue-stack') {
    taskQueueStack();
} else if (param === 'mais-saude') {
    taskMaisSaude();
} else if (param === 'stack') {
    taskStack();
} else if (param === 'stack-operations') {
    taskStackOperations();
} else if (param === 'task2') {
    print('Executando programa 2...')
} else if (param == null || param === '-h' || param === '--help') {
    color.red();
    asciiArtEstruturaDeDados();
    color.reset();
    print('\nOs seguintes parâmetros estão disponíveis:');
    print('   queue       Fila');
    print('   queue-stack Fila e Pilha');
    print('   mais-saude  Atendimento a paciente em fila prioritária');
    print('   stack       Pilha');
    print('   opstack     Pilha com Operações Matemáticas');
    print('   -h --help   Esse guia de ajuda');
} else {
    print('Comando não encontrado!')
}
