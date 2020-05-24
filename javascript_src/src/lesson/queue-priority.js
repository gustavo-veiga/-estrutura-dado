class QueuePriority extends Queue {
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
