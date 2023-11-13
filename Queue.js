/**
 * This is an array implementation of a Queue,
 * which is a FIFO linear data structure.
 * @template T - the type of element stored in the queue
 */
class Queue {
  /**
   * Creates a Queue with optional initial elements.
   * @param {T[]} arr
   */
  constructor(arr = []) {
    this.arr = arr;
  }

  /**
   * Adds `element` to the back of the queue
   * @param {T} element
   */
  enqueue(element) {
    // TODO
    this.arr.push(element)
  }

  /**
   * Removes and returns the element at the front of the queue,
   * or `undefined` if the queue is empty.
   * @returns {T|undefined}
   */
  dequeue() {
    // TODO
    return this.arr.shift();
  }

  /**
   * Returns the element at the front of the queue _without_ removing it,
   * or undefined if the queue is empty.
   * @returns {T|undefined}
   */
  peek() {
    // TODO
    return this.arr[0];
  }

  /** @returns {boolean} whether the queue is empty. */
  isEmpty() {
    // TODO
    return this.arr.length === 0;
  }

  /** @returns {number} the number of elements in the queue */
  size() {
    // TODO
    return this.arr.length;
  }
}

module.exports = Queue;
