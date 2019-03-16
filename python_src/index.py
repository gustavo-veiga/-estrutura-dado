from operator import eq

from .menu import show_menu
from .helpers import closeProgram, delElement, generate_random_numbers, get_choice, get_initial_parameters, get_item
from .search_algorithms import binary_search, linear_search
from .ordering_algorithms import bubble_sort, shell_sort


def main():
    initial_parameters = get_initial_parameters()

    numbers = generate_random_numbers(
        len_list=initial_parameters.get('len'),
        start=initial_parameters.get('start'),
        end=initial_parameters.get('end')
    )

    while True:
        choice = show_menu(numbers=numbers)

        if eq(choice, 1):
            print(numbers)
        elif eq(choice, 2):
            item = get_item()
            index = linear_search(numbers=numbers, item=item)
            print(f'O elemento {item} está na posição {index} do array')
        elif eq(choice, 3):
            item = get_item()
            index = binary_search(numbers=numbers, item=item)
            print(f'O elemento {item} está na posição {index} do array')
        elif eq(choice, 4):
            _sorted = bubble_sort(numbers=numbers)
            print(f'A lista ordenada fica: {_sorted}')
        elif eq(choice, 5):
            shell_sort(numbers=numbers)
        elif eq(choice, 6):
            element = get_item()
            _list = delElement(numbers=numbers, element=element)
            print(f'Lista após deleção: {_list}')
        elif eq(choice, 7):
            closeProgram()
