from .structs import Pilha, Fila
from .helpers import generate_random_numbers

NUMBERS_LENGHT = 10


def generate_pilha() -> Pilha:
    print('Gerando a Pilha')
    numbers = generate_random_numbers(
        len_list=NUMBERS_LENGHT,
        start=3,
        end=20
    )

    return Pilha(data=numbers)


def generate_fila() -> Fila:
    print('Gerando a Fila')
    numbers = generate_random_numbers(
        len_list=NUMBERS_LENGHT,
        start=3,
        end=20
    )

    return Fila(data=numbers)


def main():
    print("""
Tarefa 2
-> Criar uma lista sequencial a partir de uma fila e de uma pilha. Ambas não precisam estar preservadas ao final. Imprimir lista sequencial resultante
    """)

    numbers = []

    pilha = generate_pilha()
    print(f'Pilha resultante: {pilha}')

    print('')

    fila = generate_fila()
    print(f'Fila resultante: {fila}')

    print('')

    for _ in range(NUMBERS_LENGHT):
        numbers.append(pilha.pop())

        numbers.append(fila.pop())
    
    print(f'Lista sequencial resultante: {numbers}')
