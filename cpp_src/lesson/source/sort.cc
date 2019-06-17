#include <lesson/sort.h>
#include <lesson/array/vector.h>

void lesson::sort::bubble(lesson::array::vector<int>& vec) {
  for (size_t i = 0; i < vec.end(); i++) {
    for (size_t j = 0; j < vec.end() - i; j++) {
      if (vec[j] > vec[j + 1]) {
        vec.swap(j, j + 1);
      }
    }
  }
  vec.is_sorted = true;
}

void lesson::sort::quick(lesson::array::vector<int>& vec) {
  lesson::sort::quick(vec, 0, vec.end());
  vec.is_sorted = true;
}

void lesson::sort::quick(lesson::array::vector<int>& vec, int left, int right) {
  int tmp;
  int i = left, j = right;
  int pivot = vec[(left + right) / 2];

  while (i <= j) {
    while (vec[i] < pivot) i++;
    while (vec[j] > pivot) j--;
    if (i <= j) {
      tmp = vec[i];
      vec[i] = vec[j];
      vec[j] = tmp;
      i++;
      j--;
    }
  };
  if (left < j) lesson::sort::quick(vec, left, j);
  if (i < right) lesson::sort::quick(vec, i, right);
}
