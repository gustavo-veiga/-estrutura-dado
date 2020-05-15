cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

enable_testing()

project(estrutura-dados)

set(CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake" ${CMAKE_MODULE_PATH})

option(PROJECT_GAME "This compile project" ON)
option(PROJECT_TASK1 "This compile project task1" ON)
option(PROJECT_TASK2 "This compile project task2" ON)
option(PROJECT_LIST_GUI "This compile project list-gui" ON)

# Lesson Library
add_subdirectory(lesson)

# List Executable
add_subdirectory(list)

# Game Executable
if(PROJECT_GAME)
  add_subdirectory(game)
endif()

# Task1 Executable
if(PROJECT_TASK1)
  add_subdirectory(task1)
endif()

# Task2 Executable
if(PROJECT_LIST_GUI)
  add_subdirectory(task2)
endif()

# List GUI Executable
if(PROJECT_LIST_GUI)
  add_subdirectory(list-gui)
endif()
