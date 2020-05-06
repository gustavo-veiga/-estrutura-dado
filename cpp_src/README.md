# Implementação em C++
Este projeto é uma implementação em C++ dos exercícios de Estrutura de Dados.

## Índice
* [CMake](#cmake)
* [Compilador C++11](#compilador-c11)
* [Compilando e Executando](#compilando-e-executando)

## CMake
O [CMake][cmake] é uma família de ferramentas de código aberto e plataforma cruzada, projetada para criar, testar e empacotar software. O CMake é usado para controlar o processo de compilação de software usando arquivos simples de configuração independentes de plataforma e compilador e gerar makefiles e espaços de trabalho nativos que podem ser usados no ambiente do compilador de sua escolha. O conjunto de ferramentas do CMake foi criado pela Kitware em resposta à necessidade de um poderoso ambiente de construção de plataforma cruzada para projetos de código aberto, como ITK e VTK.

Você pode instalar o CMake de várias maneiras, então aqui está uma visão geral das opções para ajudá-lo a decidir:

* Linux
  * Diretamente do site oficial [aqui][cmake_linux].
  * Snap:
    ```
    sudo snap install cmake --classic
    ```
  * Debian e derivados:
    ```
    sudo apt install cmake
    ```
  * Arch e derivados:
    ```
    sudo pacman -Syu cmake
    ```
  * Fedora:
    ```
    sudo dnf install cmake
    ```
* macOS
  * Diretamente do site oficial [aqui][cmake_macos].
  * Homebrew:
    ```
    brew install cmake
    ```
  * MacPorts:
    ```
    sudo port install
    ```
* Windows
  * Diretamente do site oficial [aqui][cmake_windows].
  * Chocolatey:
    ```
    choco install cmake
    ```
  * Scoop:
    ```
    scoop bucket add extras
    scoop install cmake
    ```

Instruções abrangentes são [fornecidas pelo Facebook](https://buckbuild.com/setup/getting_started.html).

## Compilador C++11
A Implementação completa do C++11 nos compiladores está disponível nas seguintes versões ou posteriores:
* GCC 4.8.1 ([veja mais][gcc_status])
* Clang 3.3 ([veja mais][clang_status])
* Visual C++ 2015 ([veja mais][visual_cpp_status])
* Intel C++ Compiler 14.0 ([veja mais][intel_status])

## Compilando
As ferramentas de construção e compilação variam bastante para cada plataforma, aqui exemplificarei algumas.

### Linux

### macOS

### Windows

[cmake]: https://cmake.org/
[cmake_linux]:https://github.com/Kitware/CMake/releases/download/v3.17.2/cmake-3.17.2-Linux-x86_64.sh
[cmake_macos]: https://github.com/Kitware/CMake/releases/download/v3.17.2/cmake-3.17.2-Darwin-x86_64.dmg
[cmake_windows]: https://github.com/Kitware/CMake/releases/download/v3.17.2/cmake-3.17.2-win64-x64.msi
[gcc_status]: https://gcc.gnu.org/projects/cxx-status.html#cxx11
[clang_status]: https://clang.llvm.org/cxx_status.html
[intel_status]: https://software.intel.com/en-us/articles/c0x-features-supported-by-intel-c-compiler
[visual_cpp_status]: https://docs.microsoft.com/en-us/cpp/overview/visual-cpp-language-conformance?view=vs-2019
