'use client'

import { useState } from 'react'
import { useStore } from '@/store/store'

const ToDo = () => {
	const addTodo = useStore((state) => state.addTodo)
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		addTodo({ id: Math.random().toString(), content: inputValue })
		setInputValue('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='outline outline-gray-400/75 rounded-sm pr-2'
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button type='submit' className='px-2 rounded-sm hover:bg-zinc-400'>
				Submit
			</button>
		</form>
	)
}

export default ToDo
