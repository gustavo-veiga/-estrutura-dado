cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

# Project "lesson"
project(lesson LANGUAGES CXX)

# Lesson Library
file(GLOB_RECURSE LESSON
  ./include/**.h
  ./source/**.cc)
add_library(${PROJECT_NAME} STATIC ${LESSON})
target_include_directories(${PROJECT_NAME} PUBLIC include)
target_compile_features(${PROJECT_NAME} PUBLIC cxx_std_11)
set_target_properties(${PROJECT_NAME} PROPERTIES LINKER_LANGUAGE CXX)
