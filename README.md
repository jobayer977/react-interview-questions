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
- [19 How do I use componentWillMount?](#how-do-i-use-componentwillmount)
- [20 When component did mount is called?](#when-component-did-mount-is-called)
- [21 What is componentWillReceiveProps?](#what-is-componentwillreceiveprops)
- [22 How can we display a list in react ?](#how-can-we-display-a-list-in-react)
- [23 What is state in React?](#what-is-state-in-react)
- [24 What is the use of key in react ?](#what-is-the-use-of-key-in-react)
- [25 What is reconciliation?](#what-is-reconciliation)
- [26 What is a purpose of code splitting?](#what-is-a-purpose-of-code-splitting)
- [27 What is the proper placement for error boundaries?](#what-is-the-proper-placement-for-error-boundaries)
- [28 When to Use Context](#when-to-use-context)
- [29 How does a forward Ref work?](#how-does-a-forward-ref-work)
- [30 What is controlled component in react ?](#what-is-controlled-component-in-react)
- [31 What is uncontrolled component in react ?](#what-is-uncontrolled-component-in-react)
- [32 What are higher-order component?](#what-are-higher-order-component)
- [33 What are the children in React?](#what-are-the-children-in-react)
- [34 What is React and why use it?](#what-is-react-and-why-use-it)
- [35 What is the purpose of a function as a child in React?](#what-is-the-purpose-of-a-function-as-a-child-in-react)
- [36 What is virtualization in rendering?](#what-is-virtualization-in-rendering)
- [37 What is the use of React portals?](#what-is-the-use-of-react-portals)
- [38 What is the use of refs in React?](#what-is-the-use-of-refs-in-react)
- [39 What are the render props?](#what-are-the-render-props)
- [40 What is Strict Mode in react ?](#what-is-strict-mode-in-react)
- [41 What are Hooks in React ?](#what-are-hooks-in-react)
- [42 What are the two rules of React Hooks?](#what-are-the-two-rules-of-react-hooks)
- [43 Why is useEffect used?](#why-is-useeffect-used)
- [44 What is useState used for?](#what-is-usestate-used-for)
- [45 What are the differences between props and state](#what-are-the-differences-between-props-and-state)
- [46 What is useContext used for in React?](#what-is-usecontext-used-for-in-react)
- [47 What is useReducer for?](#what-is-usereducer-for)
- [48 Why useCallback is used in React?](#why-usecallback-is-used-in-react)
- [49 What is useMemo used for?](#what-is-usememo-used-for)
- [50 What is useRef used for?](#what-is-useref-used-for)
- [51 Does useLayoutEffect run before render?](#does-uselayouteffect-run-before-render)
- [52 What are pure components with example?](#what-are-pure-components-with-example)
- [53 What are props in React?](#what-are-props-in-react)
- [54 How to create components in React?](#how-to-create-components-in-react)
- [55 How JSX works in React ?](#how-jsx-works-in-react)
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

19. ### How do I use componentWillMount?

In React, the componentWillMount() method is called before the render() method. This is where we can set up any initial state or perform any other operations before the render() method is called.

**Note:** `componentWillMount()` is now deprecated in favor of `componentDidMount()`. Because it could be called multiple times, and maybe memory leaks could occur, So it is recommended to use `componentDidMount()` instead.

**Example:**

```jsx

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default App;
```

**OUTPUT:**

```html
<div>1</div>
```

20. ### When component did mount is called?
React component call the componentDidMount() method calls once after the component has been rendered to the DOM. This is where we can perform DOM-related operations, such as adding event listeners or timers. Because now out DOM is ready, we can start making changes to the DOM.

**Example**

```jsx
class App extends React.Component {
 state: Record<string, any> = {}
 constructor(props: any) {
  super(props)
  this.state = {
   count: 0,
  }
  this.handleClick = this.handleClick.bind(this)
 }

 componentDidMount() {
  console.log('Component Did Mount')
 }
 handleClick() {
  this.setState({
   count: this.state.count + 1,
  })
 }
 render() {
  console.log('Render Method')
  return (
   <div>
    <p>{this.state.count}</p>
    <button onClick={this.handleClick}>Increment</button>
   </div>
  )
 }
}
export default App

// Component Did Mount
// Render Method
// Render Method
// Render Method
// Render Method
// Render Method
// Render Method


```

21. ### What is componentWillReceiveProps?
This method is used during the updating phase of the React lifecycle. This function is generally called if the props passed to the component change. It is used to update the state in response with the new received props.

```jsx
class App extends React.Component {
 state: Record<string, any> = {}
 constructor(props: any) {
  super(props)
  this.state = {
   count: 0,
  }
 }
 render() {
  return (
   <>
    <Child currentCount={this.state.count} />
    <button
     onClick={() =>
      this.setState({
       count: this.state.count + 1,
      })
     }>
     Increment
    </button>
   </>
  )
 }
}

```

**Child**

```jsx
 class Child extends Component<{ currentCount: number }> {
 componentWillReceiveProps(nextProps: any): void {
  console.log('componentWillReceiveProps', nextProps)
 }
 render() {
  return <div>Count - {this.props.currentCount}</div>
 }
}```

22. ### How can we display a list in react ?

To Render a list in React. we can use the following code:

**Class Based Component**

```jsx
class App extends React.Component {
  state = {
    items: [],
  }
  componentDidMount() {
    this.setState({
      items: [
        { id: 1, text: 'item 1' },
        { id: 2, text: 'item 2' },
        { id: 3, text: 'item 3' },
      ],
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}
```

**Functional Component**

```jsx
const App = () => {
  const items = [
    { id: 1, text: 'item 1' },
    { id: 2, text: 'item 2' },
    { id: 3, text: 'item 3' },
  ]
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
```

23. ### What is state in React?

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

24. ### What is the use of key in react ?

Keys are used to identify which item in a list has changed. Keys should be unique for each item in a list. The best way to generate a key is to use the item's IDs in the list.

```jsx
const items = [
  { id: 1, text: 'Hello' },
  { id: 2, text: 'World' },
  { id: 3, text: '!' },
];

const listItems = items.map(item => (
  <li key={item.id}>{item.text}</li>
));
```

25. ### What is reconciliation?

Reconciliation is the process of comparing two sets of data and determining which items need to be added, removed, or updated to match the new data. This process is known as a diff, and it is often used to determine which DOM nodes need to be updated to reflect the new data. In React, reconciliation is performed automatically by React when the component is re-rendered. This is called reconciliation. The process of reconciling is known as a diff.

26. ### What is a purpose of code splitting?

Code Splitting is a technique for splitting large JavaScript files into smaller chunks. When we bundle our application we combine all the code into a single file and the browser initially loads the whole code. This can be a problem if the code is large and the browser has to download it all at once. Her Code splitting allows us to split the code into smaller chunks(file) and load each chunk separately when it is needed.

<details>
<summary>Example</summary>

```jsx
const ChildComponent = React.lazy(() => import('./ChildComponent'))

const App = () => (
	<React.Suspense fallback={<div>Loading...</div>}>
		<ChildComponent />
	</React.Suspense>
)
```

<details>

27. ### What is the proper placement for error boundaries?

Error boundaries are React components that catch and display errors that occur in their children. They are useful for displaying error messages to the user. So it's best to place error boundaries at the top of the component tree and catch errors all the way down.

28. ### When to Use Context

Context is a way to pass data through the component tree without having to pass props down manually at every level. This can be very useful for keeping data that is shared between components local to the components that need it. For example, a global theme object or a current language.

29. ### How does a forward Ref work?

React forwardRef is a method that allows parent components pass down (i.e., “forward”) refs to their children. Using forwardRef in React gives the child component a reference to a DOM element created by its parent component. This then allows the child to read and modify that element anywhere it is being used.

30. ### What is controlled component in react ?

Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc.

**Example**

```js
function App() {
	const [name, setName] = useState('')
	const [showName, setShowName] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setShowName(true)
	}

	return (
		<div className='App'>
			<form>
				<label>Name:</label>
				<input
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={handleSubmit} type='submit'>
					Submit
				</button>
			</form>
			{/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */}
			{showName === true && <p>You have submitted. Name: {name}</p>}
		</div>
	)
}

export default App
```

31. ### What is uncontrolled component in react ?

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, we can use a `ref` to get form values from the DOM.

32. ### What are higher-order component?

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.

33. ### What are the children in React?

children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.

```jsx
<MyComponent>Hello world!</MyComponent>
```

34. ### What is React and why use it?

React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

35. ### What is the purpose of a function as a child in React?

A Function as child component is a pattern that lets you pass a render function to a component as the children prop so you can change what you can pass as children to a component.

36. ### What is virtualization in rendering?

Virtualization is a technique that allows us to render only a subset of the items in a list. This is useful when we have a large list of items that we want to render, but we don't want to render all of them at once. This is especially useful when we have a list of items that are expensive to render, such as images or videos.

37. ### What is the use of React portals?

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. The first argument ( child ) is any renderable React child, such as an element, string, or fragment. The second argument ( container ) is a DOM element.

**Example**

```jsx
const App = () => {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.querySelector('body')
	)
}
```

38. ### What is the use of refs in React?

Refs provide a way to access DOM nodes or React elements created in the render method. Refs are useful when you need to manage focus, select text, or perform animations and working with third-party DOM libraries.

**Example**

```jsx
class CustomTextInput extends React.Component {
	constructor(props) {
		super(props)
		// create a ref to store the textInput DOM element
		this.textInput = React.createRef()
		this.focusTextInput = this.focusTextInput.bind(this)
	}

	focusTextInput() {
		// Explicitly focus the text input using the raw DOM API
		// Note: we're accessing "current" to get the DOM node
		this.textInput.current.focus()
	}

	render() {
		// tell React that we want to associate the <input> ref
		// with the `textInput` that we created in the constructor
		return (
			<div>
				<input type='text' ref={this.textInput} />

				<input
					type='button'
					value='Focus the text input'
					onClick={this.focusTextInput}
				/>
			</div>
		)
	}
}
```

39. ### What are the render props?

The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

**Example**

```jsx
const Mouse = (props) => {
	const [mouse, setMouse] = useState({ x: 0, y: 0 })

	const handleMouseMove = (event) => {
		setMouse({
			x: event.clientX,
			y: event.clientY,
		})
	}

	return (
		<div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
			{props.render(mouse)}
		</div>
	)
}

const App = () => {
	return (
		<div>
			<h1>Move the mouse around!</h1>
			<Mouse
				render={(mouse) => (
					<p>
						The current mouse position is ({mouse.x}, {mouse.y})
					</p>
				)}
			/>
		</div>
	)
}
```

40. ### What is Strict Mode in react ?

StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

**Example**

```jsx
import React from 'react'

function ExampleApplication() {
	return (
		<div>
			<Header />
			<React.StrictMode>
				<div>
					<ProfilePage />
				</div>
			</React.StrictMode>
			<Footer />
		</div>
	)
}
```

41. ### What are Hooks in React ?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

42. ### What are the two rules of React Hooks?

Hooks are JavaScript functions, but they impose two additional rules:

- Don't call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components.

43. ### Why is useEffect used?

The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.

44. ### What is useState used for?

useState is a Hook (function) that allows us to have state variables in functional components.

```js
const [count, setCount] = useState(0)
```

useState returns an array with 2 values: the current state and a function to update it.

**Example**

```js
import React, { useState } from 'react'
function Example() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0)
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
```

45. ### What are the differences between props and state

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

46. ### What is useContext used for in React?

Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component.

**Example**

```js
import { render } from 'react-dom'
import React, { useState } from 'react'
const ThemeContext = React.createContext('light')

function App() {
	const [theme, setTheme] = useState('light')
	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<Toolbar />
		</ThemeContext.Provider>
	)
}
```

## useContext

```js
import React, { useContext } from 'react'
function Toolbar() {
	const { theme, setTheme } = useContext(ThemeContext)
	return (
		<div>
			Current theme: {theme}
			<button onClick={() => setTheme('dark')}>Dark</button>
			<button onClick={() => setTheme('light')}>Light</button>
		</div>
	)
}
```

47. ### What is useReducer for?

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

**Example**

```js
function reducer(state, action) {
	switch (action.type) {
		case 'reset':
			return init(action.payload)
		case 'increment':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count - 1 }
		default:
			throw new Error()
	}
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, { count: 1 })
	return (
		<>
			Count: {state.count}
			<button
				onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
				Reset
			</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
		</>
	)
}
```

48. ### Why useCallback is used in React?

The `useCallback` hook is used to memorize the callback function. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. `shouldComponentUpdate`).

**Example**

```js
const Child = React.memo(function Child({ onClick, name }) {
	console.log('Rendering Child', name)
	return (
		<button onClick={onClick} type='button'>
			{name}
		</button>
	)
})

const Parent = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('Mary')

	const handleAlertClick = useCallback(() => {
		setTimeout(() => {
			alert('You clicked on: ' + name)
		}, 3000)
	}, [name])

	return (
		<div>
			<Child name={name} onClick={handleAlertClick} />
			<hr />
			<button onClick={() => setCount((c) => c + 1)}>+ {count}</button>
			<button onClick={() => setName('John')}>Change name</button>
		</div>
	)
}
```

49. ### What is useMemo used for?

useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

**Example**

```js
const App = () => {
	const [val, setVal] = useState(0)
	const [val2, setVal2] = useState(0)

	const expensive = useMemo(() => {
		let i = 0
		while (i < 1000000000) i++
		return val + val2
	}, [val, val2])

	return (
		<div>
			<input
				type='number'
				value={val}
				onChange={(e) => setVal(parseInt(e.target.value))}
			/>
			<input
				type='number'
				value={val2}
				onChange={(e) => setVal2(parseInt(e.target.value))}
			/>
			<div>{expensive}</div>
		</div>
	)
}
```

The above example will only recompute the expensive value when the val or val2 changes. If you remove the dependency array, the expensive value will be recomputed on every render.

50. ### What is useRef used for?

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

**Example**

```js
function TextInputWithFocusButton() {
	const inputEl = useRef(null)
	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus()
	}
	return (
		<>
			<input ref={inputEl} type='text' />
			<button onClick={onButtonClick}>Focus the input</button>
		</>
	)
}
```

51. ### Does useLayoutEffect run before render?

The useLayoutEffect hook works synchronously. It runs immediately after React has performed all DOM mutations. It will run after every render but before the screen is updated.

```js
const App = () => {
	const [val, setVal] = useState(0)
	const [val2, setVal2] = useState(0)

	useLayoutEffect(() => {
		console.log('useLayoutEffect')
	})

	return (
		<div>
			<input
				type='number'
				value={val}
				onChange={(e) => setVal(parseInt(e.target.value))}
			/>
			<input
				type='number'
				value={val2}
				onChange={(e) => setVal2(parseInt(e.target.value))}
			/>
		</div>
	)
}
```

52. ### What are pure components with example?

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

53. ### What are props in React?

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

54. ### How to create components in React?

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

55. ### How JSX works in React ?

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

