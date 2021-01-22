import { HashTable } from './HashTable';

const map = new HashTable();

map.set('id', 0);
map.set('passw', 'some string!');
map.set('loc', [12,4,6,122]);
map.set('country', 'pl');

console.log(map.keys())