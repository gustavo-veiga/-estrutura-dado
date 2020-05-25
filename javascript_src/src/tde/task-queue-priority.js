const taskQueuePriority = () => {
  let numAtendimentos = 0;
  const queuePriority = new QueuePriority(50);

  const addPaciente = (priority) => {
    let priorityName;
    if(priority === 1) {
      priorityName = 'Normal';
    } else if (priority === 2) {
      priorityName = 'Prioritário';
    } else if (priority === 3) {
      priorityName = 'Grave';
    }
    print('Digite o Nome e Sobrenome:');
    const name = readline();
    queuePriority.push({ name, priorityName }, priority);
    numAtendimentos++;
  }

  asciiArtMaisSaude();
  print('');
  let next;
  let choice = 0;
  let priority = '';
  do {
    print('1 - Chamar próximo paciente');
    print('2 - Adicionar paciente na fila');
    print('3 - Finalizar expediente');
    print('Selecione uma opção [1-3]:');
    choice = Number(readline());
    switch (choice) {
      case 1:
        next = queuePriority.pop();
        if(next === undefined) {
          print('Não há paciente para ser chamado!')
        } else {
          print(`Nome:       ${next.element.name}`);
          print(`Prioridade: ${next.element.priorityName}`);
        }
        break;
      case 2:
        do {
          print('N - Paciente Normal');
          print('P - Paciente Prioritário');
          print('G - Paciente Grave');
          print('Selecione uma opção ou aperter ENTER para voltar');
          priority = readline();
          switch (priority.toUpperCase()) {
            case 'N':
              addPaciente(1);
              break;
            case 'P':
              addPaciente(2);
              break;
            case 'G':
              addPaciente(3);
              break;
            default:
              choice = 0;
              break;
          }
        } while (choice !== 0);
        break;
      case 3:
        numAtendimentos == 0
          ? print('Não foram realizados atendimentos no dia')
          : print(`Total de atendimentos realizados: ${numAtendimentos}`);
        break;
      default:
        break;
    }
  } while (choice !== 3);
}
