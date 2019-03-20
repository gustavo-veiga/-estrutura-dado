from random import randint
from .search_algorithms import binary_search, linear_search
from .ordering_algorithms import bubble_sort


def closeProgram():
    print('Até logo, até mais ver, bon voyage, arrivederci, até mais, adeus, boa viagem, vá em paz, que a porta bata onde o sol não bate, não volte mais aqui, hasta la vista baby, escafeda-se, e saia logo daqui')
    exit()


def delElement(numbers: list, element: int, method: str) -> int:
    """
    Delete element from the list

    Parameters
    ----------

    numbers : list
        The numbers list

    element : int
        The element to delete

    Returns
    -------

    list
        The final list with random numbers, without element
    """
    if method == 'ordered':
        _numbers = bubble_sort(numbers=numbers)
        index = binary_search(numbers=_numbers, item=element)

        print(f'Lista ordenada: {_numbers}')

        if index == -1:
            return _numbers

        for i in range(index, len(_numbers) - 1):
            _numbers[i] = _numbers[i + 1]
            _numbers[i + 1] = None

        return _numbers
    
    index = linear_search(numbers=numbers, item=element)

    if index == -1:
        return numbers

    _numbers = [ number for number in numbers ]
    last_index = len(_numbers) - 1
    _numbers[index] = _numbers[last_index]
    _numbers[last_index] = None

    return _numbers


def get_item():
    return int(input('Escolha um item da lista: '))


def generate_random_numbers(len_list: list, start: int, end: int) -> list:
    """
    Generate random numbers, by using list length, start and end

    Parameters
    ----------

    len_list : list
        The length of the list. This argument is required

    start : int
        The probably (because the final number is random) start number for the list. This argument is required
    
    end : int
        The probably (because the final number is random) end number for the list. This argument is required

    Returns
    -------

    list
        The final list with random numbers
    """
    return [ randint(start, end) for i in range(len_list) ]


def get_choice(message: str) -> bool:
    """
    Print a question to user and get answer. Return a bool, in that No is False, and Yes is True

    Parameters
    ----------

    message : str
        The question

    Returns
    -------

    bool
        Yes is True and No is False
    """

    return input(f'{message} (S/N)').upper() == 'S'


def get_initial_parameters():
    """
    Get initial parameters from user

    Returns
    -------

    dict
        {
            'len': len of the list,
            'start': start number,
            'end': end number
        }
    """

    len_list = int(input('Digite um valor para o tamanho da lista: '))
    start = int(input('Digite um valor de inicio: '))
    end = int(input('Digite um valor de fim: '))

    return {
        'len': len_list,
        'start': start,
        'end': end
    }
