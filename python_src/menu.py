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

    1 --> Deseja visualizar o a lista ?
    2 --> Realizar busca linear por um elemento.
    3 --> Realizar busca Binaria.
    4 --> Ordenar com bubble sorte.
    5 --> Ordenar Com  Shell sorte.
    6 --> Excluir um elemento.
    7 --> Encerrar :(
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
