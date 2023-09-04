import create from 'zustand'

type Todo = {
	id: string
	content: string
}

type Store = {
	todos: Todo[]
	addTodo: (todo: Todo) => void
	deleteTodo: (id: string) => void
	editTodo: (id: string, newContent: string) => void
}

export const useStore = create<Store>((set) => ({
	todos: [],
	addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
	deleteTodo: (id) =>
		set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
	editTodo: (id, newContent) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, content: newContent } : todo
			),
		})),
}))
