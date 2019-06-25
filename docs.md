# Resumo da matéria e conceitos de Estrutura de Dados

Este documento nos serve de fonte de estudo para a matéria de Estrutura de Dados e ele é livremente inspirado nos conteúdos da Universidade Unigranrio

## O que é estrutura de dados?

## Análise de Complexidade de Algorítmo

## Listas Lineares

Conjunto finito de n elementos que possuem uma propriedade estrutural entre as posições relativas dos seus elementos.

Uma lista linear, é chamada assim por "guardar" elementos de mesma propriedade, como por exemplo, uma conjunto de nomes, um conjunto de objetos da classe Pessoa, e por ai vai.

Podemos fazer inúmeras operações em listas, mas as principais e fundamentais são: **inserção** e **remoção**.

Dentro do conceito de Lista Linear, temos duas Estruturas muito faladas, as filas e pilhas:

### Filas

Afirmamos que uma fila é uma estrutura do tipo FIFO (First In, First Out), em que o primeiro elemento que entra, será o primeiro a sair. Portanto, numa fila, as operações de inserção e remoção ficam assim:

* **Inserção**: eu insiro no início da fila
* **Remoção**: eu removo, o primeiro elemento

Por questões de complexidade, se define ser melhor trabalharmos com dois ponteiros na fila: um para guardar o primeiro elemento e outro para guardar o segundo.

### Pilhas

Afirmamos que uma pilha é uma estrutura do tipo LIFO (Last in, First Out), em que o último elemento que entrar, será o primeiro a sair. As operações, portanto, ficam assim:

* **Inserção**: eu insiro no final da pilha
* **Remoção**: eu removo o último elemento da pilha

Por fim, ela pode ser dividida de acordo com a aloção em memória em:

### Implementação Sequencial

* Utiliza o conceito de Vetor

**A desenvolver...**

### Implementação encadeada

* Utiliza nós endereçados. Nós podem ser objetos que possuem um propriedade armazenando o valor, e outra armazenando um **ponteiro** para o próximo elemento, ou também, para o elemento anterior.
* Possui **vantagem** na inserção, pois a lista vai consumindo memória sobre demanda.
* Possui desvantagem na busca por um elemento, pois como os elementos não estão ocupando um espaço contínuo, será necessário percorrer a lista inteira para buscar um *n-ésimo* elemento.

#### Tipos de listas

##### Lista Simplesmente Encadeada

Nessa lista, o nó armazena somente o ponteiro para o próximo elemento. Ela pode ser circular ou não. Numa lista circular, o último elemento aponta para o primeiro

##### Lista Duplamente Encadeada

Tem o mesmo funcionamento da lista de cima, se diferenciando, contudo, em que o nó armazena o ponteiro também para o elemento anterior. Numa lista duplamente encadeada circular, o último elemento aponta para o primeiro e o primeiro para o último.

##### Lista Encadeada do Tipo Pilha

É a implementação encadeada da estrutura pilha

##### Lista Encadeada do Tipo Fila

É a implementação encadeada da estrutura fila

## Árvores

É uma estrutura formada por um conjunto T de nós. Entende-se por nó, um elemento que possui uma chave e ***n*** ponteiros para cada um dos nós subsequentes a ele. O primeiro nó da árvore é denominado raiz. Quando um nó não possui nenhum "filho", podemos afirmar que ele é uma folha.

Uma árvore pode ser classificada em:

* **binária**: quando seus nós possuem até 2 ligações;
* **n-ária**: quando seus nós possuem 2 ou n ligações;

As árvores possuem algumas propriedades:

* **nível**: é a profundidade de um nó na árvore
* **altura**: é distância até a folha mais distante da raiz

### Árvore binária

São árvores em que seus nós podem possuir até dois filhos. Podem ser:

* **Estritamente Binária**: Cada nó tem exatamente zero ou dois filhos.
* **Binária Completa**: Todos os níveis possuem exatamente dois nós,
exceto o penúltimo e último níveis.
* **Binária Cheia**: Todos os níveis possuem dois nós, exceto o
último (nós folhas).

Toda árvore cheia é completa e estritamente binária, mas nem toda árvore completa é cheia
e estritamente binária, e nem toda árvore estritamente binária é cheia e completa.

#### Fórmulas para Calcular o Número de Nós nas Árvores Binárias
* Número de nós máximo em um nível ***n***:
  * Para o nó raiz no nível 0: 2 ^ n.
  * Para o nó raiz no nível 1: 2 ^ (n - 1).
* Número de nós até um nível ***n***:
  * Para o nó raiz no nível 0: 2 ^ (n + 1) - 1
  * Para o nó raiz no nível 1: 2 ^ n - 1
* Número mínimo de nós até um nível ***n***:
  * Para o nó raiz no nível 0: n + 1
  * Para o nó raiz no nível 1: n

#### Percursos em árvore binária

##### Em Pré-ordem

1. Visito a raiz
2. Percorro a subárvore esquerda em pré-ordem
3. Percorro a subárvore direita em pré-ordem

##### Em Pós-ordem

1. Percorro a subárvore esquerda em pós-ordem
2. Percorro a subárvore direita em pós-ordem
3. Visito a raiz

##### Em Ordem Simétrica (Em Ordem):

1. Percorro a subárvore esquerda em ordem simétrica
2. Visito a raiz
3. Percorro a subárvore direita em ordem simétrica

##### Em nível ou em profundidade

1. Visito os nós em cada nível, da esquerda para a direita
