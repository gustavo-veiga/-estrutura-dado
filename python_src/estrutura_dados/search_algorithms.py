from .ordering_algorithms import bubble_sort


def binary_search_func(numbers, _min, _max, element):
    # pseudo code from https://pt.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

    if _max < _min:
        return -1
    
    # floor division
    _median = (_max + _min) // 2

    founded = numbers[_median]

    if founded == element:
        return _median

    if founded < element:
        return binary_search_func(
            numbers=numbers,
            _min=_median + 1,
            _max=_max,
            element=element
        )
    
    return binary_search_func(
        numbers=numbers,
        _min=_min,
        _max=_median - 1,
        element=element
    )


def binary_search(numbers: list, item: int) -> int:
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
    _sorted_elements = bubble_sort(numbers=numbers)
    return binary_search_func(
        numbers=_sorted_elements,
        _min=0,
        _max=len(_sorted_elements) - 1,
        element=item
    )


def linear_search(numbers: list, item: int) -> int:
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
