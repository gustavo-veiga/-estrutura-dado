from operator import eq

from .helpers import delElement, copy_list

class Pilha:
    def __init__(self, data):
        self.data = data
    
    def push(self, value):
        # self.data = [ value ] + self.data
        items = [ value ]
        for item in self.data:
            items.append(item)
        
        self.data = copy_list(_list=items)
    
    def pop(self):
        0, 1, 2
        # [3, 4, 5, 6, 7]
        first = self.data[0]
        numbers = copy_list(_list=self.data)
        for (index, _) in enumerate(self.data):
            if index + 1 == len(numbers):
                break

            numbers[index] = numbers[index + 1]
        
        self.data = copy_list(_list=numbers)

        return first
        
    def __repr__(self):
        print(f'Pilha de elementos {self.data}')
    
    def __str__(self):
        return f'Pilha de elementos {self.data}'
        

def show_menu():
    print("""
    Você está em modo pilha, escolha uma das opções

    1 --> Visualizar pilha?
    2 --> Inserir elemento
    3 --> Deletar element
    4 --> Voltar ao programa inicial
    """)

    choice = input("Opcao: ")

    return int(choice)


def pilha_mode(numbers):
    pilha = Pilha(data=numbers)

    while True:
        choice = show_menu()

        if eq(choice, 1):
            print(pilha)
        elif eq(choice, 2):
            elemento = int(input('Digite um número: '))
            pilha.push(elemento)
            print(f'Pilha resultante: {pilha}')
        elif eq(choice, 3):
            elemento = pilha.pop()
            print(f'Elemento removido: {elemento}')
            print(f'Pilha resultante: {pilha}')
        elif eq(choice, 4):
            break
    
    return None
