#include <lesson/array/queue.h>
#include <lesson/array/stack.h>
#include <lesson/array/vector.h>
#include <iostream>

int main() {
  // Fila
  auto fila = lesson::array::queue(10);
  fila.push(234);
  fila.push(646);
  fila.push(195);
  fila.push(745);
  fila.push(864);
  fila.push(246);

  // Pilha
  auto pilha = lesson::array::stack(10);
  pilha.push(11);
  pilha.push(56);
  pilha.push(96);
  pilha.push(28);
  pilha.push(58);
  pilha.push(24);
  pilha.push(96);
  pilha.push(26);

  // Vector
  auto vetor = lesson::array::vector(20);
  while (!fila.empty() || !pilha.empty()) {
    if (!fila.empty()) {
      vetor.add(fila.pop());
    }
    if (!pilha.empty()) {
      vetor.add(pilha.pop());
    }
  }

  for (int i = 0; i < vetor.end(); i++) {
    std::cout << vetor.get(i) << " ";
  }

  std::cout << std::endl;
  std::cout << "Pressione ENTER para finalizar o programa... ";
  std::cin.get();

  return EXIT_SUCCESS;
}
