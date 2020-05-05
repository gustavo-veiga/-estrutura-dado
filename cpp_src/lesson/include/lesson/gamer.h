#ifndef LESSON_GAMER_H_
#define LESSON_GAMER_H_
#include <string>

namespace lesson {
class gamer {
 private:
  std::string name_value;
 public:
  gamer(std::string name);
  std::string name();
};
}  // namespace lesson

#endif
