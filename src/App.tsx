import {QueryClientProvider} from '@tanstack/react-query';
import Router from './routes';
import getQueryClient from './utils/getQueryClient';

function App() {
	const queryClient = getQueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Router />
			</div>
		</QueryClientProvider>
	);
}

export default App;
