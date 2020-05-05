cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

set(THREADS_PREFER_PTHREAD_FLAG ON)

# Project "lesson-test"
project(lesson-test LANGUAGES CXX)

# External Libraries
find_package(GTest REQUIRED)
find_package(Threads REQUIRED)

# Vector
add_executable(vector vector.cc)
add_test(NAME vector COMMAND vector)
target_link_libraries(vector PUBLIC Threads::Threads gtest lesson)
