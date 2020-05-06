cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

enable_testing()

project(estrutura-dados)

# Lesson Library
add_subdirectory(lesson)

# List Executable
add_subdirectory(list)

# List GUI Executable
add_subdirectory(list-gui)

# Game Executable
add_subdirectory(game)

# Task1 Executable
add_subdirectory(task1)

# Task2 Executable
add_subdirectory(task2)
