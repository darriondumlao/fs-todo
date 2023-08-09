'use client'
import React from 'react'

export default function Home() {
	const [todos, setTodos] = React.useState([])
	const todoInput = React.useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		setTodos([...todos, todoInput.current.value])
		todoInput.current.value = ''
	}

	const handleDelete = (indexToDelete) => {
		setTodos(todos.filter((_, index) => index !== indexToDelete))
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					New ToDo:
					<input ref={todoInput} type='text' placeholder='type here...' />
				</label>
				<button type='submit'>Submit</button>
			</form>
			<div>
				{todos.map((todo, index) => (
					<div key={index}>
						{todo}
						<button onClick={() => handleDelete(index)}>Delete</button>
					</div>
				))}
			</div>
		</div>
	)
}
