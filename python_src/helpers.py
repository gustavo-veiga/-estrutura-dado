from random import randint


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
