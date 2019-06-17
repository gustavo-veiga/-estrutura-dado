#include <lesson/gamer.h>

namespace lesson
{
  gamer::gamer(std::string name) {
    this->name_value = name;
  }

  std::string gamer::name() {
    return this->name_value;
  }
} // namespace lesson
