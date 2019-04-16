#ifndef QUEUE_H_
#define QUEUE_H_

namespace lesson {
class queue {
 private:
  int *data;
  int size;
  int first;
  int last;
  int total;
 public:
  queue(int size);
  ~queue();
  void insert(int element);
  int remove();
  bool is_empty();
  bool is_full();
};
}  // namespace lesson

#endif
