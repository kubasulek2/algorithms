"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HashTable_1 = require("./HashTable");
const map = new HashTable_1.HashTable();
map.set('id', 0);
map.set('passw', 'some string!');
map.set('loc', [12, 4, 6, 122]);
map.set('country', 'pl');
console.log(map.keys());
//# sourceMappingURL=index.js.map