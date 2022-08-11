// closure concept example
// closure is a function that has access to the variables of its outer function even after the outer function has returned
// closure is a function that has access to the variables of its outer function even after the outer function has returned

// example 1
function outerFunction(arg) {
	var outerVar = arg;
	return function innerFunction(innerArg) {
		return outerVar + innerArg;
	};
}

var innerFunction = outerFunction(10);
console.log(innerFunction(20)); // 30
console.log(innerFunction(30)); // 50
