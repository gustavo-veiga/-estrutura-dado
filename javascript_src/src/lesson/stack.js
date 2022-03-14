class Stack {
    constructor(size) {
        this.topValue = -1;
        this.elements = new Array(size);
    }

    // Element Access
    get top() {
        return !this.isEmpty
            ? this.elements[this.topValue]
            : undefined;
    }

    // Capacity
    get size() {
        return !this.isEmpty()
            ? this.topValue
            : 0;
    }

    isEmpty() {
        return this.topValue === -1;
    }

    isFull() {
        return this.topValue >= this.elements.length - 1;
    }

    // Modifiers
    pop() {
        return !this.isEmpty()
            ? this.elements[this.topValue--]
            : undefined;
    }

    push(element) {
        return !this.isFull()
            ? this.elements[++this.topValue] = element
            : undefined;
    }
}
