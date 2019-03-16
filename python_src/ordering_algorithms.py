def bubbleSortOrd(numbers: list) -> list:
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
    _sorted = False

    while not _sorted:
        _sorted = True

        for i in range(len(_numbers) - 1):
            if _numbers[i] > _numbers[i+1]:
                _numbers[i], _numbers[i+1] = _numbers[i+1],_numbers[i]
                _sorted = False        

    return _numbers


def shellSortOrd(numbers: list) -> list:
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
