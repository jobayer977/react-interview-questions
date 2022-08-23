# Frequently Asked JavaScript Interview Questions 
 ### Resources 
- [reactjs-interview-questions - by sudheerj](https://github.com/sudheerj/reactjs-interview-questions#what-is-react) 
 

 ## Table of Contents

- [1 Why Not To Modify React State Directly ?](#why-not-to-modify-react-state-directly)
- [2 Difference between HTML and React Event Handling?](#difference-between-html-and-react-event-handling)
- [3 Why Jsx?](#why-jsx)
- [4 Can browser read JSX directly?](#can-browser-read-jsx-directly)
- [5 How do you use JavaScript in JSX?](#how-do-you-use-javascript-in-jsx)
- [6 What is Immutable ?](#what-is-immutable)
- [7 What is component and props in React?](#what-is-component-and-props-in-react)
- [8 Why should Component names start with capital letter in React?](#why-should-component-names-start-with-capital-letter-in-react)
- [9 What is mount and unmount React?](#what-is-mount-and-unmount-react)
- [10 When render is called in React?](#when-render-is-called-in-react)
- [11 What is uses of componentDidMount in react](#what-is-uses-of-componentdidmount-in-react)
- [12 Why is the key important in React list?](#why-is-the-key-important-in-react-list)
- [13 What is the use of componentWillUnmount?](#what-is-the-use-of-componentwillunmount)
- [14 What is State in react ?](#what-is-state-in-react)
- [15 What is the lifecycle of a component?](#what-is-the-lifecycle-of-a-component)
- [16 What is SyntheticEvent ?](#what-is-syntheticevent)
- [17 Why we use synthetic events in ReactJS ?](#why-we-use-synthetic-events-in-reactjs)
- [18 What is the use of toggle in JavaScript?](#what-is-the-use-of-toggle-in-javascript)
- [19 What is state in React?](#what-is-state-in-react)
- [20 What is React and why use it?](#what-is-react-and-why-use-it)
- [21 What are the differences between props and state](#what-are-the-differences-between-props-and-state)
- [22 What are pure components with example?](#what-are-pure-components-with-example)
- [23 What are props in React?](#what-are-props-in-react)
- [24 How to create components in React?](#how-to-create-components-in-react)
- [25 How JSX works in React ?](#how-jsx-works-in-react)
<br/><br/><br/><br/>

1. ### Why Not To Modify React State Directly ?

When we manually modify the state it won't trigger the component to re-render. So it's better to use the setState method.

```jsx
this.setState({
	count: this.state.count + 1,
})
```

```jsx
const [count, setCount] = useState(0)
setCount(count + 1)
```

2. ### Difference between HTML and React Event Handling?

There are have some syntactic and differences rules between HTML and React event handling.

**HTML** HTML event handling is done using the attribute or the addEventListener method. It directly works on the DOM (Real) element.

```html
<button onclick="alert('Hello')">Click Me</button>

<script>
	const button = document.querySelector('button')
	button.addEventListener('click', function () {
		alert('Hello')
	})
</script>
```

**React** we use the concept of virtual DOM, so all the events need to specify at the time of creating the component. Here in App.js file, we have defined one component App, which is having a button. We have used “onClick” event and we are providing a method name instead of a string. As in JSX,

```jsx
const App = () => {
	const handleClick = () => {
		alert('Hello')
	}
	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
		</div>
	)
}
```

3. ### Why Jsx?

JSX is a JavaScript syntax extension for React. It allows you to write HTML-like syntax in your JavaScript code. React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

**JSX in React**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello, world!</h1>

ReactDOM.render(element, document.getElementById('root'))
```

4. ### Can browser read JSX directly?

No - Browser can't read JSX Because it is not a valid JavaScript syntax. Browser engine can't understand It and it will throw an error. JSX is not intended to implemented by the engine or browser. it is intended to be used by various transpilers and bundlers to convert JSX to JavaScript.

5. ### How do you use JavaScript in JSX?

To add Javascript code inside JSX, you need to use the { } syntax. In curly braces, you can write any valid JavaScript code. The code will be executed when the component is rendered.

**Example of Javascript in JSX**

```jsx
const App = () => (
	<div>
		<h1>{2 + 2}</h1>
		<p>This is a paragraph.</p>
	</div>
)
```

The above code will render the following HTML:

```html
<div>
	<h1>4</h1>
	<p>This is a paragraph.</p>
</div>
```

We can also use Javascript expressions inside attributes of JSX elements.

```jsx
const App = () => {
	const source = 'https://facebook.github.io/react/img/logo_og.png'
	return (
		<div>
			<img src={source} />
		</div>
	)
}
```

6. ### What is Immutable ?

Immutable is a data structure that cannot be changed. For example, if you change the value of a property, the property is no longer the same. Immutable data structures are often used to prevent bugs from happening. In Immutable, you can't change the value of a property.

**Example of Immutable**

```js
'use strict'
const obj = {
	name: 'John',
	age: 30,
}

const newObj = Object.freeze(obj)
newObj.age = 40
// throws an error Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'
```

7. ### What is component and props in React?

Component is a function It accepts props as an argument and returns a React element. Return elements describe the UI how it should look. A component can be uses in other components jsx, or in the root component. In React there are two types of components: Class based and Functional Components.

**Class based Components**
Class based components are the most common type of components. They are the ones that are written in JavaScript ES6 classes.

```js
class MyComponent extends React.Component {
	render() {
		return <h1>Hello World</h1>
	}
}
```

**Functional Components**
Functional components are the ones that are written in JavaScript ES6 functions.

```js
const MyComponent = () => <h1>Hello World</h1>
```

### **Props**

Props are the properties that are passed to a component.

```js
const MyComponent = (props) => <h1>{props.title}</h1>
```

8. ### Why should Component names start with capital letter in React?

If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

9. ### What is mount and unmount React?

The main job of React is to figure out what to render to the screen. React will do this by comparing the current state of the application to the previous state. React does so by `mounting` and `unmounting` components. When a component is mounted, React will render it to the DOM. When a component is unmounted, React will remove it from the DOM.

10. ### When render is called in React?

First of all, `render()` is not user callable. It is part of the React component lifecycle. Generally, it gets called by React at various app stages when the React component instantiates for the first time, or when there is a new update to the component state. Render does not take any arguments and returns a JSX.

11. ### What is uses of componentDidMount in react

ComponentDidMount is a special method that React calls after the component has been rendered to the DOM. This is a good place to put your setup code.

**Note:** ComponentDidMount is called after the component has been rendered, not before.

```jsx
class MyComponent extends React.Component {
	componentDidMount() {
		// do something
	}
	render() {
		return <div />
	}
}
```

12. ### Why is the key important in React list?

The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as `<li>` . Unique IDs are the best value to assign to keys.

**Example:**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	const names = ['John', 'Sara', 'Mark']
	return (
		<div>
			<h1>Hello World</h1>
			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</div>
	)
}
```

13. ### What is the use of componentWillUnmount?

This life cycle method is called when a component is unmounted and destroyed. It is a good place to clean up any resources that were allocated during the component's life cycle. Such as timers, event listeners, and network requests or any subscriptions to external data sources.

**Example of componentWillUnmount**

```jsx
class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = { date: new Date() }
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
	}
	tick() {
		this.setState({
			date: new Date(),
		})
	}
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}
```

The above code will render the clock every second. When the component is unmounted, the timer is cleared.

14. ### What is State in react ?

React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

15. ### What is the lifecycle of a component?

Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as a component lifecycle. There are different lifecycle methods that React provides at different phases of a component's life.

16. ### What is SyntheticEvent ?

SyntheticEvent , a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault() , except the events work identically across all browsers.

17. ### Why we use synthetic events in ReactJS ?

Different browsers where the same event has different names. Here wrapper does is triggering all the different names for the same event effect. Therefore, whenever we are triggering an event in a ReactJS, we are not actually trying to trigger the real DOM event, instead, we are using the ReactJS custom event type, which is the synthetic event.

The examples of the synthetic events are onClick(), onBlur() and onChange(). These all are not real DOM events but react synthetic events.

18. ### What is the use of toggle in JavaScript?

The ontoggle event occurs when the user opens or closes the ` <details>` element. The `<details>` element specifies additional details that the user can view or hide on demand.

19. ### What is state in React?

State is a plain JavaScript object that represents the state of a React component. That may change over time as the component updates over the component's lifecycle.

State is the only part of a React component that can change over time.

**Example: State in Class Based Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
				</button>
			</div>
		)
	}
}
```

**Example: State in Functional Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const MyComponent = () => {
	const [count, setCount] = React.useState(0)
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
```

20. ### What is React and why use it?

React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

21. ### What are the differences between props and state

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

22. ### What are pure components with example?

Pure component, it is only re-rendered when its props change. They are a good way to optimize your application. Pure components are a good way to avoid bugs caused by side-effects. It's doesn't have a life cycle or state.

**Example of a pure component:**

```jsx
import React from 'react'

const PureComponent = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	)
}

export default PureComponent
```

**Example of a component that is not pure:**

```jsx
import React from 'react'

const Component = (props) => {
	const [count, setCount] = React.useState(0)
	useEffect(() => {
		fetch('https://api.github.com/users/facebook/repos')
			.then((res) => res.json())
			.then((data) => {
				setCount(data.length)
			})
	}, [])

	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
```

23. ### What are props in React?

Props are arguments passed into a component. They are single or multiple values that are passed into a component similar to how attributes are passed into an HTML element. They are data passed down from a parent component to a child component. It's useful to pass custom data into a component. Manually tiggering a re-render is not necessary.

**Example: Props in Class Based Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.age}</p>
			</div>
		)
	}
}

class ParentComponent extends React.Component {
	render() {
		return (
			<div>
				<ChildComponent name='John' age='30' />
				<ChildComponent name='Mary' age='25' />
			</div>
		)
	}
}
```

**Example: Props in Functional Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const ChildComponent = (props) => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.age}</p>
		</div>
	)
}

const ParentComponent = () => {
	return (
		<div>
			<ChildComponent name='John' age='30' />
			<ChildComponent name='Mary' age='25' />
		</div>
	)
}
```

24. ### How to create components in React?

There are two ways to create components in React:

    1. Create a component class.
    2. Create a function component.

1. **Create a component class.**
   ES6 class syntax is used to create a component class.

```jsx
import React from 'react'
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		)
	}
}
```

2. **Create a function component.**
   Function syntax is used to create a function component.

   ```jsx
   import React from 'react'
   const App = () => {
   	return (
   		<div>
   			<h1>Hello World</h1>
   		</div>
   	)
   }
   ```

Both components can be rendered to the screen using ReactDOM.render().

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
```

25. ### How JSX works in React ?

JSX is a syntax extension to JavaScript that allows us to write HTML like syntax. It is a subset of JavaScript that allows us to write HTML-like syntax.

**Withouts JSX we would have to write HTML like syntax.**

```jsx
const element = React.createElement(
	'div',
	null,
	React.createElement('h1', null, 'This is a header'),
	React.createElement('p', null, 'This is a paragraph')
)
```

**With JSX we can write HTML like syntax.**

```jsx
const element = (
	<div>
		<h1>This is a header</h1>
		<p>This is a paragraph</p>
	</div>
)
```

JSX uses babel to transpile HTML like syntax to JavaScript. Babel is a compiler that transpiles JavaScript code to JavaScript.

