Function.prototype.newCall = function (obj, ...args) {
  obj.reference = this;
  obj.reference(...args);
};

Function.prototype.newApply = function (obj, args) {
  obj.reference = this;
  obj.reference(...args);
};

Function.prototype.newBind = function (obj) {
  obj.reference = this;
  return function(...args){
    obj.reference(...args);
  }
};

function showNameAge(a, b) {
  console.log(`${this.name} and ${this.age}. Number: ${a}, color: ${b}`);
}
const obj1 = {
  name: 'Kumar',
  age: 12,
};

const obj2 = {
  name: 'david',
  age: 23,
};

showNameAge.newCall(obj1, 7, 'green'); 
showNameAge.newApply(obj2, [4, 'red']);
let foo = showNameAge.newBind(obj1);
foo(1,"blue");

**********CONSOLE*********************
//Kumar and 12. Number: 7, color: green
//david and 23. Number: 4, color: red
//Kumar and 12. Number: 1, color: blue
