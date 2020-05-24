class StackOperations extends Stack {
  // Unary Operations
  dec2() {
    let top = this.pop();
    top -= 2;
    this.push(top);
  }

  add3() {
    let top = this.pop();
    top += 3;
    this.push(top);
  }

  // Binary Operations
  add() {
    if(this.size < 2) {
      undefined;
    }
    let x = this.pop();
    let y = this.pop();
    this.push(x + y);
  }

  sub() {
    if(this.size < 2) {
      return undefined;
    }
    let x = this.pop();
    let y = this.pop();
    this.push(x - y);
  }

  mpy() {
    if (this.size < 2) {
      return undefined;
    }
    let x = this.pop();
    let y = this.pop();
    this.push(x * y);
  }

  div() {
    if (this.size < 2) {
      return undefined;
    }
    let x = this.pop();
    let y = this.pop();
    this.push(x / y);
  }
}
