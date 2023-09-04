'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useStore } from '@/store/store'

const Columns = () => {
	const todos = useStore((state) => state.todos)
}

export default Columns

export type Todo = {
	id: string
	content: string
}

export const columns: ColumnDef<Todo>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},

	{
		accessorKey: 'content',
		header: ({ column }) => {
			return <div className='flex justify-center'>Todo</div>
		},
		cell: ({ row }) => {
			const isSelected = row.getIsSelected()
			const todo = row.original
			return (
				<div
					className={`flex justify-center ${isSelected ? 'line-through' : ''}`}>
					{todo.content}
				</div>
			)
		},
	},

	{
		id: 'actions',
		cell: ({ row }) => {
			const payment = row.original
			const todo = row.original

			const handleDelete = () => {
				useStore.getState().deleteTodo(todo.id)
			}

			const handleEdit = () => {
				const newContent = prompt('Enter new content for the todo')
				if (newContent) {
					useStore.getState().editTodo(todo.id, newContent)
				}
			}

			return (
				<div className='flex justify-end'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' className='h-8 w-8 p-0'>
								<span className='sr-only'>Open menu</span>
								<MoreHorizontal className='h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuItem onClick={handleEdit}>
								Edit Todo
							</DropdownMenuItem>
							<DropdownMenuItem onClick={handleDelete}>
								Delete Todo
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			)
		},
	},
]
