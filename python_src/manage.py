from argparse import ArgumentParser
from unittest import TestLoader, runner
from estrutura_dados import pilha_fila

parser = ArgumentParser(prog='Manage')

parser.add_argument(
    'mode',
    type=str,
    help='Modo de execução (runserver|tests)'
)

args = parser.parse_args()


def tests():
    loader = TestLoader()
    tests = loader.discover('tests/')
    testRunner = runner.TextTestRunner()
    testRunner.run(tests)


def pilha_fila_exec():
    pilha_fila.main()


modes = {
    'tests': tests,
    'pilha_fila': pilha_fila_exec
}[args.mode]()
