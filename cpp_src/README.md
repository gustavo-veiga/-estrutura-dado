# Implementação em C++
Este projeto é uma implementação em C++ dos exercícios de Estrutura de Dados.

## Índice
* [Buck](#buck)
* [Compilador C++11](#compilador-c11)
* [Configuração no Windows](#configuração-no-windows)
* [Compilando e Executando](#compilando-e-executando)

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
* Visual C++ 2015 ([veja mais][visual_cpp_status])
* Intel C++ Compiler 14.0 ([veja mais][intel_status])

## Configuração no Windows
### Windows 10
O suporte do Buck para o Windows 10 está atualmente na versão **Beta**.

Para usar o Buck no Windows 10, você precisa garantir que sua instalação do Windows atenda aos seguintes requisitos.

1. Estar executando o Windows 10 compilação 1703 ou superior.
2. Ativar o modo de desenvolvedor no Windows. [Siga estas instruções][windows10_enable_development].
3. Ativar nomes de caminhos longos. O seguinte [artigo do Stack Exchange][windows10_longpaths] consolida informações relevantes.

### Trabalhando com o PowerShell
É assim que você configura o desenvolvimento do PowerShell com C++ para poder usar o Visual Studio Toolchain. Precisamos exportar variáveis ​​de ambiente do Visual Studio no PowerShell, pois isso não é feito por padrão.

1. Instale o [Visual Studio][visual_studio] e verifique se você instalou o VC++.
2. Abra o PowerShell como administrador e execute os seguintes comandos:
    ```
    set-executionpolicy unrestricted
    Install-Module -Name PSCX -AllowClobber
    Install-Module -Name VSSetup -AllowClobber
    Import-VisualStudioVars 2017 amd64
    ```

Agora você pode usar o Visual Studio Compiler e ferramentas como o Buck poderão pegar seu toolchain. Como o `Import-VisualStudioVars 2017 amd64` não está exportando permanentemente as variáveis ​​de ambiente, você precisará executar novamente esse comando em cada nova sessão do PowerShell.

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
[visual_studio]: https://visualstudio.microsoft.com/
[homebrew_fb]: https://github.com/facebook/homebrew-fb
[chocolatey_package]: https://chocolatey.org/packages/buck
[portable_linux]: https://github.com/LoopPerfect/buckaroo/wiki/Installation#linux-1
[portable_macos]: https://github.com/LoopPerfect/buckaroo/wiki/Installation#macos-1
[portable_windows]: https://github.com/LoopPerfect/buckaroo/wiki/Installation#windows-1
[gcc_status]: https://gcc.gnu.org/projects/cxx-status.html#cxx11
[clang_status]: https://clang.llvm.org/cxx_status.html
[intel_status]: https://software.intel.com/en-us/articles/c0x-features-supported-by-intel-c-compiler
[visual_cpp_status]: https://docs.microsoft.com/en-us/cpp/overview/visual-cpp-language-conformance?view=vs-2019
[windows10_enable_development]: https://docs.microsoft.com/en-us/windows/uwp/get-started/enable-your-device-for-development
[windows10_longpaths]: https://superuser.com/questions/1119883/windows-10-enable-ntfs-long-paths-policy-option-missing
