cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

# Project "task2"
project(task2 LANGUAGES CXX)

# List Executable
file(GLOB_RECURSE TASK2_FILES
  ./include/**.h
  ./source/**.cc)
add_executable(${PROJECT_NAME} ${TASK2_FILES})
target_include_directories(${PROJECT_NAME} PUBLIC include)
target_link_libraries(${PROJECT_NAME} PUBLIC lesson)
set_target_properties(${PROJECT_NAME} PROPERTIES LINKER_LANGUAGE CXX)
 
