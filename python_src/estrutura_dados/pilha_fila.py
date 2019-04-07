from operator import eq

from .helpers import closeProgram, generate_random_numbers, get_choice, get_initial_parameters, get_item
from .pilha import pilha_mode


def show_menu():
    print("""
    Escolha uma das opcoes meu Jovem Gafanhoto

    1 --> Deseja visualizar o a lista?
    2 --> Selecione modo Pilha
    3 --> Selecione modo Fila
    4 --> Fechar programa
    """)

    choice = input("Opcao: ")

    return int(choice)


def main():
    initial_parameters = get_initial_parameters()

    numbers = generate_random_numbers(
        len_list=initial_parameters.get('len'),
        start=initial_parameters.get('start'),
        end=initial_parameters.get('end')
    )

    while True:
        choice = show_menu()

        if eq(choice, 1):
            print(numbers)
        elif eq(choice, 2):
            pilha_mode(numbers=numbers)
        elif eq(choice, 4):
            closeProgram()
