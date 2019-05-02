#ifndef LINKED_LIST_H
#define LINKED_LIST_H
#include "node.h"

namespace lesson {
namespace linked {
template <typename T>
class list {
 private:
  node* pt_begin;
  node* node_iterator;
  unsigned int count;

 public:
  list();
  ~list();

  // Types
  typedef T* iterator;

  // Operators
  list& operator++(const list<T>&) const;

  // Iterators
  iterator begin() noexcept;
  iterator end() noexcept;

  // Element Access
  node* search_node(int value);

  // Modifiers
  void insert_end(T value);
  void insert_begin(T value);
  void remove_node(T value);

  // Capacity
  bool is_empty();
  unsigned int size();
};
}  // namespace linked
}  // namespace lesson

#include "list.cc"
#endif