#include "sort.h"
#include "vector.h"

void lesson::sort::bubble(lesson::vector& vec) {
  for (int i = 0; i < vec.end(); i++) {
    for (int j = 0; j < vec.end() - i; j++) {
      if (vec.get(j) > vec.get(j + 1)) {
        vec.swap(j, j + 1);
      }
    }
  }
  vec.is_sorted = true;
}

void lesson::sort::quick(lesson::vector& vec) {
  lesson::sort::quick(vec, 0, vec.end());
  vec.is_sorted = true;
}

void lesson::sort::quick(lesson::vector& vec, int left, int right) {
  int tmp;
  int i = left, j = right;
  int pivot = vec.get((left + right) / 2);

  while (i <= j) {
    while (vec.get(i) < pivot) i++;
    while (vec.get(j) > pivot) j--;
    if (i <= j) {
      tmp = vec.get(i);
      vec.set(i, vec.get(j));
      vec.set(j, tmp);
      i++;
      j--;
    }
  };
  if (left < j) lesson::sort::quick(vec, left, j);
  if (i < right) lesson::sort::quick(vec, i, right);
}
