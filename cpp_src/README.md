# Implementação em C++
Este projeto é uma implementação em C++ dos exercícios de Estrutura de Dados

Requerimentos Gerais
* Compilador com suporte a C++11
* CMake

## Compilação
### Linux (GCC)
Necessita do [GCC 4.8.1][1] (onde o C++11 é completamente implementado) ou superior, make e cmake.

No Ubuntu, instale o `g++`, `make` e o `cmake`
```sh
sudo apt install g++ make cmake
```

Crie um diretório `build` para a compilação
```sh
mkdir build && cd $_
```

Execute o CMake e compile
```sh
cmake .. && make
```

Execute
```sh
./binary
```

[1]:[https://gcc.gnu.org/projects/cxx-status.html#cxx11]