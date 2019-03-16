def binarySearch(numbers: list, item: int) -> int:
    """
    Algorithm that implement binary search

    Parameters
    ----------

    numbers : list
        The numbers list

    item : int
        The element to search

    Returns
    -------

    index int
        The index of element. Return -1 if element not exists in list
    """
    return -1


def linearSearch(numbers: list, item: int) -> int:
    """
    Algorithm that implement linear search

    Parameters
    ----------

    numbers : list
        The numbers list

    item : int
        The element to search

    Returns
    -------

    index int
        The index of element. Return -1 if element not exists in list
    """
    
    for (index, number) in enumerate(numbers):
        if number == item:
            return index
    
    return -1
