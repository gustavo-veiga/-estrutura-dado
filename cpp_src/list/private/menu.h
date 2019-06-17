#ifndef LIST_MENU_H
#define LIST_MENU_H
#include <lesson/array/vector.h>

namespace list {
struct menu {
  static int show();
  static void show_all(lesson::array::vector<int> &vec);
  static void linear_search(lesson::array::vector<int> &vec);
  static void binary_search(lesson::array::vector<int> &vec);
  static void bubble_sort(lesson::array::vector<int> &vec);
  static void quick_sort(lesson::array::vector<int> &vec);
  static void remove_element(lesson::array::vector<int> &vec);
  static void exit();
  static void invalid();
};
}  // namespace list

#endif
