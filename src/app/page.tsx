import DataTableDemo from '@/components/data-table'
import ToDo from '@/components/Todo'

// async function getData(): Promise {
// 	// Fetch data from your API here.
// 	return [
// 		{
// 			id: '728ed52f',
// 			amount: 100,
// 			status: 'pending',
// 			email: 'm@example.com',
// 		},
// 		// ...
// 	]
// }

export default async function DemoPage() {
	// const data = await getData()

	return (
		<div className='container mx-auto py-10'>
			<ToDo />
			<DataTableDemo />
		</div>
	)
}
