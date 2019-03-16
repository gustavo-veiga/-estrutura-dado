# estrutura-dados

O Objetivo deste repositório é ser colaborativo nas aulas de Estrutura de Dados, na Universidade Unigranrio. Os algoritmos aqui implementados, o serão nas linguagens Python e Javascript.

## Rodando os scripts em Python (Linux)

Antes de mais nada, é necessário ter o virtualenv instalado na máquina. Após instalado, execute os comandos a seguir

```sh
# para saber o local da instalação do python3
which python3

virtualenv --python=<python3 path> .

source bin/activate
```

Após isso, basta executar o script main.py

```sh
python main.py
```

### Tests

Para rodar os testes do código Python, basta:

```sh
python manage.py tests
```
