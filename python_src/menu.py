from operator import eq


def get_menu_item():
    """
    Print menu and get item from it

    Parameters
    ----------

    Returns
    -------

    choice : str
    """

    print("""
    Escolha uma das opcoes meu jovem Padawan

    1 --> Deseja visualizar o a lista?
    2 --> Realizar Busca Linear por um elemento.
    3 --> Realizar Busca Binaria por um elemento.
    4 --> Ordenar com Bubble Sort.
    5 --> Ordenar com Quick Sort.
    6 --> Excluir um elemento com a lista ordenada.
    7 --> Excluir um elemento com a lista não ordenada.
    8 --> Encerrar :(
    """)

    choice = input("Opcao: ")

    return choice


def show_menu(numbers: list) -> None:
    """
    Generate random numbers, by using list length, start and end

    Parameters
    ----------

    numbers : list
        The numbers list

    Returns
    -------
    """

    choice = get_menu_item()

    return int(choice)
