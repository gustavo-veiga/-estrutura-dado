#define CATCH_CONFIG_MAIN
#include <lesson/array/vector.h>

#include <catch2/catch.hpp>

SCENARIO("vectors can be sized and resized", "[vector]") {
  GIVEN("A vector with some items") {
    auto v = lesson::array::vector<int>(5);

    REQUIRE(v.size() == 0);
    REQUIRE(v.capacity() >= 5);

    WHEN("the add is increased") {
      for (size_t i = 0; i < 10; i++) {
        v.push(i);
      }
      THEN("the size and capacity change") {
        REQUIRE(v.size() == 10);
        REQUIRE(v.capacity() >= 10);
      }
    }
  }
}
