import HashMap from '../js/HashMap.js';

const hashmap = new HashMap();

console.log('--- Add initial values ---');
hashmap.set('apple', 'red');
hashmap.set('banana', 'yellow');
hashmap.set('carrot', 'orange');
hashmap.set('dog', 'brown');
hashmap.set('elephant', 'gray');
hashmap.set('frog', 'green');
hashmap.set('grape', 'purple');
hashmap.set('hat', 'black');
hashmap.set('ice cream', 'white');
hashmap.set('jacket', 'blue');
hashmap.set('kite', 'pink');
hashmap.set('lion', 'golden');
hashmap.print();

console.log('--Trigger hashmap growth- --');
hashmap.set('moon', 'silver');
hashmap.print();

console.log('---Update apple, and lion');
hashmap.set('apple', 'UPDATED!!!');
hashmap.set('lion', 'UPDATED!!!');
hashmap.print();

// Test .get()
console.log('Get apple', hashmap.get('apple'));
console.log('Get lion', hashmap.get('lion'));
console.log('Get nothing', hashmap.get('nothing'));

// Test .has()
console.log('Has apple', hashmap.has('apple'));
console.log('Has lion', hashmap.has('lion'));
console.log('Has nothing', hashmap.has('nothing'));

// Test .remove()
console.log('Remove apple', hashmap.remove('apple'));
console.log('Remove lion', hashmap.remove('lion'));
console.log('Remove nothing', hashmap.has('nothing'));
hashmap.print();

// Test .length()
console.log('Length', hashmap.length());

// Test .keys()
console.log('Keys', hashmap.keys());

// Test .values()
console.log('Values', hashmap.values());

// Test .clear()
hashmap.clear();
console.log('--- After clear ---');
hashmap.print();
