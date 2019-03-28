cmake_minimum_required(VERSION 3.1)
project(aula)

# Settings
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Directories
set(SOURCES ${PROJECT_SOURCE_DIR}/sources)
set(BENCHMARKS ${PROJECT_SOURCE_DIR}/benchmarks)

# Headers
file(GLOB HEADERS "includes/lesson/*")

include_directories(includes)

add_executable(binary ${SOURCES}/main.cpp  ${HEADERS})
add_executable(benchmark_sort ${BENCHMARKS}/benchmark_sort.cpp ${HEADERS})
