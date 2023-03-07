import {QueryClientProvider} from '@tanstack/react-query';
import Router from './routes';
import getQueryClient from './utils/getQueryClient';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

function App() {
	const queryClient = getQueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Router />
				<ReactQueryDevtools initialIsOpen={false} />
			</div>
		</QueryClientProvider>
	);
}

export default App;
