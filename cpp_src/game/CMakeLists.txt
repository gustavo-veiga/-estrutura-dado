cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

# Project "game"
project(game LANGUAGES CXX)

# External Libraries
find_package(glfw3 3.3 REQUIRED)

# Game Executable
file(GLOB_RECURSE GAME_FILES
  ./include/**.h
  ./source/**.cc)
add_executable(${PROJECT_NAME} ${GAME_FILES})
target_include_directories(${PROJECT_NAME} PUBLIC include)
target_link_libraries(${PROJECT_NAME} PUBLIC lesson glfw)
set_target_properties(${PROJECT_NAME} PROPERTIES LINKER_LANGUAGE CXX)
