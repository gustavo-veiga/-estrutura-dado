# Implementação em C++
Este projeto é uma implementação em C++ dos exercícios de Estrutura de Dados.

## Requisitos de Compilação
* [Buck](#buck)
* [Compilador C++11](#compilador-c++11)

## Buck
[Buck][buck] é um sistema de construção desenvolvido e usado pelo Facebook. Ele foi projetado para construir pequenos módulos reutilizáveis, consistindo de código e recursos.

Você pode instalar o Buck de várias maneiras, então aqui está uma visão geral das opções para ajudá-lo a decidir:

* Linux
  * Pacote Debian (veja os [lançamentos do Buck][buck_releases])
  * Linuxbrew (use [este tap][homebrew_fb])
  * Portátil (mantido pelo projeto [Buckaroo][buckaroo], use [este guia][portable_linux])
* macOS
  * Homebrew (use [este tap][homebrew_fb])
  * Portátil (mantido pelo projeto [Buckaroo][buckaroo], use [este guia][portable_macos])
* Windows
  * Chocolatey (use [este pacote Chocolatey][chocolatey_package])
  * Portátil (mantido pelo projeto [Buckaroo][buckaroo], use [este guia][portable_windows])

Instruções abrangentes são [fornecidas pelo Facebook](https://buckbuild.com/setup/getting_started.html).

## Compilador C++11
A Implementação completa do C++11 nos compiladores está disponível nas seguintes versões ou posteriores:
* GCC 4.8.1 ([veja mais][gcc_status])
* Clang 3.3 ([veja mais][clang_status])
* Intel C++ Compiler 14.0 ([veja mais][intel_status])
* Visual Studio 2015 ([veja mais][visual_studio_status])

## Compilando e Executando
Os binários encontram-se em `buck-out/gen/<nome do executável>`

Primeira atividade
```
buck run :list
```

TDE Tarefa 1
```
buck run :task1
```

TDE Tarefa 2
```
buck run :task2
```

Jogo de Cartas
```
buck run :game
```

[buck]: https://buck.build
[buck_releases]: https://github.com/facebook/buck/releases
[buckaroo]: https://buckaroo.pm/
[homebrew_fb]: https://github.com/facebook/homebrew-fb
[chocolatey_package]: https://chocolatey.org/packages/buck
[portable_linux]: https://github.com/LoopPerfect/buckaroo/wiki/Installation#linux-1
[portable_macos]: https://github.com/LoopPerfect/buckaroo/wiki/Installation#macos-1
[portable_windows]: https://github.com/LoopPerfect/buckaroo/wiki/Installation#windows-1
[gcc_status]: https://gcc.gnu.org/projects/cxx-status.html#cxx11
[clang_status]: https://clang.llvm.org/cxx_status.html
[intel_status]: https://software.intel.com/en-us/articles/c0x-features-supported-by-intel-c-compiler
[visual_studio_status]: https://docs.microsoft.com/en-us/cpp/overview/visual-cpp-language-conformance?view=vs-2019
