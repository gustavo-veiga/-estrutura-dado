#ifndef LESSON_TREE_BINARY_H_
#define LESSON_TREE_BINARY_H_
#include <lesson/node/binary.h>

namespace lesson {
namespace tree {
template <typename T>
class binary {
 private:
  lesson::node::binary<T> root;
 public:
  binary();
  ~binary();
};
}  // namespace tree
}  // namespace lesson

#endif
