# Implementação em C++
Este projeto é uma implementação em C++ dos exercícios de Estrutura de Dados

Requerimentos Gerais
* Ferramentas de Compilação do Sistema Operacional
* Compilador com suporte a C++11
* CMake

## Compilação
### Linux (GCC)
Necessita do [GCC 4.8.1][1] (onde o C++11 é completamente implementado) ou superior, make e cmake.

No Debian e derivados, instale o `g++`, `cmake` e o `make` ou `ninja-build`
```sh
sudo apt install g++ cmake make
```
```sh
sudo apt install g++ cmake ninja-build
```

Criando arquivos de compilação
```sh
cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=MINSIZEREL -H. -Bbuild
```

Ou utilizando o Ninja Build, que é muito mais rápido que o velho GNU Make
```sh
cmake -G "Ninja" -DCMAKE_BUILD_TYPE=MINSIZEREL -H. -Bbuild
```

Criando arquivos binários
```sh
cmake --build build
```

Execute
```sh
./build/binary
```

[1]:[https://gcc.gnu.org/projects/cxx-status.html#cxx11]
