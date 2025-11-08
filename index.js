import HashMap from './js/HashMap.js';

const test = new HashMap();

console.log('--- Add initial values ---');
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.print();

console.log('--Trigger hashmap growth- --');
test.set('moon', 'silver');
test.print();

console.log('---Update apple, and lion');
test.set('apple', 'UPDATED!!!');
test.set('lion', 'UPDATED!!!');
test.print();

// Test .get()
console.log('Get apple', test.get('apple'));
console.log('Get lion', test.get('lion'));
console.log('Get nothing', test.get('nothing'));

// Test .has()
console.log('Has apple', test.has('apple'));
console.log('Has lion', test.has('lion'));
console.log('Has nothing', test.has('nothing'));

// Test .remove()
console.log('Remove apple', test.remove('apple'));
console.log('Remove lion', test.remove('lion'));
console.log('Remove nothing', test.has('nothing'));
test.print();

// Test .length()
console.log('Length', test.length());

// Test .clear()
test.clear();
console.log('--- After clear ---');
test.print();
