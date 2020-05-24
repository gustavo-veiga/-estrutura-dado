class QueuePriority {
  constructor(size) {
    this.elements = new Array(size);
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
    let element = this.elements[this.first];
    this.first = (this.first + 1) % this.elements.length;
    this.total--;
    return element;
  }

  push(element, priority) {
    const data = { element, priority };
    this.elements[this.last] = data;
    this.last = (this.last + 1) % this.elements.length;
    let actualPosition = this.total;
    for (let i = this.total - 1; i >= 0; i--) {
      if(this.elements[i].priority < priority) {
        this.swap(i, actualPosition--);
      } else {
        break;
      }
    }
    this.total++
  }

  swap(left, right) {
    const x = this.elements[left];
    this.elements[left] = this.elements[right];
    this.elements[right] = x;
  }
}
