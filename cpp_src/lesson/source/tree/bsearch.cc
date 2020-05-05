#include <lesson/tree/bsearch.h>
#include <iostream>

namespace lesson {
namespace tree {
/*
 * Private Methods
 */
template <typename T>
void bsearch<T>::free_r(lesson::node::binary<T> r) {
  if (r != nullptr) {
    this->free_r(r->left);
    this->free_r(r->right);
    delete r;
  }
}

template <typename T>
void bsearch<T>::in_order_r(lesson::node::binary<T> r) {
  if (r != nullptr) {
    this->in_order_r(r->left);
    std::cout << r->element;
    this->in_order_r(r->right);
  }
}

template <typename T>
void bsearch<T>::pre_order_r(lesson::node::binary<T> r) {
  if (r != nullptr) {
    std::cout << r->element;
    this->pre_order_r(r->left);
    this->pre_order_r(r->right);
  }
}

template <typename T>
void bsearch<T>::post_order_r(lesson::node::binary<T> r) {
  if (r != nullptr) {
    this->post_order_r(r->left);
    this->post_order_r(r->right);
    std::cout << r->element;
  }
}

template <typename T>
void bsearch<T>::push_r(T element, lesson::node::binary<T> r) {
  if (r->element > element) {
    if (r->left != nullptr) {
      this->push_r(element, r->left);
    } else {
      r->left = lesson::node::binary<T>(element);
    }
  } else {
    if (r->right != nullptr) {
      this->push_r(element, r->right);
    } else {
      r->right = lesson::node::binary<T>(element);
    }
  }
}

/*
 * Constructors
 */
template <typename T>
bsearch<T>::bsearch(T element) {
  this->root = lesson::node::binary<T>(element);
}

/*
 * Destructors
 */
template <typename T>
bsearch<T>::~bsearch() {
  this->free_r(this->root);
}

/*
 * Public Methods
 */

// Element Access
template <typename T>
void bsearch<T>::in_order() {
  this->in_order_r(this->root);
}

// Element Access
template <typename T>
void bsearch<T>::pre_order() {
  this->pre_order_r(this->root);  
}

// Element Access
template <typename T>
void bsearch<T>::post_order() {
  this->post_order_r(this->root);  
}

// Modifiers
template <typename T>
void bsearch<T>::push(T element) {
  this->push_r(element, this->root);
}
}  // namespace tree
}  // namespace lesson
