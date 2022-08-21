# Frequently Asked JavaScript Interview Questions 
 ### Resources 
- [reactjs-interview-questions - by sudheerj](https://github.com/sudheerj/reactjs-interview-questions#what-is-react) 
 

 ## Table of Contents

- [1 How JSX works in React ?](#how-jsx-works-in-react)
- [2 How to create components in React?](#how-to-create-components-in-react)
- [3 What are pure components with example?](#what-are-pure-components-with-example)
- [4 What is React and why use it?](#what-is-react-and-why-use-it)
- [5 What is state in React?](#what-is-state-in-react)
<br/><br/><br/><br/>

1. ### How JSX works in React ?

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

2. ### How to create components in React?

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

3. ### What are pure components with example?

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

4. ### What is React and why use it?

React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

5. ### What is state in React?

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

