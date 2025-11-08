import Node from './Node.js';

class HashMap {
  #loadFactor = 0.75;
  #capacity = 16;
  #buckets = new Array(16).fill(null);
  #size = 0;

  #hash(key, capacity) {
    let hashCode = 0;

    const PRIME_NUMBER = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  #resize() {
    const oldBuckets = this.#buckets;
    this.#capacity *= 2;
    this.#buckets = new Array(this.#capacity).fill(null);
    this.#size = 0;

    for (const head of oldBuckets) {
      let cur = head;
      while (cur !== null) {
        this.set(cur.key, cur.value);
        cur = cur.nextNode;
      }
    }
  }

  set(key, value) {
    if (typeof key !== 'string') {
      throw new TypeError('HashMap only supports string keys.');
    }

    // Check and resize at the start rather than at the end, to avoid re-inserting the newly inserted node.
    if (this.#size + 1 > this.#capacity * this.#loadFactor) {
      this.#resize();
    }

    const hashCode = this.#hash(key, this.#capacity);
    const newNode = new Node(key, value);
    const head = this.#buckets[hashCode];

    // If the bucket is empty, add a node, and make it the head of the linked list.
    if (head === null) {
      this.#buckets[hashCode] = newNode;
      this.#size++;
    } else {
      // If there's at least 1 node in the bucket, traverse the linked list.
      let cur = head;
      while (cur !== null) {
        // If key matches a node's key, update its node's value.
        if (cur.key === key) {
          cur.value = value;
          return;
        }
        // If key doesn't match a node's key. Append the new node at the end of the linked list.
        if (cur.nextNode === null) {
          cur.nextNode = newNode;
          this.#size++;
          return;
        }
        cur = cur.nextNode;
      }
    }
  }

  get(key) {
    const hashCode = this.#hash(key, this.#capacity);
    let cur = this.#buckets[hashCode];
    while (cur !== null) {
      if (cur.key === key) {
        return cur.value;
      }
      cur = cur.nextNode;
    }
    return null;
  }

  print() {
    console.log('--- HashMap Debug ---');
    console.log(`Size: ${this.#size}, Capacity: ${this.#capacity}`);
    console.log();
    for (let i = 0; i < this.#capacity; i++) {
      let cur = this.#buckets[i];
      const bucket = [];
      while (cur !== null) {
        bucket.push(`(${cur.key}: ${cur.value})`);
        cur = cur.nextNode;
      }

      // Show the chain ending with null
      if (bucket.length > 0) {
        console.log(`[${i}] ${bucket.join(' -> ')} -> null`);
      } else {
        console.log(`[${i}] null`);
      }
    }
    console.log();
    console.log('--- HashMap Debug End ---');
  }
}

export default HashMap;
