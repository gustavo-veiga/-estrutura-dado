cmake_minimum_required(VERSION 3.1...3.15)

if(${CMAKE_VERSION} VERSION_LESS 3.12)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
endif()

# Project "lesson-test"
project(lesson-test LANGUAGES CXX)

find_package(Catch2 REQUIRED)

# Vector
add_executable(vector vector.cc)
target_link_libraries(vector PUBLIC Catch2::Catch2 lesson)

include(CTest)
include(Catch)
catch_discover_tests(vector)
