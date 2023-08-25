// 'use client'
// import React, { useState, useRef } from 'react'
// import Divider from './Divider'

// const Todo = () => {
// 	const [todos, setTodos] = useState([])
// 	const todoInput = useRef(null)

// 	const handleSubmit = (event) => {
// 		event.preventDefault()
// 		setTodos([...todos, { text: todoInput.current.value, completed: false }])
// 		todoInput.current.value = ''
// 	}

// 	const handleDelete = (indexToDelete) => {
// 		setTodos(todos.filter((_, index) => index !== indexToDelete))
// 	}

// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit} className='flex justify-center'>
// 				<div className='p-2 flex'>
// 					<div>New ToDo:</div>
// 					<input
// 						ref={todoInput}
// 						type='text'
// 						placeholder='type here...'
// 						className='text-green-500'
// 					/>
// 				</div>
// 				<button type='submit' className='rounded-xl bg-orange-400 p-1 text-sm'>
// 					Add Todo
// 				</button>
// 			</form>
// 			<div>
// 				{todos.map((todo, index) => (
// 					<div className='p-8'>
// 						<div
// 							key={index}
// 							className='border-4 border-black flex justify-center space-x-4'>
// 							<span>{todo.text}</span>
// 							<button
// 								className='border-2 border-green-500 rounded-none'
// 								onClick={() => handleDelete(index)}>
// 								Delete
// 							</button>
// 						</div>
// 						<Divider />
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default Todo
