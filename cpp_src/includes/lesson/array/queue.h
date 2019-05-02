#ifndef QUEUE_H_
#define QUEUE_H_

namespace lesson {
namespace array {
class queue {
 private:
  int *data;
  int size_type;
  int first_type;
  int last_type;
  int total_type;

 public:
  queue(int size);
  ~queue();

  // Element Access
  int back();
  int front();

  // Modifiers
  int pop();
  void push(int element);
  void swap(int left, int right);

  // Capacity
  int size();
  bool full();
  bool empty();
};
}  // namespace array
}  // namespace lesson

#endif
