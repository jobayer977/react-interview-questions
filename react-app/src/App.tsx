import Child from './Child'
import React from 'react'
const App = () => {
	const items = [
		{ id: 1, text: 'item 1' },
		{ id: 2, text: 'item 2' },
		{ id: 3, text: 'item 3' },
	]
	return (
		<div>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	)
}
export default App
