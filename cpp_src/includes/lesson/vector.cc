#include "vector.h"
#include <cstdlib>
#include <utility>

lesson::vector::vector(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::malloc(this->size * sizeof(int)));
}

lesson::vector::~vector() { std::free(this->data); }

void lesson::vector::add(int element) {
  this->data[this->count] = element;
  this->count++;
}

void lesson::vector::set(int index, int element) {
  if (index < this->count) {
    this->data[index] = element;
  }
}

int lesson::vector::get(int index) {
  if (index < this->count) {
    return this->data[index];
  }
}

void lesson::vector::remove(int index) {
  if (index < this->count) {
    this->swap(index, this->end());
    this->data[this->end()] = NULL;
    this->count--;
  }
}

void lesson::vector::swap(int left, int right) {
  if (left < this->count && right < this->count) {
    std::swap(this->data[left], this->data[right]);
  }
}

int lesson::vector::end() { return this->count - 1; }
