// Array
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }, {'z': 1, 't': 8}));
console.log(_.compact([5, false, null, 15, 20, 0, 1, false, 2, '', 3]));
console.log(_.concat([1,2,3],'a',['b','c','d'],[5, [6]]));

// Collection
_.forEach({ 'a': 1, 'b': 2, 'c': 8, 'd':9 }, function(value, key) {
    console.log(key, value);
});
console.log(_.size({ 'a': 1, 'b': 2, 't': 3 }));

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
];
console.log(_.some(users, { 'user': 'barney', 'active': false }));

// Function
_.delay(function(text) {
    console.log(text);
}, 1000, 'later');


function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
}
   
var object = { 'user': 'fred' };
var bound = _.bind(greet, object, 'hi');

console.log(bound('!'));

// Lang

console.log(_.isArguments(function() { return arguments; }()));
console.log(_.isBoolean(false));
console.log(_.isArray(document.body.children));

// Math 

console.log(_.max([4, 2, 8, 6])); 
console.log(_.min([4, 2, 8, 6]));

// Object 

console.log(_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
console.log(_.pick(object, ['a', 'c']));