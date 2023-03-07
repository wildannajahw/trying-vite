import {lazy, Suspense, type ElementType} from 'react';
import {Navigate, useLocation, useRoutes} from 'react-router-dom';
import MainLayout from '../layouts/main';

// eslint-disable-next-line react/display-name
const Loadable = (Component: ElementType) => (props: any) => {
	// eslint-disable-next-line no-unused-vars
	const {pathname} = useLocation();

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{element: <HomePage />, index: true},
				// {path: 'about-us', element: <About />},
				// {path: 'contact-us', element: <Contact />},
				// {path: 'faqs', element: <Faqs />},
			],
		},
		{path: '*', element: <Navigate to='/404' replace />},
	]);
}

// eslint-disable-next-line new-cap
const HomePage = Loadable(lazy(async () => import('../Pages/Home')));
