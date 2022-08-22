'use strict'

const obj = {
	name: 'John',
	age: 30,
}

const newObj = Object.freeze(obj)
newObj.age = 40 // throws an error Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'
