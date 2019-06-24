#ifndef LESSON_TREE_BSEARCH_H_
#define LESSON_TREE_BSEARCH_H_
#include <lesson/node/binary.h>

namespace lesson {
namespace tree {
template <typename T>
class bsearch {
 private:
  lesson::node::binary<T> root;
  void free_r(lesson::node::binary<T> r);
  void in_order_r(lesson::node::binary<T> r);
  void pre_order_r(lesson::node::binary<T> r);
  void post_order_r(lesson::node::binary<T> r);
  void push_r(T element, lesson::node::binary<T> r);

 public:
  bsearch(T element);
  ~bsearch();

  // Element Access
  void in_order();
  void pre_order();
  void post_order();

  // Modifiers
  void push(T element);
  void pop(T element);
};
}  // namespace tree
}  // namespace lesson

#endif
