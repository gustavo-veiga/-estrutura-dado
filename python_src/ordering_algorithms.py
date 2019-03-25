def bubble_sort(numbers: list) -> list:
    """
    Algorithm that implement buble sort ordering

    Parameters
    ----------

    numbers : list
        The numbers list

    Returns
    -------

    list
    """
    _numbers = [ number for number in numbers ]
    swaped = True

    n = 1

    while swaped and n <= len(numbers):
        swaped = False

        for i in range(len(_numbers) - 1):
            if _numbers[i] > _numbers[i+1]:
                _numbers[i], _numbers[i+1] = _numbers[i+1],_numbers[i]
                swaped = True
        
        n += 1

    return _numbers


def shell_sort(numbers: list) -> list:
    """
    Algorithm that implement buble sort ordering

    Parameters
    ----------

    numbers : list
        The numbers list

    Returns
    -------

    list
    """
    print('Não implementado ainda')
    return []


def swap(numbers: list, i: int, j: int) -> None:
    """
    Simple permute elements between two indexes

    Parameters
    ----------

    numbers : list
        The numbers list
    
    i: int
        the first index
    
    j: int
        the last index

    Returns
    -------

    None
    """
    aux = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = aux


def partition(numbers: list, left: int, right: int) -> int:
    """
    Separate the array in two relative to the pivot, ordering both, and at the end, returns a new pivot

    Parameters
    ----------

    numbers : list
        The numbers list
    
    left: int
        the first index
    
    right: int
        the last index

    Returns
    -------

    list
    """
    i = left + 1
    j = right
    pivo = numbers[left]

    while i <= j:
        # print('i: {}, j: {}'.format(i, j))
        if numbers[i] <= pivo:
            i += 1
        elif numbers[j] > pivo:
            j -= 1
        elif i <= j:
            swap(numbers, i, j)
            i += 1
            j -= 1
    
    swap(numbers, left, j)
    return j

def quick_sort_func(numbers: list, left: int, right: int) -> list:
    """
    Execute recursively the quick sort function

    Parameters
    ----------

    numbers : list
        The numbers list
    
    left: int
        the first index
    
    right: int
        the last index

    Returns
    -------

    list
    """
    if left < right:
        pivo = partition(numbers, left, right)

        quick_sort_func(numbers, left, pivo - 1)
        quick_sort_func(numbers, pivo + 1, right)
    
    return numbers


def quick_sort(numbers: list) -> list:
    """
    Implementation of quick sort function, based on https://www.youtube.com/watch?v=PrR3nfq9wSY algorithm

    Parameters
    ----------

    numbers : list
        The numbers list

    Returns
    -------

    list
    """
    _numbers = [ number for number in numbers ]

    return quick_sort_func(_numbers, 0, len(_numbers) - 1)
