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
