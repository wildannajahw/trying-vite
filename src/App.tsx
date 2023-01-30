import {QueryClientProvider} from '@tanstack/react-query/build/lib/QueryClientProvider';
import getQueryClient from './utils/getQueryClient';

function App() {
	const queryClient = getQueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			</div>
		</QueryClientProvider>
	);
}

export default App;
