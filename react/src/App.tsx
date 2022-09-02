import ReactDOM from 'react-dom'
const App = () => {
	const items = [
		{ id: 1, text: 'item 1' },
		{ id: 2, text: 'item 2' },
		{ id: 3, text: 'item 3' },
	]
	const body: any = document.querySelector('body')

	return (
		<div>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
			{ReactDOM.createPortal(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
					cupiditate omnis. Omnis quis, dolore expedita neque pariatur alias,
					eos tenetur iure totam sapiente veniam corporis deserunt? Labore
					quisquam qui cupiditate!
				</div>,
				body
			)}
		</div>
	)
}
export default App
