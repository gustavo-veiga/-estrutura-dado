cmake_minimum_required(VERSION 3.1)
project(aula)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(includes)

add_executable(binary sources/main.cpp)
add_executable(benchmark_bubble_sort_enhanced benchmarks/bubble_sort_enhanced.cpp)
add_executable(benchmark_bubble_sort benchmarks/bubble_sort.cpp)
add_executable(benchmark_quick_sort benchmarks/quick_sort.cpp)