class RandomNumbers {
  constructor(size, min, max) {
    this.elements = new Array(size);
    this.size = size;
    this.min = min;
    this.max = max;
  }

  generate() {
    for (let i = 0; i < this.size; i++) {
      this.elements[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.elements;
  }
}
