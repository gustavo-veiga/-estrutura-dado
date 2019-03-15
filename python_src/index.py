from random import randint

def executar(len_list=10, start=0, end=10):
    print(f'Tamanho da lista: {len_list}')
    print(f'Start: {start}')
    print(f'End: {end}')

    _list = [ randint(start, end) for i in range(len_list) ]

    choice = input("Deseja visualizar a lista? (S/N)").upper()

    if choice == 'S':
        print(_list)

    if choice == 'N':
        print('Tudo bem, não está aqui quem perguntou...')


def main():
    while True:
        len_list = int(input("Digite um valor para o tamanho da lista: "))
        start = int(input("Digite um valor de inicio: "))
        end = int(input("Digite um valor de fim: "))

        executar(end=end, len_list=len_list, start=start)

        choice = input("Deseja continuar? (S/N)").upper()

        if choice == 'S':
            continue

        if choice == 'N':
            print('Até logo, até mais ver, bon voyage, arrivederci, até mais, adeus, boa viagem, vá em paz, que a porta bata onde o sol não bate, não volte mais aqui, hasta la vista baby, escafeda-se, e saia logo daqui')
            break
