from .structs import Pilha
from .helpers import closeProgram, get_initial_parameters, generate_random_numbers
from operator import eq

def show_menu():
    print("""
    => Tarefa 1 com Pilha
    Escolha uma das opcoes meu Jovem Gafanhoto

    1 --> Deseja visualizar o a pilha?
    2 --> Deseja visualizar o primeiro elemento?
    3 --> Executar operação de DEC_2
    4 --> Executar operação de ADD_3
    5 --> Executar operação de ADD
    6 --> Executar operação de SUB
    7 --> Executar operação de MPY
    8 --> Executar operação de DIV
    9 --> Fechar programa
    """)

    choice = input("Opcao: ")

    return int(choice)


def show_first_element(pilha: Pilha) -> None:
    print(f"O elemento no topo da Pilha é: {pilha.get_top()}")


def main():
    print(f'Tamanho da Pilha: {20}')
    print(f'Elemento de início para a geração de número randômicos: {3}')
    print(f'Elemento de fim para a geração de número randômicos: {50}')

    numbers = generate_random_numbers(
        len_list=20,
        start=3,
        end=50
    )

    pilha = Pilha(data=numbers)

    while True:
        choice = show_menu()

        if eq(choice, 1):
            print(pilha)
        elif eq(choice, 2):
            show_first_element(pilha)
        elif eq(choice, 3):
            print('Executando operação de DEC_2 (subtrai 2 ao primeiro elemento)')
            pilha.dec_2()
            show_first_element(pilha)
        elif eq(choice, 4):
            print('Executando operação de ADD_3 (adicionar 3 ao primeiro elemento)')
            pilha.add_3()
            show_first_element(pilha)
        elif eq(choice, 5):
            print('Executando operação de ADD (adicionar o primeiro e o segundo elemento na primeira posição)')
            pilha.op_add()
            show_first_element(pilha)
        elif eq(choice, 6):
            print('Executando operação de SUB (subtraindo o primeiro e o segundo elemento na primeira posição)')
            pilha.op_sub()
            show_first_element(pilha)
        elif eq(choice, 7):
            print('Executando operação de MPY (multiplicando o primeiro e o segundo elemento na primeira posição)')
            pilha.op_mpy()
            show_first_element(pilha)
        elif eq(choice, 8):
            print('Executando operação de DIV (dividindo o primeiro e o segundo elemento na primeira posição)')
            pilha.op_div()
            show_first_element(pilha)
        elif eq(choice, 9):
            closeProgram()
