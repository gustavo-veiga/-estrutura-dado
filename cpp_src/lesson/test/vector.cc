#define CATCH_CONFIG_MAIN
#include <lesson/array/vector.h>

#include <catch2/catch.hpp>

SCENARIO("vectors can be sized and resized", "[vector]") {
  GIVEN("A vector with some items") {
    lesson::array::vector<int> v{1, 2, 3};

    REQUIRE(v.size() == 3);
    REQUIRE(v.capacity() >= 10);

    WHEN("the add is increased") {
      for (size_t i = 0; i < 10; i++) {
        v.push(i);
      }
      THEN("the size and capacity change") {
        REQUIRE(v.size() == 13);
        REQUIRE(v.capacity() >= 20);
      }
    }
  }
}
