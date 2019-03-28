#ifndef LESSON_SORT_H_
#define LESSON_SORT_H_
#include <vector>

namespace lesson {
bool is_sorted(std::vector<int>& vec);
void bubble_sort(std::vector<int>& vec);
void bubble_sort_enhanced(std::vector<int>& vec);
void quick_sort(std::vector<int>& vec, int left, int right);
}  // namespace lesson

#endif
