const Set = require('../source/set')

var setA = new Set(); 
setA.add(1); 
setA.add(2);
var setB = new Set(); 
setB.add(1); 
setB.add(2); 
setB.add(3);
var setC = new Set(); 
setC.add(2); 
setC.add(3); 
setC.add(4);
console.log(setA.subset(setB)); 
console.log(setA.subset(setC));