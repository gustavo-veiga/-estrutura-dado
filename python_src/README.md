# estrutura-dados

## Rodando os scripts em Python (Ambiente Linux)

Antes de mais nada, é recomendado ter o [virtualenv](https://pythonacademy.com.br/blog/python-e-virtualenv-como-programar-em-ambientes-virtuais) instalado na máquina. Após instalado, execute os comandos a seguir

```sh
# para saber o local da instalação do python3
which python3

# este comando gera os arquivos necessários à criação do ambiente virtual
virtualenv --python=<python3 path> .

# este comando cria um ambiente virtual com a versão 3 do Python limpa para ser usada
source bin/activate
```

É importante destacar, que o uso do virtualenv não é obrigatório, mas recomendado. Como este código segue a filosofia do [just python](https://justpython.style/manifesto/), é possível executá-lo com a versão 3.x do Python em seu sistema operacional, sem a necessidade do virtualenv.

Após isso, basta executar o script main.py para abrir a aplicação de linha de comando

```sh
# para o código dos algorítmos de ordenação, exclusão e filtro
python manage.py algorithms

# para o código das estruturas de dados
python manage.py structs

# para o código da Tarefa 1
python manage.py tarefa_1

# para o código da Tarefa 2
python manage.py tarefa_2
```

### Tests

Para rodar os testes do código Python, basta:

```sh
python manage.py tests
```
