# Project "game"
project(game LANGUAGES CXX)

# External Libraries
find_package(Allegro REQUIRED)

# Game Executable
file(GLOB_RECURSE GAME_FILES
  ./include/**.h
  ./source/**.cc)
add_executable(${PROJECT_NAME} ${GAME_FILES})
target_include_directories(${PROJECT_NAME} PUBLIC include)
target_link_libraries(${PROJECT_NAME} PUBLIC lesson ${ALLEGRO_LIBRARIES})
set_target_properties(${PROJECT_NAME} PROPERTIES LINKER_LANGUAGE CXX)
