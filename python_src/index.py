from operator import eq

from .menu import show_menu
from .helpers import closeProgram, delElement, generate_random_numbers, get_choice, get_initial_parameters, get_item
from .search_algorithms import binarySearch, linearSearch
from .ordering_algorithms import bubbleSortOrd, shellSortOrd


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
            linearSearch(numbers=numbers, item=item)
        elif eq(choice, 3):
            item = get_item()
            binarySearch(numbers=numbers, item=item)
        elif eq(choice, 4):
            bubbleSortOrd(numbers=numbers)
        elif eq(choice, 5):
            shellSortOrd(numbers=numbers)
        elif eq(choice, 6):
            element = get_item()
            _list = delElement(numbers=numbers, element=element)
            print(f'List after delete: {_list}')
        elif eq(choice, 7):
            closeProgram()
