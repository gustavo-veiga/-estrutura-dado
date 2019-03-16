from .helpers import generate_random_numbers, get_choice, get_initial_parameters

def executar(len_list=10, start=0, end=10):
    _list = generate_random_numbers(
        len_list=len_list,
        start=start,
        end=end
    )

    choice = get_choice('Deseja visualizar a lista?')

    if choice:
        print(_list)
    else:
        print('Tudo bem, não está aqui quem perguntou...')


def main():
    while True:
        initial_parameters = get_initial_parameters()

        executar(
            end=initial_parameters.get('end'),
            len_list=initial_parameters.get('len'),
            start=initial_parameters.get('start')
        )

        choice = get_choice('Deseja continuar?')

        if not choice:
            print('Até logo, até mais ver, bon voyage, arrivederci, até mais, adeus, boa viagem, vá em paz, que a porta bata onde o sol não bate, não volte mais aqui, hasta la vista baby, escafeda-se, e saia logo daqui')
            break
