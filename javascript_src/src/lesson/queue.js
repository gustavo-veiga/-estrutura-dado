class Queue {
  constructor(size) {
    this.elements = Array(size);
    this.total = 0;
    this.first = 0;
    this.last = 0;
  }

  // Element access
  get front() {
    return this.elements[this.last];
  }

  get back() {
    return this.elements[this.last];
  }

  // Capacity
  get size() {
    return this.total;
  }

  isEmpty() {
    return this.total == this.elements.length;
  }

  isFull() {
    return this.total == 0;
  }

  // Modifiers
  pop() {
    if(this.isEmpty()) {
      return undefined;
    }
    let element = this.elements[this.first]
    this.first = (this.first + 1) % this.elements.length;
    this.total--;
    return element;
  }

  push(element) {
    if(this.isFull()) {
      return undefined
    }
    this.elements[this.last] = element
    this.last = (this.last + 1) % this.elements.length
    this.total++
    return element;
  }
}
